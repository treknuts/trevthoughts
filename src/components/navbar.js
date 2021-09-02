import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks, navLinkItem, navLinkText, loginButton } from './navbar.module.css';

const Navbar = ({ authenticated }) => {
    return (
        <nav>
            <ul className={ navLinks }>
                <li className={ navLinkItem }>
                    <Link to="/" className={ navLinkText }>Home</Link>
                </li>
                <li className={ navLinkItem }>
                    <Link to="/about" className={ navLinkText }>About</Link>
                </li>
                <li className={ navLinkItem }>
                    <Link to="/blog" className={ navLinkText }>Blog</Link>
                </li>
                <li>
                    <Link to="/" className={ navLinkText, loginButton }>{ authenticated ? "logout" : "login" }</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

    