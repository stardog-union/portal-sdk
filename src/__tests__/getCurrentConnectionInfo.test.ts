import { DEMO_CONNECTION_INDEX } from '../cookies';
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
  describe.each([
    ['personal org', '/u', undefined],
    ['public org', '/o/stardog', 'stardog'],
  ])('for %s', (_, prefix, orgDomain) => {
    it('returns the correct organizationDomain, connectionIndex and product for a valid url', () => {
      const info = getCurrentConnectionInfoForPathname(`${prefix}/9/explorer/`);
      expect(info).toBeTruthy();
      expect(info?.connectionIndex).toBe(9);
      expect(info?.organizationDomain).toBe(orgDomain);
      expect(info?.product).toBe('explorer');
      expect(info?.productPath).toBe(undefined);
    });

    it('returns the demo connectionIndex for a valid personal demo url', () => {
      const info = getCurrentConnectionInfoForPathname(
        `${prefix}/demo/explorer/`
      );
      expect(info).toBeTruthy();
      expect(info?.connectionIndex).toBe(DEMO_CONNECTION_INDEX);
      expect(info?.organizationDomain).toBe(orgDomain);
      expect(info?.product).toBe('explorer');
      expect(info?.productPath).toBe(undefined);
    });

    it('returns the correct productPath for a valid  url', () => {
      const info = getCurrentConnectionInfoForPathname(
        `${prefix}/9/explorer/unstable/index.html`
      );
      expect(info).toBeTruthy();
      expect(info?.connectionIndex).toBe(9);
      expect(info?.organizationDomain).toBe(orgDomain);
      expect(info?.product).toBe('explorer');
      expect(info?.productPath).toBe('unstable/index.html');
    });

    it('returns correct info for missing-product  url', () => {
      const info = getCurrentConnectionInfoForPathname(`${prefix}/7/`);
      expect(info).toBeTruthy();
      expect(info?.connectionIndex).toBe(7);
      expect(info?.organizationDomain).toBe(orgDomain);
      expect(info?.product).toBe(undefined);
    });

    it('returns correct info for missing-product  url without slash at the end', () => {
      const info = getCurrentConnectionInfoForPathname(`${prefix}/7`);
      expect(info).toBeTruthy();
      expect(info?.connectionIndex).toBe(7);
      expect(info?.organizationDomain).toBe(orgDomain);
      expect(info?.product).toBe(undefined);
    });
  });

  it('returns null for invalid paths', () => {
    [
      '/invalid/u/0/product',
      '/invalid/u/0/',
      // invalid connection
      '/o/stardog/invalid/product',
      '/o/stardog/invalid/',
      '/o/stardog/invalid',
      '/o/stardog/',
      '/o/stardog',
      // invalid org
      '/o/123/demo/product',
      '/o/123/demo/',
      '/o/123/demo',
      '/o/123/',
      '/o/123',
      // invalid connection
      '/u/invalid/product',
      '/u/invalid/',
      '/u/invalid',
      // incomplete path
      '/o/',
      '/o',
      '/u/',
      '/u',
      '/',
    ].forEach((pathname) => {
      expect(getCurrentConnectionInfoForPathname(pathname)).toBeNull();
    });
  });
});
