const meta = {
  // Metadata
  siteTitle: 'Darshan Sudhakar - Desktop Developer',
  siteDescription:
    'Darshan Sudhakar - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Darshan Sudhakar',
  siteShortName: 'Darshan Sudhakar',
  siteUrl: 'https://darshansudhakar.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@SudhakarDarshan',
};

const website = {
  ...meta,
  ...social,
  // TODO : darshan Add google analytics
  disqusShortName: '',
  googleAnalyticsID: '',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
