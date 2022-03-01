import { getCurrentConnectionInfo } from '../getCurrentConnectionInfo';

const windowFixture = {
  location: {
    hash: '#/',
    host: 'localhost:8080',
    hostname: 'localhost',
    href: 'http://localhost:8080/u/0/explorer/#/',
    origin: 'http://localhost:8080',
    pathname: '/u/0/explorer/',
    port: '8080',
    protocol: 'http:',
  },
} as any as Window;

describe('getCurrentConnectionInfo', () => {
  it('returns connectionIndex and product of current valid url', () => {
    const window = { ...windowFixture };

    const info = getCurrentConnectionInfo(window);
    expect(info).toBeTruthy();
    expect(info?.connectionIndex).toBe(0);
    expect(info?.product).toBe('explorer');
  });

  it('returns null for invalid urls', () => {
    const window = { ...windowFixture };

    expect(getCurrentConnectionInfo(window)).toBeTruthy();

    window.location.href = 'http://localhost:8080/u/0/';
    window.location.pathname = '/u/0/';
    expect(getCurrentConnectionInfo(window)).toBe(null);
  });
});
