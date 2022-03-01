import { getCookieValue } from './utils/getCookieValue';
import { optionalTypeCheck } from './utils/optionalTypeCheck';

export const CONNECTION_COOKIE_NAME = 'stardogConnection';

export type ConnectionCookie = {
  username: string;
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
    const endpoint: string = decoded.endpoint;
    const tokenEndpoint: string | undefined = decoded.tokenEndpoint;
    const graphqlEndpoint: string | undefined = decoded.graphqlEndpoint;

    if (
      typeof username !== 'string' ||
      typeof endpoint !== 'string' ||
      !optionalTypeCheck(tokenEndpoint, 'string') ||
      !optionalTypeCheck(graphqlEndpoint, 'string')
    ) {
      throw new Error('invalid cookie');
    }

    return {
      username,
      endpoint,
      tokenEndpoint,
      graphqlEndpoint,
    };
  } catch {
    return null;
  }
};

export const getConnectionCookie = (): ConnectionCookie | null => {
  const rawCookie = getCookieValue(CONNECTION_COOKIE_NAME);
  if (!rawCookie) {
    return null;
  }
  return decodeConnectionCookie(rawCookie);
};
