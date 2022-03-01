import { getCookieValue } from './utils/getCookieValue';
import { optionalTypeCheck } from './utils/optionalTypeCheck';

export const ANALYTICS_COOKIE_NAME = 'stardogAnalyticsConsent';

export type AnalyticsConsent = {
  consented: boolean;
  identity?: string;
};

export const decodeAnalyticsCookie = (
  rawCookie: string
): AnalyticsConsent | null => {
  try {
    const decoded = JSON.parse(atob(rawCookie));

    const consented: boolean = decoded.consented;
    const identity: string = decoded.identity;

    if (
      typeof consented !== 'boolean' ||
      !optionalTypeCheck(identity, 'string')
    ) {
      throw new Error('invalid cookie');
    }

    return {
      consented,
      identity,
    };
  } catch {
    return null;
  }
};

export const getAnalyticsConsentCookie = (): AnalyticsConsent | null => {
  const rawConsentCookie = getCookieValue(ANALYTICS_COOKIE_NAME);
  if (rawConsentCookie === '') {
    return null;
  }
  return decodeAnalyticsCookie(rawConsentCookie);
};
