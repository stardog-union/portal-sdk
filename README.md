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
