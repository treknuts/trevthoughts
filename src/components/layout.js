import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, loginButton } from './layout.module.css';
import Navbar from './navbar';

const Layout = ({pageTitle, children }) => {

    const authenticated = false;

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className={ container }>
            <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
            <header className={ siteTitle }>{ data.site.siteMetadata.title }</header>
            <Navbar authenticated={authenticated} />
            <main>
                <h1 className={ heading }>{ pageTitle }</h1>
                { children }
            </main>
        </div>
    );
}

export default Layout;