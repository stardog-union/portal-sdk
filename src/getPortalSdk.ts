import { GraphQLClient } from 'graphql-request';
import { getConnectionCookie } from './cookies';
import { getSdk, ShareInput } from './sdk';

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
        ): connection is NonNullable<typeof result.listConnections[0]> =>
          connection !== null
      );
    },
    getConnectionByIndex: async (index: number) => {
      const result = await sdk.getConnectionByIndex({ index });
      return result.connection || null;
    },
  };
};
