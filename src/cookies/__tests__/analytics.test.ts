import { decodeAnalyticsCookie, getAnalyticsConsentCookie } from '../analytics';
import * as getCookieValueImport from '../utils/getCookieValue';

const VALID_COOKIE = { consented: true, identity: 'identity' };
const makeCookie = (obj: any) => btoa(JSON.stringify(obj));

describe('analytics', () => {
  beforeEach(() => {
    jest
      .spyOn(getCookieValueImport, 'getCookieValue')
      .mockImplementation(() => makeCookie(VALID_COOKIE));
  });

  describe('decodeAnalyticsCookie', () => {
    it('returns consented and identity when given a valid cookie', () => {
      const cookie = decodeAnalyticsCookie(makeCookie(VALID_COOKIE));
      expect(cookie).toBeTruthy();
      expect(cookie?.consented).toBe(VALID_COOKIE.consented);
      expect(cookie?.identity).toBe(VALID_COOKIE.identity);

      const cookieWithoutIdentity = decodeAnalyticsCookie(
        makeCookie({
          ...VALID_COOKIE,
          identity: undefined,
        })
      );
      expect(cookieWithoutIdentity).toBeTruthy();
      expect(cookieWithoutIdentity?.consented).toBe(VALID_COOKIE.consented);
      expect(cookieWithoutIdentity?.identity).toBe(undefined);
    });

    it('returns null when given an invalid cookie', () => {
      [
        '',
        'AJSKLD',
        makeCookie({}),
        makeCookie({
          ...VALID_COOKIE,
          consented: 'no!',
        }),
        makeCookie({
          ...VALID_COOKIE,
          identity: 123,
        }),
      ].forEach((cookie) => {
        expect(decodeAnalyticsCookie(cookie)).toBe(null);
      });
    });
  });

  describe('getAnalyticsConsentCookie', () => {
    it('returns null if cookie is unset', () => {
      jest
        .spyOn(getCookieValueImport, 'getCookieValue')
        .mockImplementation(() => '');

      expect(getAnalyticsConsentCookie()).toBe(null);
    });

    it('returns a parsed cookie object when given a valid cookie', () => {
      expect(getAnalyticsConsentCookie()).toBeTruthy();
    });
  });
});
