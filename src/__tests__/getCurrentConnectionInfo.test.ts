import { getCurrentConnectionInfo } from '../getCurrentConnectionInfo';

const getCurrentConnectionInfoForPathname = (pathname: string) => {
  const location = {
    hash: '#/',
    host: 'localhost:8080',
    hostname: 'localhost',
    href: `http://localhost:8080${pathname}#/`,
    origin: 'http://localhost:8080',
    pathname: `${pathname}`,
    port: '8080',
    protocol: 'http:',
  } as Window['location'];

  return getCurrentConnectionInfo({ location } as any as Window);
};

describe('getCurrentConnectionInfo', () => {
  it('returns the correct connectionIndex and product for a valid url', () => {
    const info = getCurrentConnectionInfoForPathname('/u/9/explorer/');
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(9);
    expect(info?.product).toBe('explorer');
    expect(info?.productPath).toBe(undefined);
  });

  it('returns the demo connectionIndex for a valid demo url', () => {
    const info = getCurrentConnectionInfoForPathname('/u/demo/explorer/');
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(12345);
    expect(info?.product).toBe('explorer');
    expect(info?.productPath).toBe(undefined);
  });

  it('returns the correct productPath for a valid url', () => {
    const info = getCurrentConnectionInfoForPathname(
      '/u/9/explorer/unstable/index.html'
    );
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(9);
    expect(info?.product).toBe('explorer');
    expect(info?.productPath).toBe('unstable/index.html');
  });

  it('returns correct info for missing-product url', () => {
    const info = getCurrentConnectionInfoForPathname('/u/7/');
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(7);
    expect(info?.product).toBe(undefined);
  });

  it('returns correct info for missing-product url without slash at the end', () => {
    const info = getCurrentConnectionInfoForPathname('/u/7');
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(7);
    expect(info?.product).toBe(undefined);
  });

  it('returns null for invalid paths', () => {
    [
      '/invalid/u/0/product',
      '/invalid/u/0/',
      '/u/invalid/product',
      '/u/invalid',
      '/u',
      '/',
    ].forEach((pathname) => {
      expect(getCurrentConnectionInfoForPathname(pathname)).toBeNull();
    });
  });
});
