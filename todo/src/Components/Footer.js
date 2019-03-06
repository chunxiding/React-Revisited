import React from 'react';
import Link from './Link';

const Footer = () => (
    <ul>
        <Link filter="all">
            All
        </Link>
        <Link filter="active">
            Todo
        </Link>
        <Link filter="completed">
            Completed
        </Link>
    </ul>
);

export default Footer;