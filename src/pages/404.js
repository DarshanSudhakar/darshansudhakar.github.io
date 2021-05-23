import React from 'react';

import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import Link from 'gatsby-link';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Opps, its a 404 error!</h1>
    <p>
      Reached this page? Good job, only the wise reach this page
    </p>
  </Layout>
);

export default NotFoundPage;
