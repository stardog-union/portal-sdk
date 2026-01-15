import { DEMO_CONNECTION_INDEX } from './cookies';

/**
 * Information parsed out of the current url.
 *
 * `/o/<organizationDomain>/<connectionIndex>/[product]/[productPath...]`
 * `/u/<connectionIndex>/[product]/[productPath...]`
 */
export type ConnectionInfo = {
  connectionIndex: number;
  organizationDomain?: string;

  /** an optional string like "designer" | "explorer" | "studio" */
  product?: string;

  /** an optional string of the path to the right of `product`
   * (not including the first slash)
   * such as "unstable/index.html" | "snapshot/index.html" */
  productPath?: string;
};

// ORGANIZATION_SEARCH = re.compile(r"/o/([^/]+)/([0-9]+)/.*")
// CONNECTION_SEARCH = re.compile(r"/u/([0-9]+)/.*")

/** returns info on the current Portal/Cloud connection */
export const getCurrentConnectionInfo = (
  window: Window
): ConnectionInfo | null => {
  const publicOrgMatch = window.location.pathname.match(
    /^\/o\/([a-z0-9-]+)\/([0-9]+|demo)(?:\/(.*))?$/
  );
  const personalOrgMatch = window.location.pathname.match(
    /^\/u\/([0-9]+|demo)(?:\/(.*))?$/
  );

  const connectionIndexMatch = publicOrgMatch?.[2] || personalOrgMatch?.[1];
  if (!connectionIndexMatch) {
    return null;
  }

  const connectionIndex = Number.parseInt(
    connectionIndexMatch.replace('demo', DEMO_CONNECTION_INDEX.toString())
  );

  const organizationDomain = publicOrgMatch?.[1] || undefined;

  const extraMatch = publicOrgMatch?.[3] || personalOrgMatch?.[2];
  const productMatch = extraMatch?.match(/^([^\/]+)(?:\/(.*))?$/);
  const product = productMatch?.[1] || undefined;
  const productPath = productMatch?.[2] || undefined;

  return {
    connectionIndex,
    organizationDomain,
    product,
    productPath,
  };
};
