import { getCookieValue } from './utils/cookie';

export const ANALYTICS_COOKIE_NAME = 'stardogAnalyticsConsent';

export type AnalyticsConsent = {
  consented: boolean;
  identity?: string;
};

export const decodeAnalyticsCookie = (rawCookie: string): AnalyticsConsent => {
  const defaultConsent: AnalyticsConsent = {
    consented: false,
  };
  try {
    const decoded = JSON.parse(atob(rawCookie));

    const consented: boolean = decoded.consented;
    const identity: string = decoded.identity;

    if (
      typeof consented !== 'boolean' ||
      (typeof identity !== 'undefined' && typeof identity !== 'string')
    ) {
      throw new Error('invalid cookie');
    }

    return {
      consented,
      identity,
    };
  } catch {
    return defaultConsent;
  }
};

export const getAnalyticsConsentCookie = (): AnalyticsConsent | null => {
  const rawConsentCookie = getCookieValue(ANALYTICS_COOKIE_NAME);
  if (rawConsentCookie === '') {
    return null;
  }
  return decodeAnalyticsCookie(rawConsentCookie);
};