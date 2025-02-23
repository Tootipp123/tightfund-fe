// @ts-check

/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next",
            outputPath: "static/videos/", // Output directory for the videos
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["*", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname:
          "/dqrtlfjc0/image/upload/v1676531024/Oneguru%20Projects/Identifying%20the%20primary%20actions%20and%20sections/Q3_ITEM_B_zcgwbk.png",
      },
    ],
  },
};
