import { getCookieValue } from './utils/cookie';

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
    const password: string = decoded.password;
    const endpoint: string = decoded.endpoint;
    const tokenEndpoint: string = decoded.tokenEndpoint;
    const graphqlEndpoint: string = decoded.graphqlEndpoint;

    if (
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      typeof endpoint !== 'string' ||
      typeof tokenEndpoint !== 'string' ||
      typeof graphqlEndpoint !== 'string'
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
  } catch (e) {
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
