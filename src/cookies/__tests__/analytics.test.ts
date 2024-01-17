import { getAnalyticsConsent } from '../analytics';

const mockCookiebot = (
  args: Partial<typeof window.Cookiebot> = {}
): typeof window.Cookiebot => ({
  consented: false,
  declined: false,
  hasResponse: false,
  doNotTrack: false,
  consent: {
    marketing: false,
    statistics: false,
    preferences: false,
    necessary: false,
    stamp: '',
  },
  regulations: {
    gdprApplies: false,
    ccpaApplies: false,
    lgpdApplies: false,
  },

  show: jest.fn(),
  hide: jest.fn(),
  renew: jest.fn(),
  getScript: jest.fn(),
  runScripts: jest.fn(),
  withdraw: jest.fn(),
  submitCustomConsent: jest.fn(),

  ...args,
});

describe('analytics', () => {
  beforeEach(() => {
    window.Cookiebot = undefined;
  });
  afterEach(() => {
    window.Cookiebot = undefined;
  });

  describe('getAnalyticsConsent', () => {
    it('returns null if Cookiebot is not installed', () => {
      expect(getAnalyticsConsent()).toBe(null);
    });

    it('returns null if Cookiebot has no response', () => {
      window.Cookiebot = mockCookiebot();
      expect(getAnalyticsConsent()).toBe(null);
    });

    it('returns the Cookiebot consent values', () => {
      window.Cookiebot = mockCookiebot({
        hasResponse: true,
        consent: {
          marketing: true,
          statistics: true,
          preferences: true,
          necessary: true,
          stamp: 'stamp',
        },
      });
      expect(getAnalyticsConsent()).toEqual({
        marketing: true,
        statistics: true,
        preferences: true,
      });
    });
  });
});
