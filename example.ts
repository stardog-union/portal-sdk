import { GraphQLClient } from 'graphql-request';
import { getSdk } from '.';

const defaultEndpoint = 'https://cloud.stardog.com/api/graphql';

// This is just because node.js does not have atob and browsers do not have Buffer!!
if (typeof atob === 'undefined') {
  global.atob = (b64Encoded: string) =>
    Buffer.from(b64Encoded, 'base64').toString('binary');
}

async function main() {
  const client = new GraphQLClient(defaultEndpoint);
  const sdk = getSdk(client);
  const { listConnections } = await sdk.listConnections();
  const { profile } = await sdk.profile();

  console.log(`GraphQL Connections:`, listConnections);
  console.log(`GraphQL Profile:`, profile);
}

main();
