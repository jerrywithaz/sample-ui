import React from "react";
import { FalsyTextProps } from "./FalsyText.types";
import Text, { TextProps } from '../../../ui/global/Text';

function FalsyText({
  component,
  ...props
}: FalsyTextProps) {
  if (!component) {
    return null;
  }

  if (React.isValidElement(component)) {
    return React.cloneElement(component, props as TextProps);
  }

  if (typeof component === 'function') {
    return React.createElement(component, props as TextProps);
  }

  return (
    <Text {...props}>
      {component}
    </Text>
  );
}

export default FalsyText;
