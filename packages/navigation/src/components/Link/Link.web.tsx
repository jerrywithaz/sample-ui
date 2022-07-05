import React from 'react';
import { Link as NavtiveLink } from 'react-router-dom';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children }) => {
    return (
        <NavtiveLink to={to}>
            {children}
        </NavtiveLink>
    )
}