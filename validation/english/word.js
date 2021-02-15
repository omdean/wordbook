'use strict';

const { classification, wordWidget } = require('../common/constant/en');
const { InvalidFormatException } = require('../common/exception');

const firstItemRegex = /^[a-z]+$/i;

/**
 * To validate collection content by specific format, as following:
 * 
 * ['word','[n]单词','[example]English word learning.']
 * 
 * @param {Array} words - word collection
 */
function validate(words = []) {
  const result = {
    valid: true
  };
  const loopRecord = {};
  for (let i = 0; i < words.length; i++) {
    loopRecord.item = words[i];
    loopRecord.itemIndex = i;
    // first item is word
    if (!firstItemRegex.test(words[0][0])) {
      result.valid = false;
      loopRecord.subItemIndex = 0;
      break;
    }
    for (let j = 1; j < words[i].length; j++) {
      const item = words[i][j];
      loopRecord.subItemIndex = j;
      // other items should follow the template
      const index = item.indexOf(']');
      if (index <= 1) {
        result.valid = false;
        break;
      };
      const widget = item.substring(1, index);
      if (!Object.values(wordWidget).includes(widget)) {
        result.valid = false;
        break;
      }
    }
    if (!result.valid) break;
  }
  if (result.valid) {
    return result;
  }
  const message = `${classification.word} validation error, sub item '${loopRecord.item[loopRecord.subItemIndex]}' is invalid.`;
  throw new InvalidFormatException({
    message
  });
}

module.exports = {
  validate
};
