export const getCookies = (): string => {
  return document.cookie;
};

export const getCookieValue = (cookieName: string): string => {
  const cookies = getCookies();
  const match = cookies.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
  return match ? (match.pop() as string) : '';
};
