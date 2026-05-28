const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? "/project1" : "",
  assetPrefix: isGithubActions ? "/project1/" : "",
};

module.exports = nextConfig;
