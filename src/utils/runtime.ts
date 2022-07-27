/* eslint-disable no-restricted-globals */
export const root = typeof self === 'object' && self.self === self && self
const TOP_REG = /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i
const PRODUCTION_FLAG = 'production'

export const PROD_ENV_DOMAINS = ['spoonx.com', 'kezaihui.com']

export const TEST_ENV_DOMAINS = ['zaihuiba.com']

/**
 * 获取domain
 *
 * @param url 只支持origin或者hostname
 * @returns domain
 * @example
 * ```js
 *  getDomain('www.kezaihui.com')
 * ```
 */
export function getDomain(url: string): string | null {
  const matches = url.match(TOP_REG)
  return matches ? matches[0] : null
}

export const isProduction = process.env.NODE_ENV === PRODUCTION_FLAG

let idomain = 'zaihuiba.com'

if (isProduction && root) {
  idomain = getDomain(root.location.hostname) as string
}

export const domain = idomain
export const isDevelopment = !isProduction
export const isAlphaEnv = TEST_ENV_DOMAINS.includes(domain)
export const isProdEnv = PROD_ENV_DOMAINS.includes(domain)

const runtime = {
  root,
  domain,
  // 开发模式
  isProduction,
  isDevelopment,
  // 环境
  isAlphaEnv,
  isProdEnv,
  getDomain,
}

export default runtime
