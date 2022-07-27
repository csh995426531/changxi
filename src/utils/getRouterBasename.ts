const getRouterBasename = ({
  hostname,
  entryKey,
  isDevelopment,
  isProdEnv,
}: {
  hostname: string
  entryKey: string
  isDevelopment: boolean
  isProdEnv: boolean
}) => {
  const isLxBase = hostname.includes('lx.')
  if (isLxBase) {
    return `/${entryKey}`
  }

  if (isProdEnv) {
    return '/'
  }

  if (isDevelopment) {
    return '/'
  }

  return `/lx/${entryKey}`
}

export default getRouterBasename
