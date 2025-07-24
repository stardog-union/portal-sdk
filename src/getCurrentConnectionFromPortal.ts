import { getCurrentConnectionInfo } from './getCurrentConnectionInfo';
import { getPortalSdk } from './getPortalSdk';

export interface BaseConnection {
  isPortalConnection: boolean;
  endpoint: string;
  name: string;
  password: string;
  token?: string;
  username: string;
}

export const getCurrentConnectionFromPortal =
  async (): Promise<BaseConnection | null> => {
    const sdk = getPortalSdk();
    if (!sdk) {
      return null;
    }

    const urlInfo = getCurrentConnectionInfo(window);
    if (!urlInfo) {
      return null;
    }

    const connection = await sdk.getConnectionByIndex(urlInfo.connectionIndex);
    if (!connection) {
      return null;
    }

    const { endpoint } = connection;

    return {
      isPortalConnection: true,
      endpoint,
      name: '',
      password: '',
      token: connection.token ?? undefined,
      username: connection.username ?? '',
    };
  };
