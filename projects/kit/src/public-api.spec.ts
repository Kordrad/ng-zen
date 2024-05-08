import * as fileElements from './public-api';

describe('public-api', () => {
  it('should export library components', () => {
    expect(Object.keys(fileElements)).toBeTruthy();
  });
});
