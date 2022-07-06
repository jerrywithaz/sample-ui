import React from 'react';
import { TextInputProps } from './TextInput.types';
import * as Styled from './TextInput.styled';
import FalsyFC from '../../../devsupport/components/FalsyFC';

const TextInput: React.FC<TextInputProps> = ({ borderRadius, size, accessoryLeft, accessoryRight, ...inputProps}) => {
    return (
        <Styled.TextInputContainer borderRadius={borderRadius} size={size}>
            <FalsyFC component={accessoryLeft} />
            <Styled.TextInput {...inputProps} />
            <FalsyFC component={accessoryRight} />
        </Styled.TextInputContainer>
    );
}

export default TextInput;
