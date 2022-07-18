import React from 'react';
import Text from '../../global/Text';
import * as Styled from './Link.styled.web';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children, onPress, fontSize, fontWeight, accessibilityRole }) => {
    return (
        <Styled.Link to={to} onClick={onPress} style={{ width: "100%" }} role={accessibilityRole}>
            <Text fontSize={fontSize} fontWeight={fontWeight} accessibilityRole="link">
            {children}
            </Text>
        </Styled.Link>
    );
}