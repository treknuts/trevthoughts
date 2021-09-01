import * as React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <p>Hello, Gatsby! I'm the proud creator of this site built via <span style={{fontWeight: 'bold'}}>Gabsby</span>.</p>
        </Layout>
    );
}

export default AboutPage;