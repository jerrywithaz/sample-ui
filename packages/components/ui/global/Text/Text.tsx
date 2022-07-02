import React from 'react';
import {
    Text as RNText,
    TextProps as RNTextProps,
    TextProps,
  } from 'react-native';

const Text: React.FC<TextProps> = ({ style, ...props}) => {
    return (
        <RNText {...props} />
    )
}

export default Text;
