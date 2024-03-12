/// <reference types="cookiebot-sdk" />

import { getCookieValue } from './utils/getCookieValue';
import { optionalTypeCheck } from './utils/optionalTypeCheck';

export const ANALYTICS_COOKIE_NAME = 'CookieConsent';
export const DEPRECATED_ANALYTICS_COOKIE_NAME = 'stardogAnalyticsConsent';

export type AnalyticsConsent = {
  marketing: boolean;
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
};

export type DeprecatedAnalyticsConsent = {
  consented: boolean;
  identity?: string;
};

export const getAnalyticsConsent = (): AnalyticsConsent | null => {
  const deprecatedCookie = getDeprecatedAnalyticsConsentCookie();
  if (deprecatedCookie) {
    const consented = deprecatedCookie.consented;
    // delete the deprecated cookie
    document.cookie = `${DEPRECATED_ANALYTICS_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    return {
      marketing: consented,
      necessary: consented,
      preferences: consented,
      statistics: consented,
    };
  }
  if (!window.Cookiebot || !window.Cookiebot.hasResponse) {
    return null;
  }

  return {
    marketing: window.Cookiebot.consent.marketing,
    necessary: window.Cookiebot.consent.necessary,
    statistics: window.Cookiebot.consent.statistics,
    preferences: window.Cookiebot.consent.preferences,
  };
};

export const decodeAnalyticsCookie = (
  rawConsentCookie: string
): DeprecatedAnalyticsConsent | null => {
  try {
    const decoded = JSON.parse(atob(rawConsentCookie));
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

export const getDeprecatedAnalyticsConsentCookie =
  (): DeprecatedAnalyticsConsent | null => {
    const rawConsentCookie = getCookieValue(DEPRECATED_ANALYTICS_COOKIE_NAME);
    if (!rawConsentCookie) {
      return null;
    }
    return decodeAnalyticsCookie(rawConsentCookie);
  };
