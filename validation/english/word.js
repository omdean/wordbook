'use strict';

const enConstant = require('../common/constant/en');

const firstItemRegex = /^[a-z]+$/i;
const restItemRegex = /^\[[a-zA-Z]+]/i;

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
  for(let word of words) {
    // first item is word
    // if (!firstItemRegex.test(word[0]));
    // other items should follow the template
  }
  return result;
}

module.exports = {
  validate
};
