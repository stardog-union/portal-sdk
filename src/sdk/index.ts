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
  PositiveInt: any;
};

export type AddConnectionInput = {
  endpoint: Scalars['String'];
  name: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  useBrowserAuth?: InputMaybe<Scalars['Boolean']>;
  useSSO?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ApiToken = {
  __typename?: 'ApiToken';
  created: Scalars['Datetime'];
  expires: Scalars['Datetime'];
  id: Scalars['ID'];
  last_used?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
  prefix: Scalars['String'];
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

export type AzureProvider = {
  __typename?: 'AzureProvider';
  customerName: Scalars['String'];
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

export type CreateApiTokenInput = {
  expires_days: Scalars['PositiveInt'];
  name: Scalars['String'];
};

export type CreateApiTokenResult = {
  __typename?: 'CreateApiTokenResult';
  secret: Scalars['String'];
};

export type CustomerSsoSettings = {
  __typename?: 'CustomerSsoSettings';
  azureProviders: Array<Maybe<AzureProvider>>;
};

/** Generic deletion response type to handle reporting success. */
export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type EditApiTokenInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
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

export type EditVoiceboxConversationInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
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

export type ItemCount = {
  __typename?: 'ItemCount';
  count?: Maybe<Scalars['Int']>;
};

export type MarketplaceSettings = {
  __typename?: 'MarketplaceSettings';
  marketplaceDatabase: Scalars['String'];
  marketplaceEndpoint: Scalars['String'];
  marketplacePassword: Scalars['String'];
  marketplaceUsername: Scalars['String'];
};

/** Root Mutation Type */
export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation?: Maybe<GenericResponse>;
  addConnection?: Maybe<Connection>;
  addInvitation?: Maybe<GenericResponse>;
  addShare?: Maybe<Share>;
  cancelCloud?: Maybe<GenericResponse>;
  checkoutCart?: Maybe<BillingSession>;
  createApiToken?: Maybe<CreateApiTokenResult>;
  deleteAccount?: Maybe<DeletionResponse>;
  deleteApiToken?: Maybe<GenericResponse>;
  deleteCloud?: Maybe<DeletionResponse>;
  deleteConnection?: Maybe<DeletionResponse>;
  editApiToken?: Maybe<GenericResponse>;
  editConnection?: Maybe<Connection>;
  editVoiceboxConversation?: Maybe<GenericResponse>;
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

/** Root Mutation Type */
export type MutationAcceptInvitationArgs = {
  input: InvitationFlagInput;
};

/** Root Mutation Type */
export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};

/** Root Mutation Type */
export type MutationAddInvitationArgs = {
  input: InvitationInput;
};

/** Root Mutation Type */
export type MutationAddShareArgs = {
  input: ShareInput;
};

/** Root Mutation Type */
export type MutationCancelCloudArgs = {
  input: CancelCloudInput;
};

/** Root Mutation Type */
export type MutationCheckoutCartArgs = {
  addOns?: InputMaybe<Array<InputMaybe<CheckoutLineItem>>>;
  item: CheckoutLineItem;
};

/** Root Mutation Type */
export type MutationCreateApiTokenArgs = {
  input: CreateApiTokenInput;
};

/** Root Mutation Type */
export type MutationDeleteApiTokenArgs = {
  id: Scalars['ID'];
};

/** Root Mutation Type */
export type MutationDeleteCloudArgs = {
  input: CloudCleanupInput;
};

/** Root Mutation Type */
export type MutationDeleteConnectionArgs = {
  name: Scalars['String'];
};

/** Root Mutation Type */
export type MutationEditApiTokenArgs = {
  input: EditApiTokenInput;
};

/** Root Mutation Type */
export type MutationEditConnectionArgs = {
  input: EditConnectionInput;
};

/** Root Mutation Type */
export type MutationEditVoiceboxConversationArgs = {
  input: EditVoiceboxConversationInput;
};

/** Root Mutation Type */
export type MutationGenerateConfigurationArgs = {
  endpoint: Scalars['String'];
};

/** Root Mutation Type */
export type MutationRemovePartnerConnectionArgs = {
  input: RemovePartnerConnectionInput;
};

/** Root Mutation Type */
export type MutationTrackEventArgs = {
  input: TrackEventInput;
};

/** Root Mutation Type */
export type MutationUpdatePartnerConnectionArgs = {
  input: UpdatePartnerConnectionInput;
};

/** Root Mutation Type */
export type MutationUpdateProfileArgs = {
  input?: InputMaybe<ProfileInput>;
};

/** Root Mutation Type */
export type MutationUpdateUserFeaturesArgs = {
  input: UserFeaturesInput;
  user_id: Scalars['ID'];
};

/** Root Mutation Type */
export type MutationUpgradeCloudArgs = {
  connectionId: Scalars['ID'];
  item: CheckoutLineItem;
};

/** Root Mutation Type */
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

/** To page through response. */
export type PagingInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

/** Root Query Type */
export type Query = {
  __typename?: 'Query';
  apiTokenCount?: Maybe<ItemCount>;
  checkCloudQueue?: Maybe<QueueCounts>;
  customerSsoSettings?: Maybe<CustomerSsoSettings>;
  generateToken?: Maybe<OAuthToken>;
  getConnection?: Maybe<Connection>;
  getConnectionByIndex?: Maybe<Connection>;
  getInvitation?: Maybe<Invitation>;
  getShareByShortHash?: Maybe<Share>;
  getStardogCloud?: Maybe<StardogCloud>;
  getStripePrices?: Maybe<Array<Maybe<StripePrice>>>;
  getStripeSubscriptionStatus?: Maybe<StripeSubscriptionStatus>;
  getUser?: Maybe<User>;
  getUserArchivedClouds?: Maybe<Array<Maybe<ArchivedCloud>>>;
  getUserClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  getUserConnections?: Maybe<Array<Maybe<Connection>>>;
  getUserCurrentPartnerConnection?: Maybe<PartnerConnectionDetail>;
  getUserSearchDetails?: Maybe<UserSearchDetails>;
  /** Retrieve a single Voicebox conversation for the authenticated user by the conversation id. */
  getVoiceboxConversation?: Maybe<VoiceboxConversation>;
  grafanaHighLevelDashboardSettings?: Maybe<GrafanaDashboardSettings>;
  listApiTokens?: Maybe<Array<Maybe<ApiToken>>>;
  listConnections?: Maybe<Array<Maybe<Connection>>>;
  listConnectionsByEndpoint?: Maybe<Array<Maybe<Connection>>>;
  listInactiveClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  listStardogCloud?: Maybe<Array<Maybe<StardogCloud>>>;
  /**
   * Retrieve Voicebox conversations for the authenticated user, ordered by creation date, with the newest first.
   * Use PagingInput to paginate. If PagingInput is omitted, all conversations are returned.
   */
  listVoiceboxConversations?: Maybe<Array<Maybe<VoiceboxConversation>>>;
  marketplaceSettings?: Maybe<MarketplaceSettings>;
  profile?: Maybe<User>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  settings: Settings;
  userPartnerConnections?: Maybe<Array<Maybe<PartnerConnectionDetail>>>;
  /**
   * Get the amount of total Voicebox conversation's an authenticated user. May be helpful in conjunction with listVoiceboxConversations
   * to page through all conversations.
   */
  voiceboxConversationCount?: Maybe<ItemCount>;
};

/** Root Query Type */
export type QueryGenerateTokenArgs = {
  endpoint: Scalars['String'];
};

/** Root Query Type */
export type QueryGetConnectionArgs = {
  name: Scalars['String'];
};

/** Root Query Type */
export type QueryGetConnectionByIndexArgs = {
  index: Scalars['Int'];
};

/** Root Query Type */
export type QueryGetInvitationArgs = {
  id: Scalars['ID'];
};

/** Root Query Type */
export type QueryGetShareByShortHashArgs = {
  shortHash: Scalars['String'];
};

/** Root Query Type */
export type QueryGetStardogCloudArgs = {
  pk: Scalars['String'];
};

/** Root Query Type */
export type QueryGetStripeSubscriptionStatusArgs = {
  cloudName: Scalars['String'];
};

/** Root Query Type */
export type QueryGetUserArgs = {
  user_id: Scalars['String'];
};

/** Root Query Type */
export type QueryGetUserArchivedCloudsArgs = {
  user_id: Scalars['String'];
};

/** Root Query Type */
export type QueryGetUserCloudsArgs = {
  user_id: Scalars['String'];
};

/** Root Query Type */
export type QueryGetUserConnectionsArgs = {
  user_id: Scalars['String'];
};

/** Root Query Type */
export type QueryGetUserSearchDetailsArgs = {
  filters?: InputMaybe<UserSearchFiltersInput>;
  token: Scalars['String'];
};

/** Root Query Type */
export type QueryGetVoiceboxConversationArgs = {
  conversation_id: Scalars['String'];
};

/** Root Query Type */
export type QueryListApiTokensArgs = {
  paging?: InputMaybe<PagingInput>;
};

/** Root Query Type */
export type QueryListConnectionsByEndpointArgs = {
  endpoint: Scalars['String'];
};

/** Root Query Type */
export type QueryListInactiveCloudsArgs = {
  flavor?: InputMaybe<Scalars['String']>;
};

/** Root Query Type */
export type QueryListStardogCloudArgs = {
  inactive_days?: InputMaybe<Scalars['Int']>;
};

/** Root Query Type */
export type QueryListVoiceboxConversationsArgs = {
  paging?: InputMaybe<PagingInput>;
};

/** Root Query Type */
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

export type SystemVoiceboxMessageContext = {
  __typename?: 'SystemVoiceboxMessageContext';
  actions?: Maybe<Array<Maybe<VoicboxSystemMessageAction>>>;
  followup_examples?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
};

export type TrackEventInput = {
  client_type?: InputMaybe<Scalars['String']>;
  event: Scalars['String'];
  properties?: InputMaybe<Scalars['String']>;
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

export type UserVoiceboxMessageContext = {
  __typename?: 'UserVoiceboxMessageContext';
  app?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  model?: Maybe<Scalars['String']>;
  named_graphs?: Maybe<Array<Maybe<Scalars['String']>>>;
  reasoning?: Maybe<Scalars['Boolean']>;
};

export type VoicboxSystemMessageAction = {
  __typename?: 'VoicboxSystemMessageAction';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** A user's conversation with Voicebox */
export type VoiceboxConversation = {
  __typename?: 'VoiceboxConversation';
  created?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  /** The last message in the conversation that was sent by the user. */
  last_user_message?: Maybe<VoiceboxMessage>;
  /** Message history ordered oldest to newest. */
  message_history?: Maybe<Array<Maybe<VoiceboxMessage>>>;
  name?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Datetime']>;
};

/** A Message within a Voicebox conversation. */
export type VoiceboxMessage = {
  __typename?: 'VoiceboxMessage';
  comment?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Datetime']>;
  id: Scalars['ID'];
  score?: Maybe<Scalars['Float']>;
  sender?: Maybe<Scalars['String']>;
  system_message_context?: Maybe<SystemVoiceboxMessageContext>;
  user_message_context?: Maybe<UserVoiceboxMessageContext>;
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

export type GetVoiceboxConversationQueryVariables = Exact<{
  conversation_id: Scalars['String'];
}>;

export type GetVoiceboxConversationQuery = {
  __typename?: 'Query';
  getVoiceboxConversation?: {
    __typename?: 'VoiceboxConversation';
    id: string;
    message_history?: Array<{
      __typename?: 'VoiceboxMessage';
      id: string;
      content?: string | null;
      sender?: string | null;
      created?: string | null;
      score?: number | null;
      user_message_context?: {
        __typename?: 'UserVoiceboxMessageContext';
        id: string;
        app?: string | null;
        connection_id?: string | null;
        database?: string | null;
        named_graphs?: Array<string | null> | null;
        model?: string | null;
        reasoning?: boolean | null;
      } | null;
      system_message_context?: {
        __typename?: 'SystemVoiceboxMessageContext';
        id: string;
        followup_examples?: Array<string | null> | null;
        actions?: Array<{
          __typename?: 'VoicboxSystemMessageAction';
          type?: string | null;
          label?: string | null;
          value?: string | null;
        } | null> | null;
      } | null;
    } | null> | null;
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

export type ListVoiceboxConversationsQueryVariables = Exact<{
  paging?: InputMaybe<PagingInput>;
}>;

export type ListVoiceboxConversationsQuery = {
  __typename?: 'Query';
  listVoiceboxConversations?: Array<{
    __typename?: 'VoiceboxConversation';
    id: string;
    last_user_message?: {
      __typename?: 'VoiceboxMessage';
      id: string;
      content?: string | null;
      sender?: string | null;
      created?: string | null;
      score?: number | null;
      user_message_context?: {
        __typename?: 'UserVoiceboxMessageContext';
        id: string;
        app?: string | null;
        connection_id?: string | null;
        database?: string | null;
        named_graphs?: Array<string | null> | null;
        model?: string | null;
        reasoning?: boolean | null;
      } | null;
    } | null;
  } | null> | null;
  voiceboxConversationCount?: {
    __typename?: 'ItemCount';
    count?: number | null;
  } | null;
};

export type MarketplaceSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type MarketplaceSettingsQuery = {
  __typename?: 'Query';
  marketplaceSettings?: {
    __typename?: 'MarketplaceSettings';
    marketplaceUsername: string;
    marketplacePassword: string;
    marketplaceEndpoint: string;
    marketplaceDatabase: string;
  } | null;
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
    is_static_voicebox?: boolean | null;
  } | null;
};

export type EditVoiceboxConversationMutationVariables = Exact<{
  input: EditVoiceboxConversationInput;
}>;

export type EditVoiceboxConversationMutation = {
  __typename?: 'Mutation';
  editVoiceboxConversation?: {
    __typename?: 'GenericResponse';
    success: boolean;
    error?: string | null;
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
export const GetVoiceboxConversationDocument = `
    query getVoiceboxConversation($conversation_id: String!) {
  getVoiceboxConversation(conversation_id: $conversation_id) {
    id
    message_history {
      id
      content
      sender
      created
      score
      user_message_context {
        id
        app
        connection_id
        database
        named_graphs
        model
        reasoning
      }
      system_message_context {
        id
        followup_examples
        actions {
          type
          label
          value
        }
      }
    }
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
export const ListVoiceboxConversationsDocument = `
    query listVoiceboxConversations($paging: PagingInput) {
  listVoiceboxConversations(paging: $paging) {
    id
    last_user_message {
      id
      content
      sender
      created
      score
      user_message_context {
        id
        app
        connection_id
        database
        named_graphs
        model
        reasoning
      }
    }
  }
  voiceboxConversationCount {
    count
  }
}
    `;
export const MarketplaceSettingsDocument = `
    query marketplaceSettings {
  marketplaceSettings {
    marketplaceUsername
    marketplacePassword
    marketplaceEndpoint
    marketplaceDatabase
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
    is_static_voicebox
  }
}
    `;
export const EditVoiceboxConversationDocument = `
    mutation editVoiceboxConversation($input: EditVoiceboxConversationInput!) {
  editVoiceboxConversation(input: $input) {
    success
    error
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
    getVoiceboxConversation(
      variables: GetVoiceboxConversationQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetVoiceboxConversationQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetVoiceboxConversationQuery>(
            GetVoiceboxConversationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getVoiceboxConversation',
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
    listVoiceboxConversations(
      variables?: ListVoiceboxConversationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ListVoiceboxConversationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ListVoiceboxConversationsQuery>(
            ListVoiceboxConversationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'listVoiceboxConversations',
        'query'
      );
    },
    marketplaceSettings(
      variables?: MarketplaceSettingsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MarketplaceSettingsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MarketplaceSettingsQuery>(
            MarketplaceSettingsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'marketplaceSettings',
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
    editVoiceboxConversation(
      variables: EditVoiceboxConversationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<EditVoiceboxConversationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<EditVoiceboxConversationMutation>(
            EditVoiceboxConversationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'editVoiceboxConversation',
        'mutation'
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
