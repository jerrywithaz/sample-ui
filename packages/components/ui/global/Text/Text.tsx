import React from "react";
import * as Styled from "./Text.styled";
import { TextProps } from "./Text.types";
import { categoryToProps } from "./Text.utils";

const Text: React.FC<TextProps> = ({
  style,
  children,
  accessibilityRole,
  category,
  onLongPress,
  color,
  fontSize,
  ...props
}) => {
  return (
    <Styled.Text {...props} {...categoryToProps(category)} style={[style]} color={color} fontSize={fontSize}>
      {children}
    </Styled.Text>
  );
};

export const Heading1: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xxxLarge"/>
}

export const Heading2: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xxLarge"/>
}

export const Heading3: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xLarge"/>
}

export const Heading4: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="large"/>
}

export const Heading5: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="medium"/>
}

export const Heading6: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="small"/>
}

export default Text;
