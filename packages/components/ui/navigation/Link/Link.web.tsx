import React from 'react';
import Text from '../../global/Text';
import * as Styled from './Link.styled.web';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children, onPress, fontSize, fontWeight }) => {
    return (
        <Styled.Link to={to} onClick={onPress} style={{ width: "100%" }}>
            <Text fontSize={fontSize} fontWeight={fontWeight}>
            {children}
            </Text>
        </Styled.Link>
    );
}