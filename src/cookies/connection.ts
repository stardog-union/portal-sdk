import { getCookieValue } from './utils/getCookieValue';
import { optionalTypeCheck } from './utils/optionalTypeCheck';

export const CONNECTION_COOKIE_NAME = 'stardogConnection';

export type ConnectionCookie = {
  username: string;
  password?: string;
  endpoint: string;

  // optional because older cloud versions might not contain these
  tokenEndpoint?: string;
  graphqlEndpoint?: string;
};

export const decodeConnectionCookie = (
  rawCookie: string
): ConnectionCookie | null => {
  try {
    const decoded = JSON.parse(atob(rawCookie));

    const username: string = decoded.username;
    const password: string | undefined = decoded.password;
    const endpoint: string = decoded.endpoint;
    const tokenEndpoint: string | undefined = decoded.tokenEndpoint;
    const graphqlEndpoint: string | undefined = decoded.graphqlEndpoint;

    if (
      typeof username !== 'string' ||
      (typeof password !== 'undefined' && typeof password !== 'string') ||
      typeof endpoint !== 'string' ||
      !optionalTypeCheck(tokenEndpoint, 'string') ||
      !optionalTypeCheck(graphqlEndpoint, 'string')
    ) {
      throw new Error('invalid cookie');
    }

    return {
      username,
      password,
      endpoint,
      tokenEndpoint,
      graphqlEndpoint,
    };
  } catch {
    return null;
  }
};

export const getConnectionConsentCookie = (): ConnectionCookie | null => {
  const rawConsentCookie = getCookieValue(CONNECTION_COOKIE_NAME);
  if (!rawConsentCookie) {
    return null;
  }
  return decodeConnectionCookie(rawConsentCookie);
};
