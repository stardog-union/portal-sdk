export type ConnectionInfo = {
  connectionIndex: number;

  /** an optional string like "designer" | "explorer" | "studio" */
  product?: string;
};

/** returns info on the current Portal/Cloud connection */
export const getCurrentConnectionInfo = (
  window: Window
): ConnectionInfo | null => {
  const urlPathRegex = /^\/u\/(?<connectionIndex>[0-9]+)\/(?<product>[^\/]+)?/;
  const currentMatch = window.location.pathname.match(urlPathRegex);
  if (currentMatch?.groups) {
    return {
      connectionIndex: Number.parseInt(currentMatch.groups.connectionIndex),
      product: currentMatch.groups.product as string | undefined,
    };
  }

  return null;
};
