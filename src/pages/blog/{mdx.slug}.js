import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle="Super Cool Blog Post">
            <p>{ data.mdx.frontmatter.date }</p>
            <MDXRenderer>
                { data.mdx.body }
            </MDXRenderer>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                name
                date(formatString: "MMMM D, YYYY")
            }
            body
        }
    }
`;

export default BlogPost;