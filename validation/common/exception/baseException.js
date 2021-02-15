'use strict';

class BaseException extends Error {
  constructor(message) {
    super(message);
    this.name = 'Exception';
  }
  
}

module.exports = BaseException;