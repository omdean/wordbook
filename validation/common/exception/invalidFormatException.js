'use strict';

const BaseException = require("./baseException");

class InvalidFormatException extends BaseException {
  /**
   * Constructor
   *
   * @param {Object} detail - detail related to the exception
   * {
   *   "classification": "word",
   *   "item": ["word",...],
   *   "itemIndex": 1
   *   "subItemIndex": 1,
   *   "message": "error message"
   * }
   */
  constructor(detail = {}) {
    super(detail.message);
    this.name = 'InvalidFormatException';
    this.classification = detail.classification;
  }
}

module.exports = InvalidFormatException;
