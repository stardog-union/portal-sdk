import { getCookies } from '../getCookies';

describe('getCookies', () => {
  it('returns document.cookie', () => {
    const cookie = 'some-value';

    document.cookie = cookie;
    expect(getCookies()).toBe(cookie);
  });
});
