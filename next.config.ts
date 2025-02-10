import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config: WebpackConfig) => {
    if (!config.module) config.module = { rules: [] }
    if (!config.module.rules) config.module.rules = []

    config.module.rules.push({
      test: /\.(mov|mp4)$/i,
      type: 'asset/resource'
    })
    return config
  }
}

export default nextConfig
