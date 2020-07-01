const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Sam Roberts', // Navigation and Site Title
  siteTitleAlt: 'Sam', // Alternative Site title for SEO
  siteTitleShort: 'Sam', // short_name for manifest
  siteHeadline: 'Creating beautiful components and developing solutions', // Headline for schema.org JSONLD
  siteUrl: 'https://samroberts.us', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: './src/images/preview.png', // Used for SEO and manifest
  siteDescription: 'Portfolio for Houston-based Javascript developer Sam Roberts ',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@smrbts92', // Twitter Username
  ogSiteName: 'Sam Roberts', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
