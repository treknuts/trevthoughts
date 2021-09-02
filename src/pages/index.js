import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Check out my sick blog made following the <a target="_blank" href="https://www.gatsbyjs.com/docs/tutorial/">Gabsby Tutorial</a>!</p>
    </Layout>
  );
}

export default IndexPage;