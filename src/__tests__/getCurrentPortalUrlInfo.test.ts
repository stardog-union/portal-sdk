import { getCurrentConnectionInfo } from '../getCurrentConnectionInfo';

const windowFixture = {
  location: {
    hash: '#/',
    host: 'localhost:8080',
    hostname: 'localhost',
    href: 'http://localhost:8080/u/9/explorer/#/',
    origin: 'http://localhost:8080',
    pathname: '/u/9/explorer/',
    port: '8080',
    protocol: 'http:',
  },
} as any as Window;

describe('getCurrentConnectionInfo', () => {
  it('returns connectionIndex and product of current valid url', () => {
    const window = { ...windowFixture };

    const info = getCurrentConnectionInfo(window);
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(9);
    expect(info?.product).toBe('explorer');
  });

  it('returns correct info for missing-product url', () => {
    const window = { ...windowFixture };

    expect(getCurrentConnectionInfo(window)).toBeTruthy();

    window.location.href = 'http://localhost:8080/u/7/';
    window.location.pathname = '/u/7/';
    const info = getCurrentConnectionInfo(window);
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(7);
    expect(info?.product).toBe(undefined);
  });

  it('returns null for invalid paths', () => {
    const window = { ...windowFixture };

    expect(getCurrentConnectionInfo(window)).toBeTruthy();

    window.location.href = 'http://localhost:8080/invalid/u/0/';
    window.location.pathname = '/invalid/u/0/';
    expect(getCurrentConnectionInfo(window)).toBe(null);
  });
});
