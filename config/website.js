const meta = {
  // Metadata
  siteTitle: 'Darshan Sudhakar - Problem solver | Developer | Voracious reader',
  siteDescription:
    'Darshan Sudhakar - Developer by passion and everything else by curiosity',
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
  googleAnalyticsID: '236859929',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
