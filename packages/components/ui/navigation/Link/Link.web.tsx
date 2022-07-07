import React from 'react';
import * as Styled from './Link.styled.web';
import { LinkProps } from './Link.types';

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ to, children, onPress }) => {
    return (
        <Styled.Link to={to} onClick={onPress} style={{ width: "100%" }}>
            {children}
        </Styled.Link>
    );
}