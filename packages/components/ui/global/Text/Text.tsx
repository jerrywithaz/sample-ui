import React from "react";
import * as Styled from "./Text.styled";
import { TextProps } from "./Text.types";
import { categoryToProps } from "./Text.utils";

const Text: React.FC<TextProps> = ({
  style,
  children,
  accessibilityRole,
  category = "p1",
  onLongPress,
  color,
  fontSize,
  ...props
}) => {
  return (
    <Styled.Text {...props} {...categoryToProps(category)} style={[style]} color={color}>
      {children}
    </Styled.Text>
  );
};

export const Heading1: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xxxLarge" category="h1" aria-level={1} />
}

export const Heading2: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xxLarge" category="h2" aria-level={2} />
}

export const Heading3: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="xLarge" category="h3" aria-level={3} />
}

export const Heading4: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="large" category="h4" aria-level={4} />
}

export const Heading5: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="medium" category="h5" aria-level={5} />
}

export const Heading6: React.FC<TextProps> = (props) => {
    return <Text {...props} fontSize="small" category="h6" aria-level={6} />
}

export default Text;
