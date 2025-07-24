import { getCurrentConnectionFromPortal } from '../getCurrentConnectionFromPortal';
import * as getCurrentConnectionInfoModule from '../getCurrentConnectionInfo';
import * as getPortalSdkModule from '../getPortalSdk';

const getConnectionByIndex = jest.fn();

describe('getCurrentConnectionFromPortal', () => {
  beforeEach(() => {
    jest.resetModules();

    jest.spyOn(getPortalSdkModule, 'getPortalSdk').mockReturnValue({
      addShare: jest.fn(),
      getConnectionByIndex,
      getVoiceboxConversation: jest.fn(),
      createDesignerProject: jest.fn(),
      archiveDesignerProject: jest.fn(),
      getDesignerProject: jest.fn(),
      getDesignerProjects: jest.fn(),
      listConnections: jest.fn(),
      listVoiceboxConversations: jest.fn(),
      profile: jest.fn(),
      renameDesignerProject: jest.fn(),
      restoreDesignerProject: jest.fn(),
      trackEvent: jest.fn(),
      updateDesignerProject: jest.fn(),
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
    };
    getConnectionByIndex.mockReturnValue(connection);

    expect(await getCurrentConnectionFromPortal()).toStrictEqual({
      isPortalConnection: true,
      endpoint: 'endpoint',
      name: '',
      password: '',
      token: 'token',
      username: 'hi',
    });
  });
});
