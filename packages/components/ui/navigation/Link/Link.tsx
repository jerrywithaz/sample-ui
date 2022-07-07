import React from 'react';
import { Link as NavtiveLink } from '@react-navigation/native';
import { LinkProps } from './Link.types';
import Text from '../../global/Text';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, name, onPress, fontSize }) => {
    return (
        <NavtiveLink to={{ screen: name, params: {} }} onPress={onPress} style={{ width: "100%" }} >
            <Text fontSize={fontSize}>
            {children}
            </Text>
        </NavtiveLink>
    );
}