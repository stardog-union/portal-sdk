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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Base64Bytes: { input: any; output: any };
  Date: { input: any; output: any };
  Datetime: { input: string; output: string };
  NonNegativeInt: { input: any; output: any };
  PositiveInt: { input: any; output: any };
};

export type AddConnectionInput = {
  endpoint: Scalars['String']['input'];
  internalEndpoint?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
  /** Scope for SSO token exchange when authenticating via org SSO */
  ssoTokenExchangeScope?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  useBrowserAuth?: InputMaybe<Scalars['Boolean']['input']>;
  useSSO?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AddInvitationResult = {
  __typename?: 'AddInvitationResult';
  email: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type AddInvitationsResponse = {
  __typename?: 'AddInvitationsResponse';
  error?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<AddInvitationResult>>;
};

export type AddMyOrgConnectionInput = {
  endpoint: Scalars['String']['input'];
  internalEndpoint?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  org_domain: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type AddOrganizationInput = {
  admins?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddOrganizationResult = {
  __typename?: 'AddOrganizationResult';
  invitationResults?: Maybe<Array<AddInvitationResult>>;
  organization?: Maybe<Organization>;
};

export type AddSsoConnectionInput = {
  connection_name: Scalars['String']['input'];
  internalEndpoint?: InputMaybe<Scalars['String']['input']>;
  provider_name: Scalars['String']['input'];
  stardog_endpoint: Scalars['String']['input'];
};

export type ApiToken = {
  __typename?: 'ApiToken';
  created: Scalars['Datetime']['output'];
  expires: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  last_used?: Maybe<Scalars['Datetime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prefix: Scalars['String']['output'];
};

/** ArchivedCloud, represents an archived Stardog Cloud instance */
export type ArchivedCloud = {
  __typename?: 'ArchivedCloud';
  bi_endpoint?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  customer_ref?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  flavor?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payment_ref?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type AzureProvider = {
  __typename?: 'AzureProvider';
  customerName: Scalars['String']['output'];
};

export type BillingSession = {
  __typename?: 'BillingSession';
  session_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BillingSessionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CancelCloudInput = {
  cloud_id: Scalars['String']['input'];
  connection_id: Scalars['String']['input'];
};

export type CheckoutLineItem = {
  flavor: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CloudCleanupInput = {
  cloudName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** Filters for the cloud report query */
export type CloudFilters = {
  flavor?: InputMaybe<Scalars['String']['input']>;
  ownerInactiveDays?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Stardog Cloud Flavor and Size info */
export type CloudFlavor = {
  __typename?: 'CloudFlavor';
  disk?: Maybe<Scalars['String']['output']>;
  iops?: Maybe<Scalars['Float']['output']>;
  is_cluster?: Maybe<Scalars['Boolean']['output']>;
  memory?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  vcpus?: Maybe<Scalars['Float']['output']>;
};

export type CloudInvitationInput = {
  email: Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Cloud report data with filtered results and statistics */
export type CloudReportData = {
  __typename?: 'CloudReportData';
  clouds?: Maybe<Array<Maybe<StardogCloud>>>;
  queueCounts?: Maybe<QueueCounts>;
  stats?: Maybe<CloudReportStats>;
};

/** Statistics for the cloud report */
export type CloudReportStats = {
  __typename?: 'CloudReportStats';
  resultCount?: Maybe<Scalars['Int']['output']>;
  resultInactiveCount?: Maybe<Scalars['Int']['output']>;
  totalAllocated?: Maybe<Scalars['Int']['output']>;
  totalInactive?: Maybe<Scalars['Int']['output']>;
};

/** Saved Connection info for a Stardog instance */
export type Connection = {
  __typename?: 'Connection';
  access?: Maybe<ConnectionAccess>;
  cloud?: Maybe<StardogCloud>;
  dashboard?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  internalEndpoint?: Maybe<Scalars['String']['output']>;
  isAllocating?: Maybe<Scalars['Boolean']['output']>;
  isStardogCloud?: Maybe<Scalars['Boolean']['output']>;
  isStardogFree?: Maybe<Scalars['Boolean']['output']>;
  isWaitingForPayment?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  shouldShowDesigner?: Maybe<Scalars['Boolean']['output']>;
  /** SSO provider information (only present for SSO connections) */
  ssoProvider?: Maybe<SsoProviderInfo>;
  /** Scope for SSO token exchange when authenticating via org SSO */
  ssoTokenExchangeScope?: Maybe<Scalars['String']['output']>;
  stripeSubscription?: Maybe<PurchaseSession>;
  stripeSubscriptionOrder?: Maybe<ProvisionedOrder>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** @deprecated useBrowserAuth is deprecated. Check if username and token are empty to determine if browser authentication is used. */
  useBrowserAuth?: Maybe<Scalars['Boolean']['output']>;
  useConnectionSSO?: Maybe<Scalars['Boolean']['output']>;
  useSSO?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** Connection access record granting access to a user or organization */
export type ConnectionAccess = {
  __typename?: 'ConnectionAccess';
  connection?: Maybe<Connection>;
  id: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
  organization_is_enabled?: Maybe<Scalars['Boolean']['output']>;
  stardog_roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user?: Maybe<User>;
  user_is_private?: Maybe<Scalars['Boolean']['output']>;
};

/** Connection invitation for granting access to a user for a personal connection */
export type ConnectionInvitation = {
  __typename?: 'ConnectionInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  connection_roles?: Maybe<Array<Scalars['String']['output']>>;
  created?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  expired?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

/**
 * Input for creating connection invitations.
 * Connection must belong to a personal organization.
 */
export type ConnectionInvitationsInput = {
  connection_id: Scalars['ID']['input'];
  connection_roles?: InputMaybe<Array<Scalars['String']['input']>>;
  emails: Array<Scalars['String']['input']>;
};

export type CreateApiTokenInput = {
  app_id?: InputMaybe<Scalars['ID']['input']>;
  expires_days: Scalars['PositiveInt']['input'];
  name: Scalars['String']['input'];
};

export type CreateApiTokenResult = {
  __typename?: 'CreateApiTokenResult';
  secret: Scalars['String']['output'];
};

/** Input for creating a Microsoft Entra SSO configuration */
export type CreateOrganizationMicrosoftEntraSsoConfigInput = {
  /** OAuth client ID from Microsoft Entra */
  clientId: Scalars['String']['input'];
  /** OAuth client secret from Microsoft Entra */
  clientSecret: Scalars['String']['input'];
  /** OIDC discovery endpoint URL (.well-known/openid-configuration) */
  discoveryUrl: Scalars['String']['input'];
  /** Whether to end the user's IDP session on logout (RP-Initiated Logout) */
  idpLogoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether SSO login is enabled (defaults to true) */
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for creating an Okta SSO configuration */
export type CreateOrganizationOktaSsoConfigInput = {
  /** OAuth client ID from Okta */
  clientId: Scalars['String']['input'];
  /** OAuth client secret from Okta */
  clientSecret: Scalars['String']['input'];
  /** OIDC discovery endpoint URL (.well-known/openid-configuration) */
  discoveryUrl: Scalars['String']['input'];
  /** Whether to end the user's IDP session on logout (RP-Initiated Logout) */
  idpLogoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether SSO login is enabled (defaults to true) */
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Authorization server audience (required for Okta token exchange) */
  oktaAuthorizationServerAudience: Scalars['String']['input'];
  /** Client ID for the backend API Services app (for OBO token exchange) */
  oktaBackendClientId: Scalars['String']['input'];
  /** Client secret for the backend API Services app */
  oktaBackendClientSecret: Scalars['String']['input'];
};

export type CreateVoiceboxAppInput = {
  connection_id: Scalars['String']['input'];
  database?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  named_graphs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reasoning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerSsoSettings = {
  __typename?: 'CustomerSsoSettings';
  azureProviders: Array<Maybe<AzureProvider>>;
  oktaProviders: Array<Maybe<OktaProvider>>;
  pingProviders: Array<Maybe<PingProvider>>;
};

export type DeleteApiTokenInput = {
  app_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteConnectionInput = {
  id: Scalars['ID']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteInvitationResult = {
  __typename?: 'DeleteInvitationResult';
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteInvitationsResponse = {
  __typename?: 'DeleteInvitationsResponse';
  error?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<DeleteInvitationResult>>;
};

export type DeleteMyOrgConnectionInput = {
  id: Scalars['ID']['input'];
  org_domain: Scalars['String']['input'];
};

/** Generic deletion response type to handle reporting success. */
export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DesignerProject = {
  __typename?: 'DesignerProject';
  connection_id?: Maybe<Scalars['String']['output']>;
  content: Scalars['Base64Bytes']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: User;
  roles: Array<DesignerProjectRole>;
  updated_at: Scalars['Datetime']['output'];
};

export type DesignerProjectInvitation = {
  __typename?: 'DesignerProjectInvitation';
  accepted_at?: Maybe<Scalars['Datetime']['output']>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  invitee: User;
  is_accepted: Scalars['Boolean']['output'];
  project: DesignerProject;
  role: DesignerProjectRoleChoices;
  updated_at: Scalars['Datetime']['output'];
};

export type DesignerProjectRole = {
  __typename?: 'DesignerProjectRole';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  project: DesignerProject;
  role: DesignerProjectRoleChoices;
  updated_at: Scalars['Datetime']['output'];
  user: User;
};

export enum DesignerProjectRoleChoices {
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}

export type EditApiTokenInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditConnectionInput = {
  endpoint?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  internalEndpoint?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  org_domain?: InputMaybe<Scalars['String']['input']>;
  /** Scope for SSO token exchange when authenticating via org SSO */
  ssoTokenExchangeScope?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  useBrowserAuth?: InputMaybe<Scalars['Boolean']['input']>;
  useSSO?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyOrgConnectionInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  org_domain: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type EditOrganizationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditVoiceboxConversationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditVoiceboxCreditInput = {
  limit?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  usage?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  user_id: Scalars['ID']['input'];
};

/** Aggregated usage for an endpoint (all users combined) */
export type EndpointUsageRecord = {
  __typename?: 'EndpointUsageRecord';
  date?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  module: Scalars['String']['output'];
  month?: Maybe<Scalars['Int']['output']>;
  quarter?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  totalUnitsConsumed: Scalars['Float']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

/** Example Configuration for jwt.yaml and stardog.properties */
export type ExampleConfig = {
  __typename?: 'ExampleConfig';
  id: Scalars['ID']['output'];
  jwt_config: Scalars['String']['output'];
  properties: Scalars['String']['output'];
};

/** Generic response type to handle reporting success. */
export type GenericResponse = {
  __typename?: 'GenericResponse';
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** Grafana settings generate Grafana dashboard URLs */
export type GrafanaDashboardSettings = {
  __typename?: 'GrafanaDashboardSettings';
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/**
 * Invitation to join a Stardog Cloud instance, connection, or organization.
 *
 * Three mutually exclusive invitation types:
 * - Cloud invitation: Legacy invitation to a cloud instance (endpoint + role)
 * - Connection invitation: Grants access to a connection owned by a personal organization
 * - Organization invitation: Invites user to join a public organization as a member
 */
export type Invitation = {
  __typename?: 'Invitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  connection?: Maybe<Connection>;
  connection_roles?: Maybe<Array<Scalars['String']['output']>>;
  created?: Maybe<Scalars['Datetime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  existing_user?: Maybe<User>;
  expires?: Maybe<Scalars['Datetime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  organization?: Maybe<Organization>;
  organization_role?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
};

export type InvitationFlagInput = {
  id: Scalars['ID']['input'];
};

export type ItemCount = {
  __typename?: 'ItemCount';
  count?: Maybe<Scalars['Int']['output']>;
};

export type LogoutSsoConnectionInput = {
  connection_id: Scalars['String']['input'];
};

export type MarketplaceSettings = {
  __typename?: 'MarketplaceSettings';
  marketplaceDatabase: Scalars['String']['output'];
  marketplaceEndpoint: Scalars['String']['output'];
  marketplacePassword: Scalars['String']['output'];
  marketplaceUsername: Scalars['String']['output'];
};

export type ModifyConnectionAccessResponse = {
  __typename?: 'ModifyConnectionAccessResponse';
  error?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<ModifyConnectionAccessResult>>;
};

export type ModifyConnectionAccessResult = {
  __typename?: 'ModifyConnectionAccessResult';
  email: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** Root Mutation Type */
export type Mutation = {
  __typename?: 'Mutation';
  /** Accept an incoming Designer project invitation. */
  acceptDesignerProjectInvitation: Scalars['ID']['output'];
  acceptInvitation?: Maybe<GenericResponse>;
  addCloudInvitation?: Maybe<GenericResponse>;
  addConnection?: Maybe<Connection>;
  addConnectionInvitations?: Maybe<AddInvitationsResponse>;
  addMyOrganizationConnection?: Maybe<Connection>;
  addOrganization?: Maybe<AddOrganizationResult>;
  addOrganizationInvitations?: Maybe<AddInvitationsResponse>;
  addSSOConnection?: Maybe<SsoConnectionRedirectResponse>;
  addShare?: Maybe<Share>;
  archiveDesignerProject: Scalars['ID']['output'];
  cancelCloud?: Maybe<GenericResponse>;
  changeDesignerProjectRole: Scalars['ID']['output'];
  checkoutCart?: Maybe<BillingSession>;
  createApiToken?: Maybe<CreateApiTokenResult>;
  createDesignerProject: Scalars['ID']['output'];
  /**
   * Create Microsoft Entra SSO configuration for an organization.
   * Requires admin or owner role. Organization must have is_sso_allowed=True.
   */
  createOrganizationMicrosoftEntraSSOConfig?: Maybe<OrganizationMicrosoftEntraSsoConfig>;
  /**
   * Create Okta SSO configuration for an organization.
   * Requires admin or owner role. Organization must have is_sso_allowed=True.
   */
  createOrganizationOktaSSOConfig?: Maybe<OrganizationOktaSsoConfig>;
  createVoiceboxApp?: Maybe<GenericResponse>;
  deleteAccount?: Maybe<DeletionResponse>;
  deleteApiToken?: Maybe<GenericResponse>;
  deleteCloud?: Maybe<DeletionResponse>;
  deleteConnection?: Maybe<DeletionResponse>;
  deleteInvitations?: Maybe<DeleteInvitationsResponse>;
  deleteMyOrganizationConnection?: Maybe<DeletionResponse>;
  deleteOrganization?: Maybe<GenericResponse>;
  /**
   * Delete SSO configuration for an organization.
   * Requires admin or owner role.
   */
  deleteOrganizationSSOConfig?: Maybe<GenericResponse>;
  deleteVoiceboxApp?: Maybe<GenericResponse>;
  deleteVoiceboxConversation?: Maybe<GenericResponse>;
  editApiToken?: Maybe<GenericResponse>;
  editConnection?: Maybe<Connection>;
  editMyOrganizationConnection?: Maybe<Connection>;
  editOrganization?: Maybe<Organization>;
  editVoiceboxConversation?: Maybe<GenericResponse>;
  /**
   * Update a user's Voicebox credit. Can be used for example to reset their usage.
   * Limited to Stardog employee's who have permission to edit credits.
   */
  editVoiceboxCredit?: Maybe<GenericResponse>;
  generateConfiguration?: Maybe<ExampleConfig>;
  getStripeSessionUrl?: Maybe<BillingSession>;
  leaveOrganization?: Maybe<GenericResponse>;
  logoutSSOConnection?: Maybe<GenericResponse>;
  reauthenticateSSOConnection?: Maybe<SsoConnectionRedirectResponse>;
  removeMySharedConnection?: Maybe<GenericResponse>;
  removeOrganizationMembers?: Maybe<OrganizationMembersResponse>;
  removePartnerConnection?: Maybe<GenericResponse>;
  renameDesignerProject: Scalars['ID']['output'];
  renameMySharedConnection?: Maybe<GenericResponse>;
  resendEmail?: Maybe<GenericResponse>;
  restoreDesignerProject: Scalars['ID']['output'];
  /** Revoke an outgoing Designer project invitation, or reject an invitation sent to you. */
  revokeDesignerProjectInvitation: Scalars['ID']['output'];
  /** Revoke a given role, or leave a role given to you. */
  revokeDesignerProjectRole: Scalars['ID']['output'];
  revokeMemberConnectionRoles?: Maybe<ModifyConnectionAccessResponse>;
  revokePersonalConnectionAccess?: Maybe<ModifyConnectionAccessResponse>;
  /**
   * Send a Designer project invitation.
   *
   * (you cannot send an invitation to someone who already has a role)
   */
  sendDesignerProjectInvitation: Scalars['ID']['output'];
  setMemberConnectionRoles?: Maybe<ModifyConnectionAccessResponse>;
  setOrganizationConnectionVisibility?: Maybe<GenericResponse>;
  syncPlatformSduUsage: SyncPlatformSduUsageResult;
  trackEvent?: Maybe<GenericResponse>;
  transferOrganizationOwnership?: Maybe<GenericResponse>;
  /**
   * Unlink the current user's account from an organization's SSO.
   *
   * This removes the OrganizationMemberIdentity record, which means:
   * - The user can no longer log in via the organization's SSO
   * - The user remains a member of the organization (membership is NOT affected)
   * - The user can still log in via their primary provider (e.g., Auth0)
   * - The user can re-link their account later via the SSO linking flow
   */
  unlinkOrganizationSso?: Maybe<GenericResponse>;
  updateDesignerProject: Scalars['ID']['output'];
  updateOrganizationMembersRole?: Maybe<OrganizationMembersResponse>;
  /**
   * Update Microsoft Entra SSO configuration for an organization.
   * Requires admin or owner role.
   */
  updateOrganizationMicrosoftEntraSSOConfig?: Maybe<OrganizationMicrosoftEntraSsoConfig>;
  /**
   * Update Okta SSO configuration for an organization.
   * Requires admin or owner role.
   */
  updateOrganizationOktaSSOConfig?: Maybe<OrganizationOktaSsoConfig>;
  updatePartnerConnection?: Maybe<GenericResponse>;
  updatePersonalConnectionAccess?: Maybe<ModifyConnectionAccessResponse>;
  updateProfile?: Maybe<User>;
  updateUserFeatures?: Maybe<User>;
  updateVoiceboxApp?: Maybe<GenericResponse>;
  upgradeCloud?: Maybe<BillingSession>;
  verifyInvitation?: Maybe<GenericResponse>;
};

/** Root Mutation Type */
export type MutationAcceptDesignerProjectInvitationArgs = {
  invitation_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationAcceptInvitationArgs = {
  input: InvitationFlagInput;
};

/** Root Mutation Type */
export type MutationAddCloudInvitationArgs = {
  input: CloudInvitationInput;
};

/** Root Mutation Type */
export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};

/** Root Mutation Type */
export type MutationAddConnectionInvitationsArgs = {
  input: ConnectionInvitationsInput;
};

/** Root Mutation Type */
export type MutationAddMyOrganizationConnectionArgs = {
  input: AddMyOrgConnectionInput;
};

/** Root Mutation Type */
export type MutationAddOrganizationArgs = {
  input: AddOrganizationInput;
};

/** Root Mutation Type */
export type MutationAddOrganizationInvitationsArgs = {
  input: OrganizationInvitationsInput;
};

/** Root Mutation Type */
export type MutationAddSsoConnectionArgs = {
  input: AddSsoConnectionInput;
};

/** Root Mutation Type */
export type MutationAddShareArgs = {
  input: ShareInput;
};

/** Root Mutation Type */
export type MutationArchiveDesignerProjectArgs = {
  project_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationCancelCloudArgs = {
  input: CancelCloudInput;
};

/** Root Mutation Type */
export type MutationChangeDesignerProjectRoleArgs = {
  role: DesignerProjectRoleChoices;
  role_id: Scalars['ID']['input'];
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
export type MutationCreateDesignerProjectArgs = {
  connection_id?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['Base64Bytes']['input'];
  name: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationCreateOrganizationMicrosoftEntraSsoConfigArgs = {
  domain: Scalars['String']['input'];
  input: CreateOrganizationMicrosoftEntraSsoConfigInput;
};

/** Root Mutation Type */
export type MutationCreateOrganizationOktaSsoConfigArgs = {
  domain: Scalars['String']['input'];
  input: CreateOrganizationOktaSsoConfigInput;
};

/** Root Mutation Type */
export type MutationCreateVoiceboxAppArgs = {
  input: CreateVoiceboxAppInput;
};

/** Root Mutation Type */
export type MutationDeleteApiTokenArgs = {
  input: DeleteApiTokenInput;
};

/** Root Mutation Type */
export type MutationDeleteCloudArgs = {
  input: CloudCleanupInput;
};

/** Root Mutation Type */
export type MutationDeleteConnectionArgs = {
  input: DeleteConnectionInput;
};

/** Root Mutation Type */
export type MutationDeleteInvitationsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

/** Root Mutation Type */
export type MutationDeleteMyOrganizationConnectionArgs = {
  input: DeleteMyOrgConnectionInput;
};

/** Root Mutation Type */
export type MutationDeleteOrganizationArgs = {
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationDeleteOrganizationSsoConfigArgs = {
  domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationDeleteVoiceboxAppArgs = {
  id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationDeleteVoiceboxConversationArgs = {
  conversation_id: Scalars['ID']['input'];
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
export type MutationEditMyOrganizationConnectionArgs = {
  input: EditMyOrgConnectionInput;
};

/** Root Mutation Type */
export type MutationEditOrganizationArgs = {
  input: EditOrganizationInput;
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationEditVoiceboxConversationArgs = {
  input: EditVoiceboxConversationInput;
};

/** Root Mutation Type */
export type MutationEditVoiceboxCreditArgs = {
  input: EditVoiceboxCreditInput;
};

/** Root Mutation Type */
export type MutationGenerateConfigurationArgs = {
  endpoint: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationLeaveOrganizationArgs = {
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationLogoutSsoConnectionArgs = {
  input: LogoutSsoConnectionInput;
};

/** Root Mutation Type */
export type MutationReauthenticateSsoConnectionArgs = {
  input: ReauthenticateSsoConnectionInput;
};

/** Root Mutation Type */
export type MutationRemoveMySharedConnectionArgs = {
  input: RemoveMySharedConnectionInput;
};

/** Root Mutation Type */
export type MutationRemoveOrganizationMembersArgs = {
  emails: Array<Scalars['String']['input']>;
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationRemovePartnerConnectionArgs = {
  input: RemovePartnerConnectionInput;
};

/** Root Mutation Type */
export type MutationRenameDesignerProjectArgs = {
  name: Scalars['String']['input'];
  project_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationRenameMySharedConnectionArgs = {
  input: RenameMySharedConnectionInput;
};

/** Root Mutation Type */
export type MutationRestoreDesignerProjectArgs = {
  project_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationRevokeDesignerProjectInvitationArgs = {
  invitation_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Root Mutation Type */
export type MutationRevokeDesignerProjectRoleArgs = {
  role_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationRevokeMemberConnectionRolesArgs = {
  input: RevokeMemberConnectionRolesInput;
};

/** Root Mutation Type */
export type MutationRevokePersonalConnectionAccessArgs = {
  input: RevokePersonalConnectionAccessInput;
};

/** Root Mutation Type */
export type MutationSendDesignerProjectInvitationArgs = {
  invitee_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  role: DesignerProjectRoleChoices;
};

/** Root Mutation Type */
export type MutationSetMemberConnectionRolesArgs = {
  input: SetMemberConnectionRolesInput;
};

/** Root Mutation Type */
export type MutationSetOrganizationConnectionVisibilityArgs = {
  input: SetOrgConnectionVisibilityInput;
};

/** Root Mutation Type */
export type MutationSyncPlatformSduUsageArgs = {
  connectionId: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationTrackEventArgs = {
  input: TrackEventInput;
};

/** Root Mutation Type */
export type MutationTransferOrganizationOwnershipArgs = {
  email: Scalars['String']['input'];
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationUnlinkOrganizationSsoArgs = {
  domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationUpdateDesignerProjectArgs = {
  connection_id?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['Base64Bytes']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationUpdateOrganizationMembersRoleArgs = {
  emails: Array<Scalars['String']['input']>;
  new_role: Scalars['String']['input'];
  org_domain: Scalars['String']['input'];
};

/** Root Mutation Type */
export type MutationUpdateOrganizationMicrosoftEntraSsoConfigArgs = {
  domain: Scalars['String']['input'];
  input: UpdateOrganizationMicrosoftEntraSsoConfigInput;
};

/** Root Mutation Type */
export type MutationUpdateOrganizationOktaSsoConfigArgs = {
  domain: Scalars['String']['input'];
  input: UpdateOrganizationOktaSsoConfigInput;
};

/** Root Mutation Type */
export type MutationUpdatePartnerConnectionArgs = {
  input: UpdatePartnerConnectionInput;
};

/** Root Mutation Type */
export type MutationUpdatePersonalConnectionAccessArgs = {
  input: UpdatePersonalConnectionAccessInput;
};

/** Root Mutation Type */
export type MutationUpdateProfileArgs = {
  input?: InputMaybe<ProfileInput>;
};

/** Root Mutation Type */
export type MutationUpdateUserFeaturesArgs = {
  input: UserFeaturesInput;
  user_id: Scalars['ID']['input'];
};

/** Root Mutation Type */
export type MutationUpdateVoiceboxAppArgs = {
  input: UpdateVoiceboxAppInput;
};

/** Root Mutation Type */
export type MutationUpgradeCloudArgs = {
  connectionId: Scalars['ID']['input'];
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
  access_token?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type OktaProvider = {
  __typename?: 'OktaProvider';
  customerName: Scalars['String']['output'];
};

export type Organization = {
  __typename?: 'Organization';
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Whether this organization can configure SSO (premium feature) */
  isSsoAllowed?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  owner?: Maybe<User>;
  role?: Maybe<Scalars['String']['output']>;
  /** SSO configuration for this organization (null if not configured) */
  ssoConfig?: Maybe<OrganizationSsoConfig>;
  /** Current user's SSO identity link status for this organization */
  ssoIdentity?: Maybe<OrganizationSsoIdentity>;
};

export type OrganizationInvitation = {
  __typename?: 'OrganizationInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  expired?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  organization_role: Scalars['String']['output'];
};

/** Input for specifying connection access with optional Stardog roles. */
export type OrganizationInvitationsConnectionAccessInput = {
  connection_id: Scalars['ID']['input'];
  stardog_roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Input for creating organization invitations.
 * Organization must be a public organization.
 */
export type OrganizationInvitationsInput = {
  connection_access?: InputMaybe<
    Array<OrganizationInvitationsConnectionAccessInput>
  >;
  emails: Array<Scalars['String']['input']>;
  organization_domain: Scalars['String']['input'];
  organization_role: Scalars['String']['input'];
};

export type OrganizationMember = {
  __typename?: 'OrganizationMember';
  role: Scalars['String']['output'];
  user: User;
};

export type OrganizationMemberResult = {
  __typename?: 'OrganizationMemberResult';
  email: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type OrganizationMembersResponse = {
  __typename?: 'OrganizationMembersResponse';
  error?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<OrganizationMemberResult>>;
};

/** Microsoft Entra SSO configuration for an organization. */
export type OrganizationMicrosoftEntraSsoConfig = OrganizationSsoConfig & {
  __typename?: 'OrganizationMicrosoftEntraSSOConfig';
  clientId: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  discoveryUrl: Scalars['String']['output'];
  hasClientSecret: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  idpLogoutEnabled: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  loginUrl: Scalars['String']['output'];
  postLogoutRedirectUri: Scalars['String']['output'];
  providerType: SsoProviderType;
  redirectUri: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/** Okta SSO configuration for an organization. */
export type OrganizationOktaSsoConfig = OrganizationSsoConfig & {
  __typename?: 'OrganizationOktaSSOConfig';
  clientId: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  discoveryUrl: Scalars['String']['output'];
  hasClientSecret: Scalars['Boolean']['output'];
  /** Whether a backend client secret is configured */
  hasOktaBackendClientSecret: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  idpLogoutEnabled: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  loginUrl: Scalars['String']['output'];
  /** Authorization server audience for token exchange */
  oktaAuthorizationServerAudience: Scalars['String']['output'];
  /** Client ID for the backend API Services app (for OBO token exchange) */
  oktaBackendClientId: Scalars['String']['output'];
  postLogoutRedirectUri: Scalars['String']['output'];
  providerType: SsoProviderType;
  redirectUri: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * Base SSO configuration interface for an organization.
 * Allows organization members to log in via the organization's identity provider.
 */
export type OrganizationSsoConfig = {
  clientId: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  discoveryUrl: Scalars['String']['output'];
  /** Whether a client secret is configured (never exposes the actual secret) */
  hasClientSecret: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Whether logging out also ends the user's IDP session (RP-Initiated Logout) */
  idpLogoutEnabled: Scalars['Boolean']['output'];
  /** Whether SSO login is currently enabled for this organization */
  isEnabled: Scalars['Boolean']['output'];
  /** Organization-specific login URL */
  loginUrl: Scalars['String']['output'];
  /** URI the IDP redirects to after ending the user's session */
  postLogoutRedirectUri: Scalars['String']['output'];
  providerType: SsoProviderType;
  /** Redirect URI to configure in your identity provider's redirect URI whitelist */
  redirectUri: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * Represents the current user's SSO identity link to an organization.
 * This is the connection between a user's Stardog Cloud account and their
 * identity in the organization's SSO provider (Okta, Microsoft Entra).
 */
export type OrganizationSsoIdentity = {
  __typename?: 'OrganizationSSOIdentity';
  /** The user's identity subject from the SSO provider (only if linked) */
  idpSubject?: Maybe<Scalars['String']['output']>;
  /** Whether the current user has linked their account to this org's SSO */
  isLinked: Scalars['Boolean']['output'];
  /** When the identity was linked (only if linked) */
  linkedAt?: Maybe<Scalars['Datetime']['output']>;
};

/** To page through response. */
export type PagingInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Databricks Partner Information */
export type PartnerConnectionDetail = {
  __typename?: 'PartnerConnectionDetail';
  cluster_id?: Maybe<Scalars['String']['output']>;
  connection_id?: Maybe<Scalars['String']['output']>;
  databricks_connection_name?: Maybe<Scalars['String']['output']>;
  databricks_personal_token_id?: Maybe<Scalars['String']['output']>;
  databricks_workspace_id?: Maybe<Scalars['String']['output']>;
  http_path?: Maybe<Scalars['String']['output']>;
  is_configured_resources?: Maybe<Scalars['Boolean']['output']>;
  jdbc_url?: Maybe<Scalars['String']['output']>;
  stardog_server_connection?: Maybe<Connection>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_first_name?: Maybe<Scalars['String']['output']>;
  workspace_url?: Maybe<Scalars['String']['output']>;
};

export type PingProvider = {
  __typename?: 'PingProvider';
  customerName: Scalars['String']['output'];
};

/** Latest platform SDU sync tracking status for a connection */
export type PlatformTrackingStatus = {
  __typename?: 'PlatformTrackingStatus';
  date?: Maybe<Scalars['String']['output']>;
  syncStatus: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
};

export type ProfileInput = {
  best_describes_company: Scalars['String']['input'];
  best_describes_role: Scalars['String']['input'];
  company: Scalars['String']['input'];
  familiarity_with_kgs: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  industry: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  use_case: Scalars['String']['input'];
};

export type ProvisionedOrder = {
  __typename?: 'ProvisionedOrder';
  payment_system?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trial_days_remaining?: Maybe<Scalars['Int']['output']>;
  trial_days_total?: Maybe<Scalars['Int']['output']>;
};

export type PurchaseSession = {
  __typename?: 'PurchaseSession';
  isExpired?: Maybe<Scalars['Boolean']['output']>;
  isWaitingForPayment?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Root Query Type */
export type Query = {
  __typename?: 'Query';
  apiTokenCount?: Maybe<ItemCount>;
  /** Can the authenticated user edit another user's (or their own) Voicebox credit. */
  canEditVoiceboxCredit?: Maybe<Scalars['Boolean']['output']>;
  checkCloudQueue?: Maybe<QueueCounts>;
  customerSsoSettings?: Maybe<CustomerSsoSettings>;
  generateToken?: Maybe<OAuthToken>;
  getCloudReport?: Maybe<CloudReportData>;
  getConnectionById?: Maybe<Connection>;
  getConnectionByIndex?: Maybe<Connection>;
  /** Retrieve a single Designer project. */
  getDesignerProject: DesignerProject;
  /** List both incoming and outgoing Designer project invitations. */
  getDesignerProjectInvitations: Array<DesignerProjectInvitation>;
  /** List all Designer projects you own, as well as any projects shared with you. */
  getDesignerProjects: Array<DesignerProject>;
  getEndpointUsage?: Maybe<Array<Maybe<EndpointUsageRecord>>>;
  getInvitation?: Maybe<Invitation>;
  getOrganization?: Maybe<Organization>;
  getOrganizationInvitations?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  getOrganizationMembers?: Maybe<Array<Maybe<OrganizationMember>>>;
  getPlatformTrackingStatus?: Maybe<PlatformTrackingStatus>;
  getSSOConnectionRegistry?: Maybe<Array<Maybe<SsoConnectionRegistration>>>;
  getShareByShortHash?: Maybe<Share>;
  getStardogCloud?: Maybe<StardogCloud>;
  getStripePrices?: Maybe<Array<Maybe<StripePrice>>>;
  getStripeSubscriptionOrder?: Maybe<ProvisionedOrder>;
  getUser?: Maybe<User>;
  getUserArchivedClouds?: Maybe<Array<Maybe<ArchivedCloud>>>;
  getUserClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  getUserConnections?: Maybe<Array<Maybe<Connection>>>;
  getUserCurrentPartnerConnection?: Maybe<PartnerConnectionDetail>;
  getUserSearchDetails?: Maybe<UserSearchDetails>;
  /** Get a user's Voicebox Credit containing usage information. Must be a Stardog employee to fetch this information. */
  getUserVoiceboxCredit?: Maybe<VoiceboxCredit>;
  /** Retrieve a single Voicebox conversation for the authenticated user by the conversation id. */
  getVoiceboxConversation?: Maybe<VoiceboxConversation>;
  /** Get the authenticated user's Voicebox Credit containing usage information. */
  getVoiceboxCredit?: Maybe<VoiceboxCredit>;
  grafanaHighLevelDashboardSettings?: Maybe<GrafanaDashboardSettings>;
  listApiTokens?: Maybe<Array<Maybe<ApiToken>>>;
  listConnections?: Maybe<Array<Maybe<Connection>>>;
  listConnectionsByEndpoint?: Maybe<Array<Maybe<Connection>>>;
  listDefaultOrganizationConnectionsAccess?: Maybe<
    Array<Maybe<ConnectionAccess>>
  >;
  listInactiveClouds?: Maybe<Array<Maybe<StardogCloud>>>;
  listOrganizationConnectionAccess?: Maybe<Array<Maybe<ConnectionAccess>>>;
  listOrganizations?: Maybe<Array<Maybe<Organization>>>;
  listStardogCloud?: Maybe<Array<Maybe<StardogCloud>>>;
  listUserConnectionAccess?: Maybe<Array<Maybe<ConnectionAccess>>>;
  listUserConnectionInvitations?: Maybe<Array<Maybe<ConnectionInvitation>>>;
  /** Retrieve Voicebox Applications owned by the authenticated user. */
  listVoiceboxApps?: Maybe<Array<Maybe<VoiceboxApp>>>;
  /**
   * Retrieve Voicebox conversations for the authenticated user, ordered by creation date, with the newest first.
   * Use PagingInput to paginate. If PagingInput is omitted, all conversations are returned.
   * Designer conversations will only be returned if include_designer is set to true.
   * Use connection_id to filter by connection_id, if no connection_id is provided, all conversations are returned.
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
export type QueryApiTokenCountArgs = {
  app_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Root Query Type */
export type QueryGenerateTokenArgs = {
  endpoint: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetCloudReportArgs = {
  filters?: InputMaybe<CloudFilters>;
};

/** Root Query Type */
export type QueryGetConnectionByIdArgs = {
  id: Scalars['String']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryGetConnectionByIndexArgs = {
  index: Scalars['Int']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryGetDesignerProjectArgs = {
  project_id: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryGetEndpointUsageArgs = {
  connectionId: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  modules?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  org_domain?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  timeGrain?: InputMaybe<TimeGrain>;
};

/** Root Query Type */
export type QueryGetInvitationArgs = {
  id: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryGetOrganizationArgs = {
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryGetOrganizationInvitationsArgs = {
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryGetOrganizationMembersArgs = {
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryGetPlatformTrackingStatusArgs = {
  connectionId: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryGetShareByShortHashArgs = {
  shortHash: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetStardogCloudArgs = {
  pk: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetStripeSubscriptionOrderArgs = {
  cloudId: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryGetUserArgs = {
  user_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetUserArchivedCloudsArgs = {
  user_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetUserCloudsArgs = {
  user_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetUserConnectionsArgs = {
  user_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetUserSearchDetailsArgs = {
  filters?: InputMaybe<UserSearchFiltersInput>;
  token: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetUserVoiceboxCreditArgs = {
  user_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryGetVoiceboxConversationArgs = {
  conversation_id: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryListApiTokensArgs = {
  app_id?: InputMaybe<Scalars['ID']['input']>;
  paging?: InputMaybe<PagingInput>;
};

/** Root Query Type */
export type QueryListConnectionsArgs = {
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryListConnectionsByEndpointArgs = {
  endpoint: Scalars['String']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryListDefaultOrganizationConnectionsAccessArgs = {
  org_domain: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryListInactiveCloudsArgs = {
  flavor?: InputMaybe<Scalars['String']['input']>;
};

/** Root Query Type */
export type QueryListOrganizationConnectionAccessArgs = {
  id: Scalars['ID']['input'];
  org_domain: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryListStardogCloudArgs = {
  inactive_days?: InputMaybe<Scalars['Int']['input']>;
};

/** Root Query Type */
export type QueryListUserConnectionAccessArgs = {
  id: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryListUserConnectionInvitationsArgs = {
  id: Scalars['ID']['input'];
};

/** Root Query Type */
export type QueryListVoiceboxConversationsArgs = {
  filterInput?: InputMaybe<VoiceboxConversationsFilterInput>;
  paging?: InputMaybe<PagingInput>;
};

/** Root Query Type */
export type QuerySearchUsersArgs = {
  filters?: InputMaybe<UserSearchFiltersInput>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};

/** Root Query Type */
export type QueryVoiceboxConversationCountArgs = {
  filterInput?: InputMaybe<VoiceboxConversationsFilterInput>;
};

/** Contains the counts of available cloud resources to sell. */
export type QueueCounts = {
  __typename?: 'QueueCounts';
  medium_count?: Maybe<Scalars['Float']['output']>;
  micro_count?: Maybe<Scalars['Float']['output']>;
  small_count?: Maybe<Scalars['Float']['output']>;
  small_vbx_count?: Maybe<Scalars['Float']['output']>;
};

/** Quota limits and usage for a given user. */
export type Quota = {
  __typename?: 'Quota';
  available?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ReauthenticateSsoConnectionInput = {
  connection_id: Scalars['String']['input'];
};

export type RemoveMySharedConnectionInput = {
  connectionId: Scalars['ID']['input'];
};

export type RemovePartnerConnectionInput = {
  connection_id: Scalars['String']['input'];
};

export type RenameMySharedConnectionInput = {
  connectionId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type RevokeMemberConnectionRolesInput = {
  connectionId: Scalars['ID']['input'];
  emails: Array<Scalars['String']['input']>;
  org_domain: Scalars['String']['input'];
};

export type RevokePersonalConnectionAccessInput = {
  connectionId: Scalars['ID']['input'];
  emails: Array<Scalars['String']['input']>;
};

export type SsoConnectionRedirectResponse = {
  __typename?: 'SSOConnectionRedirectResponse';
  redirect_url: Scalars['String']['output'];
};

export type SsoConnectionRegistration = {
  __typename?: 'SSOConnectionRegistration';
  display_provider_name: Scalars['String']['output'];
  provider_name: Scalars['String']['output'];
  stardog_endpoint?: Maybe<Scalars['String']['output']>;
  stardog_internal_endpoint?: Maybe<Scalars['String']['output']>;
};

/** SSO provider types supported for organization SSO configuration */
export enum SsoProviderType {
  MicrosoftEntra = 'MICROSOFT_ENTRA',
  Okta = 'OKTA',
}

export type SetMemberConnectionRolesInput = {
  connectionId: Scalars['ID']['input'];
  emails: Array<Scalars['String']['input']>;
  org_domain: Scalars['String']['input'];
  stardog_roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SetOrgConnectionVisibilityInput = {
  connectionId: Scalars['ID']['input'];
  org_domain: Scalars['String']['input'];
  organization_is_enabled: Scalars['Boolean']['input'];
  stardog_roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Settings, these are settings that control the front end display */
export type Settings = {
  __typename?: 'Settings';
  auth0Auth: Scalars['Boolean']['output'];
  azureAuth: Scalars['Boolean']['output'];
  baseURL: Scalars['String']['output'];
  copyConnectionTokenButtonEnabled: Scalars['Boolean']['output'];
  dataMarketplace: Scalars['Boolean']['output'];
  designerVersion: Scalars['String']['output'];
  duoAuth: Scalars['Boolean']['output'];
  explorerVersion: Scalars['String']['output'];
  friendlyName: Scalars['String']['output'];
  googleAuth: Scalars['Boolean']['output'];
  homeFooterLinks: Scalars['Boolean']['output'];
  kerberosAuth: Scalars['Boolean']['output'];
  oktaAuth: Scalars['Boolean']['output'];
  openidAuth: Scalars['Boolean']['output'];
  pingAuth: Scalars['Boolean']['output'];
  portal: Scalars['Boolean']['output'];
  sharedUserAuth: Scalars['Boolean']['output'];
  stardogEndpoint: Scalars['String']['output'];
  studioVersion: Scalars['String']['output'];
};

/** Share URL, short urls for sharing */
export type Share = {
  __typename?: 'Share';
  endpoint?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['Datetime']['output']>;
  last_accessed?: Maybe<Scalars['Datetime']['output']>;
  lookup_count?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Scalars['String']['output']>;
  short_url?: Maybe<Scalars['String']['output']>;
  target_path?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
};

export type ShareInput = {
  endpoint: Scalars['String']['input'];
  expires: Scalars['Int']['input'];
  service: Scalars['String']['input'];
  target_path: Scalars['String']['input'];
};

/** SSO provider information for a connection */
export type SsoProviderInfo = {
  __typename?: 'SsoProviderInfo';
  /** The OAuth client ID stored on this connection */
  clientId?: Maybe<Scalars['String']['output']>;
  /** Whether the stored client_id matches a registered SSO provider */
  isValid: Scalars['Boolean']['output'];
  /** The unique identifier portion of the provider name (e.g., 'devenv' from 'devenv-azure') */
  providerName?: Maybe<Scalars['String']['output']>;
  /** The provider type (e.g., 'azure', 'okta', 'ping') */
  providerType?: Maybe<Scalars['String']['output']>;
};

/** Stardog Cloud, represents an instance of Cloud that is owned by the user */
export type StardogCloud = {
  __typename?: 'StardogCloud';
  bi_endpoint?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  days_to_cleanup?: Maybe<Scalars['Int']['output']>;
  days_to_inactive?: Maybe<Scalars['Int']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  flavor?: Maybe<CloudFlavor>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notification_date?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  payment_ref?: Maybe<Scalars['String']['output']>;
  price_ref?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

/** Stripe Customer: If the user is a paying customer */
export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  cloud_quota?: Maybe<Quota>;
  customer_id?: Maybe<Scalars['String']['output']>;
  is_cloud_quota_breached?: Maybe<Scalars['Boolean']['output']>;
};

export type StripePrice = {
  __typename?: 'StripePrice';
  amount?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  product_info?: Maybe<StripeProduct>;
  stardog_billing_type?: Maybe<Scalars['String']['output']>;
  stardog_flavor?: Maybe<Scalars['String']['output']>;
};

export type StripeProduct = {
  __typename?: 'StripeProduct';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<StripeProductMetadata>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StripeProductMetadata = {
  __typename?: 'StripeProductMetadata';
  flavor?: Maybe<Scalars['String']['output']>;
};

/** Result of triggering a platform SDU sync for a connection */
export type SyncPlatformSduUsageResult = {
  __typename?: 'SyncPlatformSduUsageResult';
  connectionId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recordsStored?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type SystemVoiceboxMessageContext = {
  __typename?: 'SystemVoiceboxMessageContext';
  actions?: Maybe<Array<Maybe<VoicboxSystemMessageAction>>>;
  followup_examples?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  message_type?: Maybe<Scalars['String']['output']>;
  pending?: Maybe<Scalars['Boolean']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum TimeGrain {
  Day = 'day',
  Month = 'month',
  Quarter = 'quarter',
  Total = 'total',
}

export type TrackEventInput = {
  client_type?: InputMaybe<Scalars['String']['input']>;
  event: Scalars['String']['input'];
  properties?: InputMaybe<Scalars['String']['input']>;
};

/** Input for updating a Microsoft Entra SSO configuration */
export type UpdateOrganizationMicrosoftEntraSsoConfigInput = {
  /** OAuth client ID */
  clientId?: InputMaybe<Scalars['String']['input']>;
  /** OAuth client secret (only updated if provided) */
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  /** OIDC discovery endpoint URL */
  discoveryUrl?: InputMaybe<Scalars['String']['input']>;
  /** Whether to end the user's IDP session on logout (RP-Initiated Logout) */
  idpLogoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether SSO login is enabled */
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for updating an Okta SSO configuration */
export type UpdateOrganizationOktaSsoConfigInput = {
  /** OAuth client ID */
  clientId?: InputMaybe<Scalars['String']['input']>;
  /** OAuth client secret (only updated if provided) */
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  /** OIDC discovery endpoint URL */
  discoveryUrl?: InputMaybe<Scalars['String']['input']>;
  /** Whether to end the user's IDP session on logout (RP-Initiated Logout) */
  idpLogoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether SSO login is enabled */
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Authorization server audience */
  oktaAuthorizationServerAudience?: InputMaybe<Scalars['String']['input']>;
  /** Client ID for the backend API Services app (for OBO token exchange) */
  oktaBackendClientId?: InputMaybe<Scalars['String']['input']>;
  /** Client secret for the backend API Services app (only updated if provided) */
  oktaBackendClientSecret?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerConnectionInput = {
  connection_id: Scalars['String']['input'];
  databricks_connection_name: Scalars['String']['input'];
  stardog_connection_id: Scalars['String']['input'];
};

export type UpdatePersonalConnectionAccessInput = {
  connectionId: Scalars['ID']['input'];
  emails: Array<Scalars['String']['input']>;
  stardog_roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateVoiceboxAppInput = {
  database?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  named_graphs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reasoning?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The user model, this represents a user from Auth0. Only fields defined here
 * are exposed in the possible GraphQL responses.
 */
export type User = {
  __typename?: 'User';
  best_describes_company?: Maybe<Scalars['String']['output']>;
  best_describes_role?: Maybe<Scalars['String']['output']>;
  can_provision_cloud?: Maybe<Scalars['Boolean']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  date_joined?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  familiarity_with_kgs?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  has_stardog_free?: Maybe<Scalars['Boolean']['output']>;
  has_updated_profile?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  is_authenticated?: Maybe<Scalars['Boolean']['output']>;
  is_blocked_email?: Maybe<Scalars['Boolean']['output']>;
  is_collaboration_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_databricks_user?: Maybe<Scalars['Boolean']['output']>;
  is_designer_storage_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_ephemeral?: Maybe<Scalars['Boolean']['output']>;
  is_partner_user?: Maybe<Scalars['Boolean']['output']>;
  is_staff?: Maybe<Scalars['Boolean']['output']>;
  is_static_voicebox?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated is_studio_voicebox_enabled is deprecated. Use is_voicebox_enabled instead. */
  is_studio_voicebox_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_superuser?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['Boolean']['output']>;
  is_voicebox_api_access_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_voicebox_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_voicebox_powered_suggestions_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_voicebox_think_mode_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated is_voicebox_three_enabled is deprecated. Use is_voicebox_think_mode_enabled instead. */
  is_voicebox_three_enabled?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  needs_stardog_free?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  stripe_customer?: Maybe<StripeCustomer>;
  sub?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  use_case?: Maybe<Scalars['String']['output']>;
  userflow_signature?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserFeaturesInput = {
  is_designer_storage_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_static_voicebox?: InputMaybe<Scalars['Boolean']['input']>;
  is_voicebox_api_access_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_voicebox_enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserSearchDetails = {
  __typename?: 'UserSearchDetails';
  total?: Maybe<Scalars['Int']['output']>;
};

export type UserSearchFiltersInput = {
  is_designer_storage_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_voicebox_api_access_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_voicebox_enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoiceboxMessageContext = {
  __typename?: 'UserVoiceboxMessageContext';
  app?: Maybe<Scalars['String']['output']>;
  connection_id?: Maybe<Scalars['String']['output']>;
  database?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  model?: Maybe<Scalars['String']['output']>;
  named_graphs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  reasoning?: Maybe<Scalars['Boolean']['output']>;
  think_mode?: Maybe<Scalars['String']['output']>;
};

export type VoicboxSystemMessageAction = {
  __typename?: 'VoicboxSystemMessageAction';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type VoiceboxApp = {
  __typename?: 'VoiceboxApp';
  connection_id: Scalars['String']['output'];
  database?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  named_graphs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  reasoning?: Maybe<Scalars['Boolean']['output']>;
};

/** A user's conversation with Voicebox */
export type VoiceboxConversation = {
  __typename?: 'VoiceboxConversation';
  created?: Maybe<Scalars['Datetime']['output']>;
  /** The first message in the conversation that was sent by the user. */
  first_user_message?: Maybe<VoiceboxMessage>;
  id: Scalars['ID']['output'];
  /** The last message in the conversation that was sent by the user. */
  last_user_message?: Maybe<VoiceboxMessage>;
  /** Message history ordered oldest to newest. */
  message_history?: Maybe<Array<Maybe<VoiceboxMessage>>>;
  name?: Maybe<Scalars['String']['output']>;
  /** user message count */
  number_user_messages?: Maybe<Scalars['Int']['output']>;
  updated?: Maybe<Scalars['Datetime']['output']>;
};

export type VoiceboxConversationsFilterInput = {
  connection_id?: InputMaybe<Scalars['String']['input']>;
  include_designer?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user's Voicebox Credit */
export type VoiceboxCredit = {
  __typename?: 'VoiceboxCredit';
  limit: Scalars['Int']['output'];
  usage: Scalars['Int']['output'];
};

/** A Message within a Voicebox conversation. */
export type VoiceboxMessage = {
  __typename?: 'VoiceboxMessage';
  comment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['ID']['output'];
  score?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  system_message_context?: Maybe<SystemVoiceboxMessageContext>;
  user_message_context?: Maybe<UserVoiceboxMessageContext>;
};

export type AddShareMutationVariables = Exact<{
  input: ShareInput;
}>;

export type AddShareMutation = {
  __typename?: 'Mutation';
  addShare?: { __typename?: 'Share'; short_url?: string | null } | null;
};

export type ArchiveDesignerProjectMutationVariables = Exact<{
  project_id: Scalars['ID']['input'];
}>;

export type ArchiveDesignerProjectMutation = {
  __typename?: 'Mutation';
  archiveDesignerProject: string;
};

export type CreateDesignerProjectMutationVariables = Exact<{
  name: Scalars['String']['input'];
  content: Scalars['Base64Bytes']['input'];
  connection_id?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateDesignerProjectMutation = {
  __typename?: 'Mutation';
  createDesignerProject: string;
};

export type GetConnectionByIndexQueryVariables = Exact<{
  index: Scalars['Int']['input'];
  org_domain?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetConnectionByIndexQuery = {
  __typename?: 'Query';
  connection?: {
    __typename?: 'Connection';
    token?: string | null;
    username?: string | null;
    endpoint: string;
    dashboard?: string | null;
    id: string;
    name: string;
    index: number;
  } | null;
};

export type GetDesignerProjectQueryVariables = Exact<{
  project_id: Scalars['ID']['input'];
}>;

export type GetDesignerProjectQuery = {
  __typename?: 'Query';
  getDesignerProject: {
    __typename?: 'DesignerProject';
    id: string;
    name: string;
    content: any;
    connection_id?: string | null;
    created_at: string;
    updated_at: string;
    owner: { __typename?: 'User'; id?: string | null; username: string };
    roles: Array<{
      __typename?: 'DesignerProjectRole';
      role: DesignerProjectRoleChoices;
      user: { __typename?: 'User'; id?: string | null; username: string };
    }>;
  };
};

export type GetDesignerProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDesignerProjectsQuery = {
  __typename?: 'Query';
  getDesignerProjects: Array<{
    __typename?: 'DesignerProject';
    id: string;
    name: string;
    connection_id?: string | null;
    created_at: string;
    updated_at: string;
    owner: { __typename?: 'User'; id?: string | null; username: string };
    roles: Array<{
      __typename?: 'DesignerProjectRole';
      role: DesignerProjectRoleChoices;
      user: { __typename?: 'User'; id?: string | null; username: string };
    }>;
  }>;
};

export type GetVoiceboxConversationQueryVariables = Exact<{
  conversation_id: Scalars['String']['input'];
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
      score?: number | null;
      user_message_context?: {
        __typename?: 'UserVoiceboxMessageContext';
        app?: string | null;
        connection_id?: string | null;
        database?: string | null;
        named_graphs?: Array<string | null> | null;
        model?: string | null;
        reasoning?: boolean | null;
        think_mode?: string | null;
      } | null;
      system_message_context?: {
        __typename?: 'SystemVoiceboxMessageContext';
        followup_examples?: Array<string | null> | null;
        message_type?: string | null;
        pending?: boolean | null;
        success?: boolean | null;
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

export type ListConnectionsQueryVariables = Exact<{
  org_domain?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListConnectionsQuery = {
  __typename?: 'Query';
  listConnections?: Array<{
    __typename?: 'Connection';
    dashboard?: string | null;
    endpoint: string;
    id: string;
    index: number;
    name: string;
    token?: string | null;
    username?: string | null;
  } | null> | null;
};

export type ListOrganizationsQueryVariables = Exact<{ [key: string]: never }>;

export type ListOrganizationsQuery = {
  __typename?: 'Query';
  listOrganizations?: Array<{
    __typename?: 'Organization';
    id: string;
    name: string;
    domain?: string | null;
    role?: string | null;
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
      user_message_context?: {
        __typename?: 'UserVoiceboxMessageContext';
        connection_id?: string | null;
        database?: string | null;
        named_graphs?: Array<string | null> | null;
        model?: string | null;
        reasoning?: boolean | null;
        think_mode?: string | null;
      } | null;
    } | null;
  } | null> | null;
  voiceboxConversationCount?: {
    __typename?: 'ItemCount';
    count?: number | null;
  } | null;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: 'Query';
  profile?: {
    __typename?: 'User';
    first_name?: string | null;
    last_name?: string | null;
    username: string;
    company?: string | null;
    date_joined?: string | null;
    email?: string | null;
    id?: string | null;
    is_databricks_user?: boolean | null;
    title?: string | null;
    use_case?: string | null;
    is_authenticated?: boolean | null;
    is_ephemeral?: boolean | null;
    userflow_signature?: string | null;
    is_staff?: boolean | null;
    is_static_voicebox?: boolean | null;
    is_voicebox_enabled?: boolean | null;
    is_collaboration_enabled?: boolean | null;
    is_designer_storage_enabled?: boolean | null;
    is_voicebox_powered_suggestions_enabled?: boolean | null;
    is_voicebox_think_mode_enabled?: boolean | null;
  } | null;
};

export type RenameDesignerProjectMutationVariables = Exact<{
  project_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameDesignerProjectMutation = {
  __typename?: 'Mutation';
  renameDesignerProject: string;
};

export type RestoreDesignerProjectMutationVariables = Exact<{
  project_id: Scalars['ID']['input'];
}>;

export type RestoreDesignerProjectMutation = {
  __typename?: 'Mutation';
  restoreDesignerProject: string;
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

export type UpdateDesignerProjectMutationVariables = Exact<{
  project_id: Scalars['ID']['input'];
  content: Scalars['Base64Bytes']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  connection_id?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateDesignerProjectMutation = {
  __typename?: 'Mutation';
  updateDesignerProject: string;
};

export const AddShareDocument = `
    mutation addShare($input: ShareInput!) {
  addShare(input: $input) {
    short_url
  }
}
    `;
export const ArchiveDesignerProjectDocument = `
    mutation archiveDesignerProject($project_id: ID!) {
  archiveDesignerProject(project_id: $project_id)
}
    `;
export const CreateDesignerProjectDocument = `
    mutation createDesignerProject($name: String!, $content: Base64Bytes!, $connection_id: String) {
  createDesignerProject(
    name: $name
    content: $content
    connection_id: $connection_id
  )
}
    `;
export const GetConnectionByIndexDocument = `
    query getConnectionByIndex($index: Int!, $org_domain: String) {
  connection: getConnectionByIndex(index: $index, org_domain: $org_domain) {
    token
    username
    endpoint
    dashboard
    id
    name
    index
  }
}
    `;
export const GetDesignerProjectDocument = `
    query getDesignerProject($project_id: ID!) {
  getDesignerProject(project_id: $project_id) {
    id
    name
    content
    connection_id
    created_at
    updated_at
    owner {
      id
      username
    }
    roles {
      role
      user {
        id
        username
      }
    }
  }
}
    `;
export const GetDesignerProjectsDocument = `
    query getDesignerProjects {
  getDesignerProjects {
    id
    name
    connection_id
    created_at
    updated_at
    owner {
      id
      username
    }
    roles {
      role
      user {
        id
        username
      }
    }
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
      score
      user_message_context {
        app
        connection_id
        database
        named_graphs
        model
        reasoning
        think_mode
      }
      system_message_context {
        followup_examples
        actions {
          type
          label
          value
        }
        message_type
        pending
        success
      }
    }
  }
}
    `;
export const ListConnectionsDocument = `
    query listConnections($org_domain: String) {
  listConnections(org_domain: $org_domain) {
    dashboard
    endpoint
    id
    index
    name
    token
    username
  }
}
    `;
export const ListOrganizationsDocument = `
    query listOrganizations {
  listOrganizations {
    id
    name
    domain
    role
  }
}
    `;
export const ListVoiceboxConversationsDocument = `
    query listVoiceboxConversations($paging: PagingInput) {
  listVoiceboxConversations(paging: $paging) {
    id
    last_user_message {
      id
      user_message_context {
        connection_id
        database
        named_graphs
        model
        reasoning
        think_mode
      }
    }
  }
  voiceboxConversationCount {
    count
  }
}
    `;
export const ProfileDocument = `
    query profile {
  profile {
    first_name
    last_name
    username
    company
    date_joined
    email
    id
    is_databricks_user
    title
    use_case
    is_authenticated
    is_ephemeral
    userflow_signature
    is_staff
    is_static_voicebox
    is_voicebox_enabled
    is_collaboration_enabled
    is_designer_storage_enabled
    is_voicebox_powered_suggestions_enabled
    is_voicebox_think_mode_enabled
  }
}
    `;
export const RenameDesignerProjectDocument = `
    mutation renameDesignerProject($project_id: ID!, $name: String!) {
  renameDesignerProject(project_id: $project_id, name: $name)
}
    `;
export const RestoreDesignerProjectDocument = `
    mutation restoreDesignerProject($project_id: ID!) {
  restoreDesignerProject(project_id: $project_id)
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
export const UpdateDesignerProjectDocument = `
    mutation updateDesignerProject($project_id: ID!, $content: Base64Bytes!, $name: String, $connection_id: String) {
  updateDesignerProject(
    project_id: $project_id
    content: $content
    name: $name
    connection_id: $connection_id
  )
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
    archiveDesignerProject(
      variables: ArchiveDesignerProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ArchiveDesignerProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ArchiveDesignerProjectMutation>(
            ArchiveDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'archiveDesignerProject',
        'mutation'
      );
    },
    createDesignerProject(
      variables: CreateDesignerProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateDesignerProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateDesignerProjectMutation>(
            CreateDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createDesignerProject',
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
    getDesignerProject(
      variables: GetDesignerProjectQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetDesignerProjectQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDesignerProjectQuery>(
            GetDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getDesignerProject',
        'query'
      );
    },
    getDesignerProjects(
      variables?: GetDesignerProjectsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetDesignerProjectsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDesignerProjectsQuery>(
            GetDesignerProjectsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getDesignerProjects',
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
    listOrganizations(
      variables?: ListOrganizationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ListOrganizationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ListOrganizationsQuery>(
            ListOrganizationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'listOrganizations',
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
    renameDesignerProject(
      variables: RenameDesignerProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RenameDesignerProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RenameDesignerProjectMutation>(
            RenameDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'renameDesignerProject',
        'mutation'
      );
    },
    restoreDesignerProject(
      variables: RestoreDesignerProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RestoreDesignerProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RestoreDesignerProjectMutation>(
            RestoreDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'restoreDesignerProject',
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
    updateDesignerProject(
      variables: UpdateDesignerProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateDesignerProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateDesignerProjectMutation>(
            UpdateDesignerProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateDesignerProject',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
