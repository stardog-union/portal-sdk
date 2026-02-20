import { getConnectionCookie } from '../cookies';
import { getCurrentConnectionInfo } from '../getCurrentConnectionInfo';
import {
  ClientTypeList,
  TrackingEventList,
  getPortalSdk,
} from '../getPortalSdk';
import * as portalSdkImport from '../sdk';

jest.mock('../sdk', () => ({
  getSdk: jest.fn(),
}));

jest.mock('../cookies', () => ({
  getConnectionCookie: jest.fn(),
}));

jest.mock('../getCurrentConnectionInfo', () => ({
  getCurrentConnectionInfo: jest.fn(),
}));

const addShare = jest.fn(async () => ({ addShare: null }));
const archiveDesignerProject = jest.fn(async () => ({
  archiveDesignerProject: 'id',
}));
const createDesignerProject = jest.fn(async () => ({
  createDesignerProject: 'id',
}));
const getConnectionByIndex = jest.fn(async () => ({
  connection: {
    endpoint: 'endpoint',
    id: 'id',
    name: 'name',
    index: 0,
  },
}));
const getDesignerProject = jest.fn(async () => {
  return {
    getDesignerProject: {
      id: 'id',
      name: 'name',
      content: 'content',
      created_at: 'created_at',
      updated_at: 'updated_at',
      owner: { id: 'id', username: 'username' },
      roles: [],
    },
  };
});
const getDesignerProjects = jest.fn(async () => ({ getDesignerProjects: [] }));
const getVoiceboxConversation = jest.fn(async () => ({
  getVoiceboxConversation: null,
}));
const listConnections = jest.fn(async () => ({ listConnections: [null] }));
const listOrganizations = jest.fn(async () => ({ listOrganizations: [null] }));
const listVoiceboxConversations = jest.fn(async () => ({
  listVoiceboxConversations: null,
  voiceboxConversationCount: null,
}));
const profile = jest.fn(async () => ({ profile: null }));
const renameDesignerProject = jest.fn(async () => ({
  renameDesignerProject: 'id',
}));
const restoreDesignerProject = jest.fn(async () => ({
  restoreDesignerProject: 'id',
}));
const trackEvent = jest.fn(async () => ({ trackEvent: null }));
const updateDesignerProject = jest.fn(async () => ({
  updateDesignerProject: 'id',
}));

