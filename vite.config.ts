import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const getBase = () => {
  if (process.env.NODE_ENV !== 'production') {
    return '/'
  }

  if (!process.env.SPARTAN_APP_CDN_DIR) {
    return '/'
  }

  return process.env.SPARTAN_APP_CDN_DIR.endsWith('/')
    ? process.env.SPARTAN_APP_CDN_DIR
    : `${process.env.SPARTAN_APP_CDN_DIR}/`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBase(),
  resolve: {
    alias: [
      {
        find: /^~antd/,
        replacement: 'antd',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
