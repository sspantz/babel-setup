import random from './index.js';

describe('test suit', () => {
  test('availability test', () => {
    expect(false).toEqual(false);
  });

  test('all should be [1, 2, 3, 4, 5]', () => {
    expect(random.all).toEqual([1, 2, 3, 4, 5]);
  });

  test('random() should be one of [1, 2, 3, 4, 5]', () => {
    expect(random.random()).toBeGreaterThanOrEqual(0);
    expect(random.random()).toBeLessThan(1);
  });
});