describe('getPortalSdk', () => {
  beforeEach(() => {
    jest.spyOn(portalSdkImport, 'getSdk').mockReturnValue({
      addShare,
      archiveDesignerProject,
      createDesignerProject,
      getConnectionByIndex,
      getDesignerProject,
      getDesignerProjects,
      getVoiceboxConversation,
      listConnections,
      listOrganizations,
      listVoiceboxConversations,
      profile,
      renameDesignerProject,
      restoreDesignerProject,
      trackEvent,
      updateDesignerProject,
    });
  });

  it("returns null when connection cookie doesn't exist", () => {
    (getConnectionCookie as jest.Mock).mockReturnValue(null);
    expect(getPortalSdk()).toBe(null);
  });

  it('returns an sdk object when connection cookie exists, and has graphql endpoint', () => {
    (getConnectionCookie as jest.Mock).mockReturnValue({
      username: 'username',
      endpoint: 'endpoint',
    });
    expect(getPortalSdk()).toBe(null);

    (getConnectionCookie as jest.Mock).mockReturnValue({
      username: 'username',
      endpoint: 'endpoint',
      graphqlEndpoint: 'graphqlEndpoint',
    });
    const result = getPortalSdk();
    expect(result).toBeTruthy();
    expect(result?.addShare).toBeInstanceOf(Function);
    expect(result?.profile).toBeInstanceOf(Function);
    expect(result?.listConnections).toBeInstanceOf(Function);
  });

  it('calls portal-sdk functions and gets return values', async () => {
    const sdk = getPortalSdk();

    const addShareInput = {
      input: {
        endpoint: 'endpoint',
        expires: 100,
        service: 'service',
        target_path: 'target_path',
      },
    };
    await sdk?.addShare(addShareInput.input);
    expect(addShare).toHaveBeenCalledWith(addShareInput);

    const createDesignerProjectInput = {
      name: 'name',
      content: 'content',
      connection_id: 'connectionId',
    };
    await sdk?.createDesignerProject(
      createDesignerProjectInput.name,
      createDesignerProjectInput.content,
      createDesignerProjectInput.connection_id
    );
    expect(createDesignerProject).toHaveBeenCalledWith(
      createDesignerProjectInput
    );

    const archiveDesignerProjectInput = { project_id: 'projectId' };
    await sdk?.archiveDesignerProject(archiveDesignerProjectInput.project_id);
    expect(archiveDesignerProject).toHaveBeenCalledWith(
      archiveDesignerProjectInput
    );

    const getDesignerProjectInput = { project_id: 'projectId' };
    await sdk?.getDesignerProject(getDesignerProjectInput.project_id);
    expect(getDesignerProject).toHaveBeenCalledWith(getDesignerProjectInput);

    await sdk?.getDesignerProjects();
    expect(getDesignerProjects).toHaveBeenCalled();

    const getVoiceboxConversationInput = { conversation_id: 'conversationId' };
    await sdk?.getVoiceboxConversation(
      getVoiceboxConversationInput.conversation_id
    );
    expect(getVoiceboxConversation).toHaveBeenCalledWith(
      getVoiceboxConversationInput
    );
    await sdk?.listOrganizations();
    expect(listOrganizations).toHaveBeenCalled();

    await sdk?.listVoiceboxConversations();
    expect(listVoiceboxConversations).toHaveBeenCalled();

    await sdk?.profile();
    expect(profile).toHaveBeenCalled();

    const renameDesignerProjectInput = {
      project_id: 'projectId',
      name: 'name',
    };
    await sdk?.renameDesignerProject(
      renameDesignerProjectInput.project_id,
      renameDesignerProjectInput.name
    );
    expect(renameDesignerProject).toHaveBeenCalledWith(
      renameDesignerProjectInput
    );

    const restoreDesignerProjectInput = { project_id: 'projectId' };
    await sdk?.restoreDesignerProject(restoreDesignerProjectInput.project_id);
    expect(restoreDesignerProject).toHaveBeenCalledWith(
      restoreDesignerProjectInput
    );

    await sdk?.trackEvent({
      event: TrackingEventList.DESIGNER_CREATE_DATA_SOURCE,
      client_type: ClientTypeList.HUBSPOT,
    });
    expect(trackEvent).toHaveBeenCalled();

    const updateDesignerProjectInput = {
      project_id: 'projectId',
      content: 'content',
      name: 'name',
      connection_id: 'connectionId',
    };
    await sdk?.updateDesignerProject(
      updateDesignerProjectInput.project_id,
      updateDesignerProjectInput.content,
      updateDesignerProjectInput.name,
      updateDesignerProjectInput.connection_id
    );
    expect(updateDesignerProject).toHaveBeenCalledWith(
      updateDesignerProjectInput
    );
  });

  describe.each([
    ['with user info', { connectionIndex: 1, organizationDomain: undefined }],
    ['with org info', { connectionIndex: 1, organizationDomain: 'orgDomain' }],
    ['without info', null],
  ])('for %s', (_, info) => {
    it('calls the connection portal-sdk function with the org domain', async () => {
      const sdk = getPortalSdk();

      (getCurrentConnectionInfo as jest.Mock).mockReturnValue(info);

      expect(await sdk?.getConnectionByIndex(0)).not.toBeNull();
      expect(getConnectionByIndex).toHaveBeenCalledWith({
        index: 0,
        org_domain: info?.organizationDomain,
      });

      expect(await sdk?.listConnections()).not.toBeNull();
      expect(listConnections).toHaveBeenCalledWith({
        org_domain: info?.organizationDomain,
      });
    });
  });
});
