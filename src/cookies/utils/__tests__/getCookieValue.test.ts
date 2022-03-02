import * as getCookiesImport from '../getCookies';
import { getCookieValue } from '../getCookieValue';

jest
  .spyOn(getCookiesImport, 'getCookies')
  .mockImplementation(() => 'key1=value1; key2=value2; key3=value3');

describe('getCookieValue', () => {
  it('returns specific cookie value when given a cookie name', () => {
    expect(getCookieValue('key2')).toBe('value2');
  });

  it('returns blank string when cookie not found', () => {
    expect(getCookieValue('not-found')).toBe('');
  });
});
