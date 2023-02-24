/**
 * Information parsed out of the current url.
 *
 * `/u/<connectionIndex>/[product]/[productPath...]`
 */
export type ConnectionInfo = {
  connectionIndex: number;

  /** an optional string like "designer" | "explorer" | "studio" */
  product?: string;

  /** an optional string of the path to the right of `product`
   * (not including the first slash)
   * such as "unstable/index.html" | "snapshot/index.html" */
  productPath?: string;
};

/** returns info on the current Portal/Cloud connection */
export const getCurrentConnectionInfo = (
  window: Window
): ConnectionInfo | null => {
  const connectionIndexMatch = window.location.pathname.match(
    /^\/u\/([0-9]+|demo)(?:\/(.*))?$/
  );
  if (!connectionIndexMatch) {
    return null;
  }

  // 12345 is the connection index for the demo connection
  const connectionIndex = Number.parseInt(connectionIndexMatch[1].replace('demo', '12345'));
  const connectionIndexExtra = connectionIndexMatch[2];

  const productMatch = connectionIndexExtra?.match(/^([^\/]+)(?:\/(.*))?$/);
  const product = productMatch?.[1] || undefined;
  const productPath = productMatch?.[2] || undefined;

  return {
    connectionIndex,
    product,
    productPath,
  };
};
