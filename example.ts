import { GraphQLClient } from 'graphql-request';
import { decodeAnalyticsCookie, getSdk } from '.';

const defaultEndpoint = 'https://cloud.stardog.com/api/graphql';

// This is just because node.js does not have atob and browsers do not have Buffer!!
if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return Buffer.from(b64Encoded, 'base64').toString('binary');
  };
}

async function main() {
  const client = new GraphQLClient(defaultEndpoint);
  const sdk = getSdk(client);
  const { listConnections } = await sdk.listConnections();
  const { profile } = await sdk.profile();

  console.log(`GraphQL Connections:`, listConnections);
  console.log(`GraphQL Profile:`, profile);

  const fakeCookieValue =
    'eyJjb25zZW50ZWQiOnRydWUsImlkZW50aXR5IjoiZnJhbmtAYmFyLmNvbSJ9';
  console.log(decodeAnalyticsCookie(fakeCookieValue));
  console.log(decodeAnalyticsCookie('not really valid'));
}

main();
