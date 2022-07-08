import React from "react";
import { FalsyTextProps } from "./FalsyText.types";
import Text from '../../../ui/global/Text';
import type { TextProps } from '../../../ui/global/Text';

function FalsyText({
  component,
  ...props
}: FalsyTextProps) {
  const textProps = props as TextProps;

  if (!component) {
    return null;
  }

  if (React.isValidElement(component)) {
    return React.cloneElement(component, textProps);
  }

  if (typeof component === 'function') {
    return React.createElement(component as React.FunctionComponent<TextProps>, textProps);
  }

  return (
    <Text {...textProps}>
      {component}
    </Text>
  );
}

export default FalsyText;
