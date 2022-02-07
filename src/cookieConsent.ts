export const ANALYTICS_COOKIE_NAME = 'stardogAnalyticsConsent';

export type AnalyticsConsent = {
  consented: boolean;
  identity?: string;
};

export const getCookies = (): string => {
  return document.cookie;
};

export const getCookieValue = (cookieName: string): string => {
  const cookies = getCookies();
  const match = cookies.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
  return match ? (match.pop() as string) : '';
};

export const decodeAnalyticsCookie = (rawCookie: string): AnalyticsConsent => {
  const defaultConsent: AnalyticsConsent = {
    consented: false
  };
  try {
    const decoded = JSON.parse(atob(rawCookie));
    const consented: boolean = decoded.consented
    const identity: string = decoded.identity || '';
    if (typeof identity !== 'string' || typeof consented !== 'boolean') {
      throw new Error('invalid cookie')
    }
    return {
      consented,
      identity
    }
  } catch (e) {
    console.warn(e);
    return defaultConsent;
  }
};

export const getAnalyticsConsentCookie = (): AnalyticsConsent => {
  const rawConsentCookie = getCookieValue(ANALYTICS_COOKIE_NAME);
  return decodeAnalyticsCookie(rawConsentCookie);
};
