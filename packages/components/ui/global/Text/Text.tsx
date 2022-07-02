import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextProps,
} from "react-native";

const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
  return <RNText {...props}>{children}</RNText>;
};

export default Text;
