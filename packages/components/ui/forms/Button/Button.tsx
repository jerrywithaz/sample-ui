import React from "react";
import FalsyFC from "../../../devsupport/components/FalsyFC";
import FalsyText from "../../../devsupport/components/FalsyText";
import { ButtonProps } from "./Button.types";
import * as Styled from "./Button.styled";
import { ButtonInteractionStateStyles } from "../ButtonBase";

const Button: React.FC<ButtonProps> = ({
  children,
  accessoryLeft,
  accessoryRight,
  style,
  borderRadius,
  size,
  status = "default",
  ...props
}) => {
  return (
    <Styled.Button
      {...props}
      interactionStyles={interactionStyles}
      borderRadius={borderRadius}
      size={size}
      status={status}
    >
      <FalsyFC component={accessoryLeft} />
      <FalsyText component={children} color="#ffffff" fontSize="medium" />
      <FalsyFC component={accessoryRight} />
    </Styled.Button>
  );
};

const interactionStyles: ButtonInteractionStateStyles = {
  normal: {
    button: {},
    text: {},
  },
  hovered: {
    button: {
      opacity: 0.8
    },
    text: {}
  },
  pressed: {
    button: {
      opacity: 0.8
    },
    text: {}
  },
  focused: {
    button: {
      opacity: 0.8
    },
    text: {}
  }
};

export default Button;
