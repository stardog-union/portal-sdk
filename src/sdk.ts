import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddConnectionInput = {
  endpoint: Scalars['String'];
  name: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  useSSO?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
};

export type BillingSession = {
  __typename?: 'BillingSession';
  session_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BillingSessionInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CloudCleanupInput = {
  cloudName?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

/** Stardog Cloud Flavor and Size info */
export type CloudFlavor = {
  __typename?: 'CloudFlavor';
  disk?: Maybe<Scalars['String']>;
  iops?: Maybe<Scalars['Float']>;
  is_cluster?: Maybe<Scalars['Boolean']>;
  memory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  vcpus?: Maybe<Scalars['Float']>;
};

/** Saved Connection info for a Stardog instance */
export type Connection = {
  __typename?: 'Connection';
  dashboard?: Maybe<Scalars['String']>;
  endpoint: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  isAllocating?: Maybe<Scalars['Boolean']>;
  isStardogCloud?: Maybe<Scalars['Boolean']>;
  isStardogFree?: Maybe<Scalars['Boolean']>;
  isWaitingForPayment?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  shouldShowDesigner?: Maybe<Scalars['Boolean']>;
  stripeSubscription?: Maybe<PurchaseSession>;
  token?: Maybe<Scalars['String']>;
  useSSO?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  username?: Maybe<Scalars['String']>;
};

/** Generic deletion response type to handle reporting success. */
export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type EditConnectionInput = {
  endpoint?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  useSSO?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
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
  addStardogFree?: Maybe<StardogFree>;
  deleteCloud?: Maybe<DeletionResponse>;
  deleteConnection?: Maybe<DeletionResponse>;
  editConnection?: Maybe<Connection>;
  generateConfiguration?: Maybe<ExampleConfig>;
  startBillingSession?: Maybe<BillingSession>;
  updateProfile?: Maybe<User>;
};

/** Available mutations */
export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};

/** Available mutations */
export type MutationDeleteCloudArgs = {
  input: CloudCleanupInput;
};

/** Available mutations */
export type MutationDeleteConnectionArgs = {
  name: Scalars['String'];
};

/** Available mutations */
export type MutationEditConnectionArgs = {
  input: EditConnectionInput;
};

/** Available mutations */
export type MutationGenerateConfigurationArgs = {
  endpoint: Scalars['String'];
};

/** Available mutations */
export type MutationStartBillingSessionArgs = {
  input: BillingSessionInput;
};

/** Available mutations */
export type MutationUpdateProfileArgs = {
  input?: InputMaybe<ProfileInput>;
};

/**
 * An Auth0 auth token stored for the user, do not add secret values here such as
 * refresh_token or client_id.
 */
export type OAuthToken = {
  __typename?: 'OAuthToken';
  access_token?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  user: User;
};

export type ProfileInput = {
  company: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  phone: Scalars['String'];
  title: Scalars['String'];
  use_case: Scalars['String'];
};

export type PurchaseSession = {
  __typename?: 'PurchaseSession';
  isWaitingForPayment?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Available queries */
export type Query = {
  __typename?: 'Query';
  checkCloudQueue?: Maybe<QueueCounts>;
  generateToken?: Maybe<OAuthToken>;
  getConnection?: Maybe<Connection>;
  getConnectionByIndex?: Maybe<Connection>;
  getStardogCloud?: Maybe<StardogCloud>;
  getStardogFree?: Maybe<StardogFree>;
  getStripeSubscriptionOrderSession?: Maybe<PurchaseSession>;
  getStripeSubscriptionStatus?: Maybe<StripeSubscriptionStatus>;
  listConnections?: Maybe<Array<Maybe<Connection>>>;
  listStardogCloud?: Maybe<Array<Maybe<StardogCloud>>>;
  profile?: Maybe<User>;
};

/** Available queries */
export type QueryGenerateTokenArgs = {
  endpoint: Scalars['String'];
};

/** Available queries */
export type QueryGetConnectionArgs = {
  name: Scalars['String'];
};

/** Available queries */
export type QueryGetConnectionByIndexArgs = {
  index: Scalars['Int'];
};

/** Available queries */
export type QueryGetStardogCloudArgs = {
  pk: Scalars['String'];
};

/** Available queries */
export type QueryGetStripeSubscriptionOrderSessionArgs = {
  cloudName: Scalars['String'];
};

/** Available queries */
export type QueryGetStripeSubscriptionStatusArgs = {
  cloudName: Scalars['String'];
};

/** Contains the counts of available cloud resources to sell. */
export type QueueCounts = {
  __typename?: 'QueueCounts';
  medium_count?: Maybe<Scalars['Float']>;
  micro_count?: Maybe<Scalars['Float']>;
  small_count?: Maybe<Scalars['Float']>;
};

/** Quota limits and usage for a given user. */
export type Quota = {
  __typename?: 'Quota';
  available?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Stardog Cloud, represents an instance of Cloud that is owned by the user */
export type StardogCloud = {
  __typename?: 'StardogCloud';
  bi_endpoint?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  flavor?: Maybe<CloudFlavor>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

/** Stardog Free Installation */
export type StardogFree = {
  __typename?: 'StardogFree';
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
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
  install_url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

/** Stripe Customer: If the user is a paying customer */
export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  cloud_quota?: Maybe<Quota>;
  customer_id?: Maybe<Scalars['String']>;
  customer_portal_url?: Maybe<Scalars['String']>;
  is_cloud_quota_breached?: Maybe<Scalars['Boolean']>;
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
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  has_updated_profile?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  is_authenticated: Scalars['Boolean'];
  is_ephemeral?: Maybe<Scalars['Boolean']>;
  is_superuser?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  stripe_customer?: Maybe<StripeCustomer>;
  sub?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  use_case?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ListConnectionsQueryVariables = Exact<{ [key: string]: never }>;

export type ListConnectionsQuery = {
  __typename?: 'Query';
  listConnections?: Array<{
    __typename?: 'Connection';
    id: string;
    name: string;
    username?: string | null;
    endpoint: string;
    token?: string | null;
    isStardogCloud?: boolean | null;
    isStardogFree?: boolean | null;
    isAllocating?: boolean | null;
    useSSO?: boolean | null;
  } | null> | null;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: 'Query';
  profile?: {
    __typename?: 'User';
    id?: string | null;
    username: string;
    email?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    company?: string | null;
    use_case?: string | null;
    is_authenticated: boolean;
    is_superuser?: boolean | null;
  } | null;
};

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

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    listConnections(
      variables?: ListConnectionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ListConnectionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ListConnectionsQuery>(
            ListConnectionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'listConnections'
      );
    },
    profile(
      variables?: ProfileQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ProfileQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ProfileQuery>(ProfileDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'profile'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
