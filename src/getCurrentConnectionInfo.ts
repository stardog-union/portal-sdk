export type ConnectionInfo = {
  connectionIndex: number;

  /** a string like "designer" | "explorer" | "studio" */
  product: string;
};

/** returns info on the current Portal/Cloud connection */
export const getCurrentConnectionInfo = (
  window: Window
): ConnectionInfo | null => {
  const urlPathRegex = /\/u\/(?<index>[0-9]+)\/(?<product>.+?)\//;
  const currentMatch = window.location.pathname.match(urlPathRegex);
  if (
    currentMatch &&
    currentMatch.groups &&
    currentMatch.groups.index != null &&
    currentMatch.groups.product != null
  ) {
    return {
      connectionIndex: Number.parseInt(currentMatch.groups.index),
      product: currentMatch.groups.product,
    };
  }

  return null;
};
