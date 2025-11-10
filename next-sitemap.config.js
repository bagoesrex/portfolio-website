/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bagoes.dev",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/api",
      },
    ],
  },
};
