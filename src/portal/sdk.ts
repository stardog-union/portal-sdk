import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddConnectionInput = {
  name: Scalars['String'];
  endpoint: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  useSSO?: Maybe<Scalars['Boolean']>;
};

export type BillingPortalUrl = {
  __typename?: 'BillingPortalUrl';
  url?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
};

export type BillingSession = {
  __typename?: 'BillingSession';
  url?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['String']>;
};

export type BillingSessionInput = {
  name?: Maybe<Scalars['String']>;
};

/** Stardog Cloud Flavor and Size info */
export type CloudFlavor = {
  __typename?: 'CloudFlavor';
  name?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  vcpus?: Maybe<Scalars['Float']>;
  iops?: Maybe<Scalars['Float']>;
  disk?: Maybe<Scalars['String']>;
  nodes?: Maybe<Scalars['Float']>;
  is_cluster?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
};

/** Saved Connection info for a Stardog instance */
export type Connection = {
  __typename?: 'Connection';
  id: Scalars['ID'];
  user?: Maybe<User>;
  name: Scalars['String'];
  endpoint: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  useSSO?: Maybe<Scalars['Boolean']>;
  isStardogFree?: Maybe<Scalars['Boolean']>;
  isStardogCloud?: Maybe<Scalars['Boolean']>;
  isAllocating?: Maybe<Scalars['Boolean']>;
};

/** Generic deletion response type to handle reporting success. */
export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type EditConnectionInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  useSSO?: Maybe<Scalars['Boolean']>;
};

/** Example Configuration for jwt.yaml and stardog.properties */
export type ExampleConfig = {
  __typename?: 'ExampleConfig';
  id: Scalars['ID'];
  jwt_config: Scalars['String'];
  properties: Scalars['String'];
};

/** Available mutations */
export type Mutation = {
  __typename?: 'Mutation';
  addConnection?: Maybe<Connection>;
  editConnection?: Maybe<Connection>;
  deleteConnection?: Maybe<DeletionResponse>;
  addStardogFree?: Maybe<StardogFree>;
  generateConfiguration?: Maybe<ExampleConfig>;
  updateProfile?: Maybe<User>;
  startBillingSession?: Maybe<BillingSession>;
};


/** Available mutations */
export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};


/** Available mutations */
export type MutationEditConnectionArgs = {
  input: EditConnectionInput;
};


/** Available mutations */
export type MutationDeleteConnectionArgs = {
  name: Scalars['String'];
};


/** Available mutations */
export type MutationGenerateConfigurationArgs = {
  endpoint: Scalars['String'];
};


/** Available mutations */
export type MutationUpdateProfileArgs = {
  input?: Maybe<ProfileInput>;
};


/** Available mutations */
export type MutationStartBillingSessionArgs = {
  input: BillingSessionInput;
};

/**
 * An Auth0 auth token stored for the user, do not add secret values here such as
 * refresh_token or client_id.
 */
export type OAuthToken = {
  __typename?: 'OAuthToken';
  id: Scalars['ID'];
  user: User;
  access_token?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  company: Scalars['String'];
  title: Scalars['String'];
  phone: Scalars['String'];
  use_case: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

/** Available queries */
export type Query = {
  __typename?: 'Query';
  getConnection?: Maybe<Connection>;
  listConnections?: Maybe<Array<Maybe<Connection>>>;
  getStardogFree?: Maybe<StardogFree>;
  generateToken?: Maybe<OAuthToken>;
  profile?: Maybe<User>;
  getStardogCloud?: Maybe<StardogCloud>;
  listStardogCloud?: Maybe<Array<Maybe<StardogCloud>>>;
  checkCloudQueue?: Maybe<QueueCounts>;
  getStripeSubscriptionOrderSession?: Maybe<StripeSubscriptionOrderSession>;
  getStripeSubscriptionStatus?: Maybe<StripeSubscriptionStatus>;
  getBillingPortalUrl?: Maybe<BillingPortalUrl>;
};


/** Available queries */
export type QueryGetConnectionArgs = {
  name: Scalars['String'];
};


/** Available queries */
export type QueryGenerateTokenArgs = {
  endpoint: Scalars['String'];
};


/** Available queries */
export type QueryGetStardogCloudArgs = {
  pk: Scalars['String'];
};

/** Contains the counts of available cloud resources to sell. */
export type QueueCounts = {
  __typename?: 'QueueCounts';
  small_count?: Maybe<Scalars['Float']>;
  micro_count?: Maybe<Scalars['Float']>;
  medium_count?: Maybe<Scalars['Float']>;
};

/** Stardog Cloud, represents an instance of Cloud that is owned by the user */
export type StardogCloud = {
  __typename?: 'StardogCloud';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  bi_endpoint?: Maybe<Scalars['String']>;
  flavor?: Maybe<CloudFlavor>;
  updated?: Maybe<Scalars['String']>;
};

/** Stardog Free Installation */
export type StardogFree = {
  __typename?: 'StardogFree';
  id?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  installer?: Maybe<StardogFreeInstaller>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  use_case?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type StardogFreeInstaller = {
  __typename?: 'StardogFreeInstaller';
  id?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['String']>;
  install_url?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionOrderSession = {
  __typename?: 'StripeSubscriptionOrderSession';
  status: Scalars['String'];
};

export type StripeSubscriptionStatus = {
  __typename?: 'StripeSubscriptionStatus';
  status: Scalars['String'];
};

/**
 * The user model, this represents a user from Auth0. Only fields defined here
 * are exposed in the possible GraphQL responses.
 */
export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  sub?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  is_authenticated: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  is_superuser?: Maybe<Scalars['Boolean']>;
  is_ephemeral?: Maybe<Scalars['Boolean']>;
  has_updated_profile?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  use_case?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

export type ListConnectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListConnectionsQuery = (
  { __typename?: 'Query' }
  & { listConnections?: Maybe<Array<Maybe<(
    { __typename?: 'Connection' }
    & Pick<Connection, 'id' | 'name' | 'username' | 'endpoint' | 'token' | 'isStardogCloud' | 'isStardogFree' | 'isAllocating' | 'useSSO'>
  )>>> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'first_name' | 'last_name' | 'company' | 'use_case' | 'is_authenticated' | 'is_superuser'>
  )> }
);


export const ListConnectionsDocument = `
    query listConnections {
  listConnections {
    id
    name
    username
    endpoint
    token
    isStardogCloud
    isStardogFree
    isAllocating
    useSSO
  }
}
    `;
export const ProfileDocument = `
    query profile {
  profile {
    id
    username
    email
    first_name
    last_name
    company
    use_case
    is_authenticated
    is_superuser
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    listConnections(variables?: ListConnectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListConnectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListConnectionsQuery>(ListConnectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listConnections');
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;