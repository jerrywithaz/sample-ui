import React from 'react';
import Icon from '../../global/Icon';
import TextInput, { TextInputSize } from '../TextInput';
import { SearchInputProps } from './SearchInput.types';

const ICON_SIZES: Record<TextInputSize, number> = {
    xSmall: 16,
    small: 20,
    medium: 30,
    large: 40
}

const SearchInput: React.FC<SearchInputProps> = ({ size, ...props }) => {
    return (
        <TextInput {...props} accessoryLeft={<Icon name="search" size={ICON_SIZES[size ?? "small"]} />} size={size} />
    );
}

export default SearchInput;
