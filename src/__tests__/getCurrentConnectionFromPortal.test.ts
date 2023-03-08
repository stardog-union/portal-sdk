import * as getCurrentConnectionInfoModule from '../getCurrentConnectionInfo';
import * as getPortalSdkModule from '../getPortalSdk';

import { getCurrentConnectionFromPortal } from '../getCurrentConnectionFromPortal';

const getConnectionByIndex = jest.fn();

describe('getCurrentConnectionFromPortal', () => {
  beforeEach(() => {
    jest.resetModules();

    jest.spyOn(getPortalSdkModule, 'getPortalSdk').mockReturnValue({
      addShare: jest.fn(),
      profile: jest.fn(),
      listConnections: jest.fn(),
      getConnectionByIndex,
    });

    jest
      .spyOn(getCurrentConnectionInfoModule, 'getCurrentConnectionInfo')
      .mockReturnValue({
        connectionIndex: 0,
      });
  });

  it('returns null when sdk is null', async () => {
    jest.spyOn(getPortalSdkModule, 'getPortalSdk').mockReturnValue(null);
    expect(await getCurrentConnectionFromPortal()).toBe(null);
  });

  it('returns null when urlInfo is null', async () => {
    jest
      .spyOn(getCurrentConnectionInfoModule, 'getCurrentConnectionInfo')
      .mockReturnValue(null);
    expect(await getCurrentConnectionFromPortal()).toBe(null);
  });

  it('returns null when connection is null', async () => {
    getConnectionByIndex.mockReturnValue(null);
    expect(await getCurrentConnectionFromPortal()).toBe(null);
  });

  it('returns connection when connection is not null', async () => {
    const connection = {
      endpoint: 'endpoint',
      token: 'token',
      username: 'hi',
      useBrowserAuth: false,
    };
    getConnectionByIndex.mockReturnValue(connection);

    expect(await getCurrentConnectionFromPortal()).toStrictEqual({
      isPortalConnection: true,
      endpoint: 'endpoint',
      name: '',
      password: '',
      token: 'token',
      useBrowserAuth: false,
      username: 'hi',
    });
  });
});
