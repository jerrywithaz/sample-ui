import React from 'react';
import { Link as NavtiveLink } from '@react-navigation/native';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, name, onPress }) => {
    return (
        <NavtiveLink to={{ screen: name, params: {} }} onPress={onPress} style={{ width: "100%" }}>
            {children}
        </NavtiveLink>
    );
}