import * as React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <StaticImage
                alt="A picture of the site author at dinner smiliing at the camera"
                src="../images/me.jpeg"
            />
            <p>Hello, Gatsby! I'm the proud creator of this site built via <span style={{fontWeight: 'bold'}}>Gabsby</span>.</p>
        </Layout>
    );
}

export default AboutPage;