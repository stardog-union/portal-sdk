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
  Datetime: string;
};

export type AddConnectionInput = {
  endpoint: Scalars['String'];
  name: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  useBrowserAuth?: InputMaybe<Scalars['Boolean']>;
  useSSO?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
};

/** ArchivedCloud, represents an archived Stardog Cloud instance */
export type ArchivedCloud = {
  __typename?: 'ArchivedCloud';
  bi_endpoint?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  customer_ref?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  payment_ref?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type BillingSession = {
  __typename?: 'BillingSession';
  session_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BillingSessionInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CancelCloudInput = {
  cloud_id: Scalars['String'];
  connection_id: Scalars['String'];
};

export type CheckoutLineItem = {
  flavor: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
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
  cloud?: Maybe<StardogCloud>;
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
  type?: Maybe<Scalars['String']>;
  useBrowserAuth?: Maybe<Scalars['Boolean']>;
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
  useBrowserAuth?: InputMaybe<Scalars['Boolean']>;
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

/** Generic response type to handle reporting success. */
export type GenericResponse = {
  __typename?: 'GenericResponse';
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

/** Grafana settings generate Grafana dashboard URLs */
export type GrafanaDashboardSettings = {
  __typename?: 'GrafanaDashboardSettings';
  id: Scalars['String'];
  slug: Scalars['String'];
};

/** Invitation to join a Stardog Cloud instance */
export type Invitation = {
  __typename?: 'Invitation';
  accepted?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Datetime']>;
  email?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  existing_user?: Maybe<User>;
  expires?: Maybe<Scalars['Datetime']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
};

export type InvitationFlagInput = {
  id: Scalars['ID'];
};

export type InvitationInput = {
  email: Scalars['String'];
  endpoint: Scalars['String'];
  role: Scalars['String'];
};

export type MarketplaceSettings = {
  __typename?: 'MarketplaceSettings';
  marketplaceDatabase: Scalars['String'];
  marketplaceEndpoint: Scalars['String'];
  marketplacePassword: Scalars['String'];
  marketplaceUsername: Scalars['String'];
};

/** Available mutations */
export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation?: Maybe<GenericResponse>;
  addConnection?: Maybe<Connection>;
  addInvitation?: Maybe<GenericResponse>;
  addShare?: Maybe<Share>;
  addStardogFree?: Maybe<StardogFree>;
  cancelCloud?: Maybe<GenericResponse>;
  checkoutCart?: Maybe<BillingSession>;
  deleteCloud?: Maybe<DeletionResponse>;
  deleteConnection?: Maybe<DeletionResponse>;
  editConnection?: Maybe<Connection>;
  generateConfiguration?: Maybe<ExampleConfig>;
  getStripeSessionUrl?: Maybe<BillingSession>;
  removePartnerConnection?: Maybe<GenericResponse>;
  resendEmail?: Maybe<GenericResponse>;
  trackEvent?: Maybe<GenericResponse>;
  updatePartnerConnection?: Maybe<GenericResponse>;
  updateProfile?: Maybe<User>;
  updateUserFeatures?: Maybe<User>;
  upgradeCloud?: Maybe<BillingSession>;
  verifyInvitation?: Maybe<GenericResponse>;
};

/** Available mutations */
export type MutationAcceptInvitationArgs = {
  input: InvitationFlagInput;
};

/** Available mutations */
export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};

/** Available mutations */
export type MutationAddInvitationArgs = {
  input: InvitationInput;
};

/** Available mutations */
export type MutationAddShareArgs = {
  input: ShareInput;
};

/** Available mutations */
export type MutationCancelCloudArgs = {
  input: CancelCloudInput;
};

/** Available mutations */
export type MutationCheckoutCartArgs = {
  addOns?: InputMaybe<Array<InputMaybe<CheckoutLineItem>>>;
  item: CheckoutLineItem;
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
export type MutationRemovePartnerConnectionArgs = {
  input: RemovePartnerConnectionInput;
};

/** Available mutations */
export type MutationTrackEventArgs = {
  input: TrackEventInput;
};

/** Available mutations */
export type MutationUpdatePartnerConnectionArgs = {
  input: UpdatePartnerConnectionInput;
};

/** Available mutations */
export type MutationUpdateProfileArgs = {
  input?: InputMaybe<ProfileInput>;
};

/** Available mutations */
export type MutationUpdateUserFeaturesArgs = {
  input: UserFeaturesInput;
  user_id: Scalars['ID'];
};

/** Available mutations */
export type MutationUpgradeCloudArgs = {
  connectionId: Scalars['ID'];
  item: CheckoutLineItem;
};

/** Available mutations */
export type MutationVerifyInvitationArgs = {
  input: InvitationFlagInput;
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

/** Databricks Partner Information */
export type PartnerConnectionDetail = {
  __typename?: 'PartnerConnectionDetail';
  cluster_id?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  databricks_connection_name?: Maybe<Scalars['String']>;
  databricks_personal_token_id?: Maybe<Scalars['String']>;
  databricks_workspace_id?: Maybe<Scalars['String']>;
  http_path?: Maybe<Scalars['String']>;
  is_configured_resources?: Maybe<Scalars['Boolean']>;
  jdbc_url?: Maybe<Scalars['String']>;
  stardog_server_connection?: Maybe<Connection>;
  user_email?: Maybe<Scalars['String']>;
  user_first_name?: Maybe<Scalars['String']>;
  workspace_url?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  best_describes_company: Scalars['String'];
  best_describes_role: Scalars['String'];
  company: Scalars['String'];
  familiarity_with_kgs: Scalars['String'];
  first_name: Scalars['String'];
  industry: Scalars['String'];
  last_name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  use_case: Scalars['String'];
};

export type PurchaseSession = {
  __typename?: 'PurchaseSession';
  isExpired?: Maybe<Scalars['Boolean']>;
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
  getInvitation?: Maybe<Invitation>;
  getShareByShortHash?: Maybe<Share>;
  getStardogCloud?: Maybe<StardogCloud>;
  getStardogFree?: Maybe<StardogFree>;
  getStripePrices?: Maybe<Array<Maybe<StripePrice>>>;
  getStripeSubscriptionStatus?: Maybe<StripeSubscriptionStatus>;
  getUser?: Maybe<User>;
  getUserArchivedClouds?: Maybe<Array<Maybe<ArchivedCloud>>>;
  getUserClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  getUserConnections?: Maybe<Array<Maybe<Connection>>>;
  getUserCurrentPartnerConnection?: Maybe<PartnerConnectionDetail>;
  getUserSearchDetails?: Maybe<UserSearchDetails>;
  grafanaHighLevelDashboardSettings?: Maybe<GrafanaDashboardSettings>;
  listConnections?: Maybe<Array<Maybe<Connection>>>;
  listConnectionsByEndpoint?: Maybe<Array<Maybe<Connection>>>;
  listInactiveClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  listStardogCloud?: Maybe<Array<Maybe<StardogCloud>>>;
  marketplaceSettings?: Maybe<MarketplaceSettings>;
  profile?: Maybe<User>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  settings: Settings;
  userPartnerConnections?: Maybe<Array<Maybe<PartnerConnectionDetail>>>;
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
export type QueryGetInvitationArgs = {
  id: Scalars['ID'];
};

/** Available queries */
export type QueryGetShareByShortHashArgs = {
  shortHash: Scalars['String'];
};

/** Available queries */
export type QueryGetStardogCloudArgs = {
  pk: Scalars['String'];
};

/** Available queries */
export type QueryGetStripeSubscriptionStatusArgs = {
  cloudName: Scalars['String'];
};

/** Available queries */
export type QueryGetUserArgs = {
  user_id: Scalars['String'];
};

/** Available queries */
export type QueryGetUserArchivedCloudsArgs = {
  user_id: Scalars['String'];
};

/** Available queries */
export type QueryGetUserCloudsArgs = {
  user_id: Scalars['String'];
};

/** Available queries */
export type QueryGetUserConnectionsArgs = {
  user_id: Scalars['String'];
};

/** Available queries */
export type QueryGetUserSearchDetailsArgs = {
  filters?: InputMaybe<UserSearchFiltersInput>;
  token: Scalars['String'];
};

/** Available queries */
export type QueryListConnectionsByEndpointArgs = {
  endpoint: Scalars['String'];
};

/** Available queries */
export type QueryListInactiveCloudsArgs = {
  flavor?: InputMaybe<Scalars['String']>;
};

/** Available queries */
export type QueryListStardogCloudArgs = {
  inactive_days?: InputMaybe<Scalars['Int']>;
};

/** Available queries */
export type QuerySearchUsersArgs = {
  filters?: InputMaybe<UserSearchFiltersInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  token: Scalars['String'];
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

export type RemovePartnerConnectionInput = {
  connection_id: Scalars['String'];
};

/** Settings, these are settings that control the front end display */
export type Settings = {
  __typename?: 'Settings';
  auth0Auth: Scalars['Boolean'];
  azureAuth: Scalars['Boolean'];
  baseURL: Scalars['String'];
  dataMarketplace: Scalars['Boolean'];
  designerVersion: Scalars['String'];
  explorerVersion: Scalars['String'];
  friendlyName: Scalars['String'];
  googleAuth: Scalars['Boolean'];
  hagertyAuth: Scalars['Boolean'];
  homeFooterLinks: Scalars['Boolean'];
  keycloakAuth: Scalars['Boolean'];
  openidAuth: Scalars['Boolean'];
  passwordAuth: Scalars['Boolean'];
  portal: Scalars['Boolean'];
  stardogEndpoint: Scalars['String'];
  studioVersion: Scalars['String'];
};

/** Share URL, short urls for sharing */
export type Share = {
  __typename?: 'Share';
  endpoint?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Datetime']>;
  last_accessed?: Maybe<Scalars['Datetime']>;
  lookup_count?: Maybe<Scalars['Int']>;
  service?: Maybe<Scalars['String']>;
  short_url?: Maybe<Scalars['String']>;
  target_path?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
};

export type ShareInput = {
  endpoint: Scalars['String'];
  expires: Scalars['Int'];
  service: Scalars['String'];
  target_path: Scalars['String'];
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
  owner?: Maybe<User>;
  payment_ref?: Maybe<Scalars['String']>;
  price_ref?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
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
  is_cloud_quota_breached?: Maybe<Scalars['Boolean']>;
};

export type StripePrice = {
  __typename?: 'StripePrice';
  amount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  product_info?: Maybe<StripeProduct>;
  stardog_billing_type?: Maybe<Scalars['String']>;
  stardog_flavor?: Maybe<Scalars['String']>;
};

export type StripeProduct = {
  __typename?: 'StripeProduct';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<StripeProductMetadata>;
  name?: Maybe<Scalars['String']>;
};

export type StripeProductMetadata = {
  __typename?: 'StripeProductMetadata';
  flavor?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionStatus = {
  __typename?: 'StripeSubscriptionStatus';
  status: Scalars['String'];
};

export type TrackEventInput = {
  client_type?: InputMaybe<Scalars['String']>;
  event: Scalars['String'];
};

export type UpdatePartnerConnectionInput = {
  connection_id: Scalars['String'];
  databricks_connection_name: Scalars['String'];
  stardog_connection_id: Scalars['String'];
};

/**
 * The user model, this represents a user from Auth0. Only fields defined here
 * are exposed in the possible GraphQL responses.
 */
export type User = {
  __typename?: 'User';
  best_describes_company?: Maybe<Scalars['String']>;
  best_describes_role?: Maybe<Scalars['String']>;
  can_provision_cloud?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  date_joined?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  familiarity_with_kgs?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  has_stardog_free?: Maybe<Scalars['Boolean']>;
  has_updated_profile?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  industry?: Maybe<Scalars['String']>;
  is_authenticated: Scalars['Boolean'];
  is_databricks_user?: Maybe<Scalars['Boolean']>;
  is_ephemeral?: Maybe<Scalars['Boolean']>;
  is_partner_user?: Maybe<Scalars['Boolean']>;
  is_staff?: Maybe<Scalars['Boolean']>;
  is_static_voicebox?: Maybe<Scalars['Boolean']>;
  /** @deprecated is_studio_voicebox_enabled is deprecated. Use is_voicebox_enabled instead. */
  is_studio_voicebox_enabled?: Maybe<Scalars['Boolean']>;
  is_superuser?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['Boolean']>;
  is_voicebox_enabled?: Maybe<Scalars['Boolean']>;
  last_login?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  needs_stardog_free?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  stripe_customer?: Maybe<StripeCustomer>;
  sub?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  use_case?: Maybe<Scalars['String']>;
  userflow_signature?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserFeaturesInput = {
  is_static_voicebox?: InputMaybe<Scalars['Boolean']>;
  is_voicebox_enabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserSearchDetails = {
  __typename?: 'UserSearchDetails';
  total?: Maybe<Scalars['Int']>;
};

export type UserSearchFiltersInput = {
  is_staff?: InputMaybe<Scalars['Boolean']>;
  is_voicebox_enabled?: InputMaybe<Scalars['Boolean']>;
};

export type AddShareMutationVariables = Exact<{
  input: ShareInput;
}>;

export type AddShareMutation = {
  __typename?: 'Mutation';
  addShare?: {
    __typename?: 'Share';
    short_url?: string | null;
    target_path?: string | null;
    endpoint?: string | null;
    service?: string | null;
    expiration?: string | null;
  } | null;
};

export type GetConnectionByIndexQueryVariables = Exact<{
  index: Scalars['Int'];
}>;

export type GetConnectionByIndexQuery = {
  __typename?: 'Query';
  connection?: {
    __typename?: 'Connection';
    id: string;
    index: number;
    dashboard?: string | null;
    name: string;
    username?: string | null;
    endpoint: string;
    token?: string | null;
    isStardogCloud?: boolean | null;
    isStardogFree?: boolean | null;
    isAllocating?: boolean | null;
    useBrowserAuth?: boolean | null;
    useSSO?: boolean | null;
    cloud?: { __typename?: 'StardogCloud'; id?: string | null } | null;
  } | null;
};

export type ListConnectionsQueryVariables = Exact<{ [key: string]: never }>;

export type ListConnectionsQuery = {
  __typename?: 'Query';
  listConnections?: Array<{
    __typename?: 'Connection';
    id: string;
    index: number;
    dashboard?: string | null;
    name: string;
    username?: string | null;
    endpoint: string;
    token?: string | null;
    isStardogCloud?: boolean | null;
    isStardogFree?: boolean | null;
    isAllocating?: boolean | null;
    useBrowserAuth?: boolean | null;
    useSSO?: boolean | null;
    cloud?: { __typename?: 'StardogCloud'; id?: string | null } | null;
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
    is_staff?: boolean | null;
    is_superuser?: boolean | null;
    userflow_signature?: string | null;
    date_joined?: string | null;
    is_voicebox_enabled?: boolean | null;
  } | null;
};

export type TrackEventMutationVariables = Exact<{
  input: TrackEventInput;
}>;

export type TrackEventMutation = {
  __typename?: 'Mutation';
  trackEvent?: {
    __typename?: 'GenericResponse';
    success: boolean;
    error?: string | null;
  } | null;
};

export const AddShareDocument = `
    mutation addShare($input: ShareInput!) {
  addShare(input: $input) {
    short_url
    target_path
    endpoint
    service
    expiration
  }
}
    `;
export const GetConnectionByIndexDocument = `
    query getConnectionByIndex($index: Int!) {
  connection: getConnectionByIndex(index: $index) {
    id
    index
    cloud {
      id
    }
    dashboard
    name
    username
    endpoint
    token
    isStardogCloud
    isStardogFree
    isAllocating
    useBrowserAuth
    useSSO
  }
}
    `;
export const ListConnectionsDocument = `
    query listConnections {
  listConnections {
    id
    index
    cloud {
      id
    }
    dashboard
    name
    username
    endpoint
    token
    isStardogCloud
    isStardogFree
    isAllocating
    useBrowserAuth
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
    is_staff
    is_superuser
    userflow_signature
    date_joined
    is_voicebox_enabled
  }
}
    `;
export const TrackEventDocument = `
    mutation trackEvent($input: TrackEventInput!) {
  trackEvent(input: $input) {
    success
    error
  }
}
    `;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    addShare(
      variables: AddShareMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AddShareMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddShareMutation>(AddShareDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'addShare',
        'mutation'
      );
    },
    getConnectionByIndex(
      variables: GetConnectionByIndexQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetConnectionByIndexQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetConnectionByIndexQuery>(
            GetConnectionByIndexDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getConnectionByIndex',
        'query'
      );
    },
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
        'listConnections',
        'query'
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
        'profile',
        'query'
      );
    },
    trackEvent(
      variables: TrackEventMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TrackEventMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TrackEventMutation>(TrackEventDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'trackEvent',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
