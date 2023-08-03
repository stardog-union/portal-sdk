import * as portalSdkImport from '../sdk';

import { getConnectionCookie } from '../cookies';
import {
  ClientTypeList,
  TrackingEventList,
  getPortalSdk,
} from '../getPortalSdk';

jest.mock('../sdk', () => ({
  getSdk: jest.fn(),
}));

jest.mock('../cookies', () => ({
  getConnectionCookie: jest.fn(),
}));

const addShare = jest.fn(async () => ({ addShare: null }));
const trackEvent = jest.fn(async () => ({ trackEvent: null }));
const profile = jest.fn(async () => ({ profile: null }));
const listConnections = jest.fn(async () => ({ listConnections: [null] }));
const getConnectionByIndex = jest.fn(async () => ({ connection: null }));

describe('getPortalSdk', () => {
  beforeEach(() => {
    jest.spyOn(portalSdkImport, 'getSdk').mockReturnValue({
      addShare,
      trackEvent,
      profile,
      listConnections,
      getConnectionByIndex,
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
    const input = {
      endpoint: 'endpoint',
      expires: 100,
      service: 'service',
      target_path: 'target_path',
    };
    await sdk?.addShare(input);
    expect(addShare).toHaveBeenCalledWith({ input });
    const eventInput = {
      event: TrackingEventList.DESIGNER_CREATE_DATA_SOURCE,
      client_type: ClientTypeList.HUBSPOT,
    };
    await sdk?.trackEvent(eventInput);
    expect(trackEvent).toHaveBeenCalled();

    await sdk?.profile();
    expect(profile).toHaveBeenCalled();

    await sdk?.listConnections();
    expect(listConnections).toHaveBeenCalled();

    await sdk?.getConnectionByIndex(0);
    expect(getConnectionByIndex).toHaveBeenCalledWith({ index: 0 });

    listConnections.mockResolvedValueOnce({ listConnections: null as any });
    const emptyConnectionsSdk = getPortalSdk();

    await emptyConnectionsSdk?.listConnections();
    expect(listConnections).toHaveBeenCalled();
  });
});
