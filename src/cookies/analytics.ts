/// <reference types="cookiebot-sdk" />

export const ANALYTICS_COOKIE_NAME = 'CookieConsent';

export type AnalyticsConsent = {
  marketing: boolean;
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
};

export const getAnalyticsConsent = (): AnalyticsConsent | null => {
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
