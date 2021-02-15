'use strict';

const { BaseException } = require('../../../../validation/common/exception');

describe('class Exception', function() {
  it('create an exception object', () => {
    const message = 'An exception occurs.'
    const exp = new BaseException(message);

    expect(Object.prototype.isPrototypeOf(exp)).toBeTrue();
    expect(exp.name).toBe('Exception');
    expect(message).toBe(message);
  });
});
