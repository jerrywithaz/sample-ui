import React from 'react';
import { Link as NavtiveLink } from '@react-navigation/native';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children, name }) => {
    return (
        <NavtiveLink to={{ screen: name }}>
            {children}
        </NavtiveLink>
    );
}