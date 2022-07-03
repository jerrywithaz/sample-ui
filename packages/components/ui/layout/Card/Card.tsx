import React from 'react';
import * as Styled from './Card.styled';
import { CardProps } from './Card.types';

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children }) => {
    return (
        <Styled.Card>
            {children}
        </Styled.Card>
    );
}

export default Card;
