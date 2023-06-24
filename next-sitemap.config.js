/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://danischu.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
