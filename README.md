# Portal SDK

This is a collection of tools to share information between the front end applications and the portal via graphql.

## Installation

Prerequisites for install

- [Node.js](https://nodejs.org/) 14.15+.
- [Yarn](https://yarnpkg.com/en/) 1.0.0+.

Simply run:

```
yarn install
```

## Generating SDK

We use GraphQL for all the data communication between the applications and the backend. Right now there is a limited set of things we expose but that can grow as needed. For now if we want to expose a query or mutation we simply add a `document` in `src/portal/documents/` then run the generate command:

```
yarn generate
```

Fix any errors and commit your changes


## Example usage

First you need to get a `GraphQL-Client` object and configure it for the correct url then use that client in the `getSDK` call:

```javascript
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './src/portal/sdk';

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
```

You can test this out locally with `yarn test`:

```bash
⚡  yarn test
yarn run v1.22.10
$ ts-node ./example.ts
GraphQL Connections: []
GraphQL Profile: {
  id: null,
  username: '',
  email: null,
  first_name: null,
  last_name: null,
  company: null,
  use_case: null,
  is_authenticated: false,
  is_superuser: false
}
✨  Done in 2.34s.
```
