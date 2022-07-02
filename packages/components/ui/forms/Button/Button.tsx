import React from 'react';
import FalsyFC from '../../../devsupport/components/FalsyFC';
import FalsyText from '../../../devsupport/components/FalsyText';
import { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button: React.FC<ButtonProps> = ({ children, accessoryLeft, accessoryRight, ...props }) => {
    return (
        <Styled.Button {...props} accessibilityRole="button">
            <FalsyFC component={accessoryLeft} />
            <FalsyText component={children} />
            <FalsyFC component={accessoryRight} />
        </Styled.Button>
    );
}

export default Button;

