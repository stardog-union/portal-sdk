# Portal SDK

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fstardog-union%2Fportal-sdk.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fstardog-union%2Fportal-sdk?ref=badge_shield)

This is a collection of tools to share information between the front end applications and the portal via graphql.

## Installation

Prerequisites for install

- [Node.js](https://nodejs.org/) 18.
- [Yarn](https://yarnpkg.com/en/) 1.2.0+.

Simply run:

```
yarn install
```

## Generating SDK

We use GraphQL for all the data communication between the applications and the backend. Right now there is a limited set of things we expose but that can grow as needed. For now if we want to expose a query or mutation we simply add a `document` in `src/sdk/documents/` then run the generate command:

```
yarn generate
```

Fix any errors and commit your changes

**NOTE**: By default, this will use the schema that is currently deployed to production (https://cloud.stardog.com/api/graphql). If you need to generate from a schema that isn't in production yet, temporarily modify `codegen.yml` to point it at an updated schema url.

## Example usage

First you need to get a `GraphQL-Client` object and configure it for the correct url then use that client in the `getSDK` call:

```javascript
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '.';

const defaultEndpoint = 'https://cloud.stardog.com/api/graphql';

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

### Releases

The overall process of releasing should go as follows:

1. Create a branch from `main` named `release/x.x.x` (where `x.x.x` is the version).
2. Update the yarn version by running `yarn version --new-version x.x.x`.
3. Push everything to GitHub using `git push --set-upstream origin release/x.x.x`.
4. Create a PR with the intention to merge `release/x.x.x` into `main`.
5. If status checks and approvals are satisfied, merge `release/x.x.x` into `main`.
6. On the Github page for the repo, click on "Releases" on the top, then "Draft a new release".
7. Create a new release with a new tag `vx.x.x` and corresponding title.
8. Click 'Auto-generate release notes' and check the release notes.
9. If everything seems fine, publish the release!

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fstardog-union%2Fportal-sdk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fstardog-union%2Fportal-sdk?ref=badge_large)
