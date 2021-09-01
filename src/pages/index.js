import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this site following the Gabsby tutorial!</p>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" 
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
}

export default IndexPage;