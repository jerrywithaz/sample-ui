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
  ...props
}) => {
  return (
    <Styled.Text {...props} {...categoryToProps(category)} style={[style]}>
      {children}
    </Styled.Text>
  );
};

export default Text;
