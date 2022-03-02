export type ConnectionInfo = {
  connectionIndex: number;

  /** an optional string like "designer" | "explorer" | "studio" */
  product?: string;
};

/** returns info on the current Portal/Cloud connection */
export const getCurrentConnectionInfo = (
  window: Window
): ConnectionInfo | null => {
  const urlPathRegex =
    /^\/u\/(?<connectionIndex>[0-9]+)\/(?<productWithSlash>.+?\/)?/;
  const currentMatch = window.location.pathname.match(urlPathRegex);
  if (currentMatch?.groups) {
    const connectionIndex = Number.parseInt(
      currentMatch.groups.connectionIndex
    );

    const productWithSlash = currentMatch.groups.productWithSlash as
      | string
      | undefined;
    const product = productWithSlash?.slice(0, productWithSlash.length - 1);

    return {
      connectionIndex,
      product,
    };
  }

  return null;
};
