import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog posts">
            { data.allMdx.nodes.map((node) => (
                <article key={ node.id }>
                    <h2>
                        <Link to={`/blog/${ node.slug }`}>{ node.frontmatter.name }</Link>
                    </h2>
                    <p>Posted: { node.frontmatter.date }</p>
                </article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                slug
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    name
                }
            }
        }
    }
`;

export default BlogPage;