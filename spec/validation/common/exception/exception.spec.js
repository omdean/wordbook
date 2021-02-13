'use strict';

const Exception = require('../../../../validation/common/exception');

describe('class Exception', function() {
  it('create an exception object', () => {
    const name = 'exception';
    const message = 'An exception occurs.'
    const exp = new Exception(name, message);

    expect(Object.prototype.isPrototypeOf(exp)).toBeTrue();
    expect(exp.name).toBe(name);
    expect(message).toBe(message);
  });
});
