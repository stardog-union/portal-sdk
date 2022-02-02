import { GraphQLClient } from 'graphql-request';
import { getSdk } from '.';

const defaultEndpoint = 'https://apps.stardog.com/api/graphql';

async function main() {
  const client = new GraphQLClient(defaultEndpoint);
  const sdk = getSdk(client);
  const { listConnections } = await sdk.listConnections();
  const { profile } = await sdk.profile();

  console.log(`GraphQL Connections:`, listConnections);
  console.log(`GraphQL Profile:`, profile);
}

main();
