import React from 'react';
import Link from './Link';

const Footer = () => (
    <footer className="footer">
        <ul className="filters">
            <Link filter="all">
                All
            </Link>
            <Link filter="active">
                Active
            </Link>
            <Link filter="completed">
                Completed
            </Link>
        </ul>
    </footer>
);

export default Footer;