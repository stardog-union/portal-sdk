import { getCookieValue } from './utils/getCookieValue';
import { optionalTypeCheck } from './utils/optionalTypeCheck';

export const CONNECTION_COOKIE_NAME = 'stardogConnection';
export const DEMO_CONNECTION_INDEX = 12345;

export type ConnectionCookie = {
  username: string;
  endpoint: string;

  // optional because older cloud versions might not contain these
  tokenEndpoint?: string;
  graphqlEndpoint?: string;
};

export const decodeConnectionCookie = (
  rawConnectionCookie: string
): ConnectionCookie | null => {
  try {
    const decoded = JSON.parse(atob(rawConnectionCookie));

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
  const rawConnectionCookie = getCookieValue(CONNECTION_COOKIE_NAME);
  if (!rawConnectionCookie) {
    return null;
  }
  return decodeConnectionCookie(rawConnectionCookie);
};
