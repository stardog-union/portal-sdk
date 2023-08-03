import { GraphQLClient } from 'graphql-request';
import { getConnectionCookie } from './cookies';
import { getSdk, ShareInput } from './sdk';

export enum TrackingEventList {
  CHECKOUT_FREE = 'Checkout Free Instance',
  CHECKOUT_PAID = 'Checkout Paid Instance',
  CLOUD_INVITE_USERS = 'Cloud invite users',
  CONNECT_EXISTING = 'Existing Instance Connected',
  DESIGNER_CREATE_DATA_SOURCE = 'Designer create data source',
  DESIGNER_CREATE_PROJECT = 'Designer create project',
  DESIGNER_DEFINE_RESOURCE_CSV = 'Designer define resource csv',
  DESIGNER_DEFINE_RESOURCE_VIRTUAL = 'Designer define resource virtual',
  DESIGNER_EXPORT_PROJECT = 'Designer export project',
  DESIGNER_PUBLISH_PROJECT = 'Designer publish project',
  EXPLORER_QUERY_BUILDER_EXECUTION = 'Explorer query builder execution',
  EXPLORER_TEXT_BAR_SEARCH = 'Explorer text bar search',
  STUDIO_CREATE_DATA_SOURCE = 'Studio create data source',
  STUDIO_CREATE_MODEL = 'Studio create model',
  STUDIO_CREATE_USER = 'Studio create user',
  STUDIO_CREATE_VIRTUAL_GRAPH = 'Studio create virtual graph',
  STUDIO_EDIT_DATA_SOURCE = 'Studio edit data source',
  STUDIO_EDIT_MODEL = 'Studio edit model',
  STUDIO_EDIT_VIRTUAL_GRAPH = 'Studio edit virtual graph',
  STUDIO_SPARQL_QUERY_EXECUTION = 'Studio SPARQL query execution',
  VERIFICATION_MODAL_SEEN = 'Verification modal seen',
}

export enum ClientTypeList {
  HUBSPOT = 'hubspot',
}

/** returns portal-sdk sdk object, or null if not in Portal */
export const getPortalSdk = () => {
  const connectionCookie = getConnectionCookie();
  if (!connectionCookie) {
    return null;
  }

  const { graphqlEndpoint } = connectionCookie;
  if (!graphqlEndpoint) {
    return null;
  }

  const client = new GraphQLClient(graphqlEndpoint);
  const sdk = getSdk(client);

  return {
    addShare: async (input: ShareInput) => {
      const result = await sdk.addShare({ input });
      return result.addShare || null;
    },
    trackEvent: async (input: {
      event: TrackingEventList;
      client_type?: ClientTypeList;
    }) => {
      const result = await sdk.trackEvent({ input });
      return result.trackEvent || null;
    },
    profile: async () => {
      const result = await sdk.profile();
      return result.profile || null;
    },
    listConnections: async () => {
      const result = await sdk.listConnections();

      if (!result.listConnections) {
        return null;
      }

      return result.listConnections.filter(
        (
          connection
        ): connection is NonNullable<(typeof result.listConnections)[0]> =>
          connection !== null
      );
    },
    getConnectionByIndex: async (index: number) => {
      const result = await sdk.getConnectionByIndex({ index });
      return result.connection || null;
    },
  };
};
