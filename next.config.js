const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sideeffect.site",
        port: "8081",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
