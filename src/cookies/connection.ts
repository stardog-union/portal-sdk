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
  isPortal?: boolean;
  isLaunchpad?: boolean;
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
    const isPortal: boolean | undefined = decoded.isPortal;
    const isLaunchpad: boolean | undefined = decoded.isLaunchpad;

    if (
      typeof username !== 'string' ||
      typeof endpoint !== 'string' ||
      !optionalTypeCheck(tokenEndpoint, 'string') ||
      !optionalTypeCheck(graphqlEndpoint, 'string') ||
      !optionalTypeCheck(isPortal, 'boolean') ||
      !optionalTypeCheck(isLaunchpad, 'boolean')
    ) {
      throw new Error('invalid cookie');
    }

    return {
      username,
      endpoint,
      tokenEndpoint,
      graphqlEndpoint,
      isPortal,
      isLaunchpad,
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
