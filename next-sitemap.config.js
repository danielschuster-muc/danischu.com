/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://danielschuster.me",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
