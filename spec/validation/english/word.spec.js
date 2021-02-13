'use strict';

const { validate } = require('../../../validation/english/word');

describe('wordCollection', () => {
  const mockData = {};

  beforeEach(() => {
    mockData.word = [
      ["visualization","[n]显示;可视化"],
      ["integrity","[n]诚实正直","[example]Live your life with integrity"],
      ["jealous","[adj]吃醋的;妒忌的;爱惜的"]
    ]
  });

  it('validate', () => {
    const rt = validate(mockData.word);
    expect(rt.valid).toBe(true);
  });
});
