import getRouterBasename from '@/utils/getRouterBasename'

describe('getRouterBasename', () => {
  it('测试本地开发', () => {
    expect(
      getRouterBasename({
        hostname: 'localhost',
        entryKey: 'xihe-mobile',
        isDevelopment: true,
        isProdEnv: false,
      }),
    ).toBe('/')
  })

  it('测试alpha环境', () => {
    expect(
      getRouterBasename({
        hostname: 'www.zaihuiba.com',
        entryKey: 'xihe-mobile',
        isDevelopment: false,
        isProdEnv: false,
      }),
    ).toBe('/lx/xihe-mobile')

    expect(
      getRouterBasename({
        hostname: 'lx.zaihuiba.com',
        entryKey: 'xihe-mobile',
        isDevelopment: false,
        isProdEnv: false,
      }),
    ).toBe('/xihe-mobile')
  })

  it('测试生产环境', () => {
    expect(
      getRouterBasename({
        hostname: 'm.spoonx.com',
        entryKey: 'xihe-mobile',
        isDevelopment: false,
        isProdEnv: true,
      }),
    ).toBe('/')
  })
})
