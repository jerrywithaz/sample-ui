import React from "react";
import FalsyFC from "../../../devsupport/components/FalsyFC";
import FalsyText from "../../../devsupport/components/FalsyText";
import { ButtonProps } from "./Button.types";
import * as Styled from "./Button.styled";
import TouchableWeb from "../../../devsupport/components/TouchableWeb";

const Button: React.FC<ButtonProps> = ({
  children,
  accessoryLeft,
  accessoryRight,
  style,
  borderRadius,
  size,
  status,
  ...props
}) => {
  return (
    <TouchableWeb feedback {...props}>
      <Styled.Button
        accessibilityRole="button"
        borderRadius={borderRadius}
        size={size}
        status={status}
      >
        <FalsyFC component={accessoryLeft} />
        <FalsyText component={children} style={{ color: "#ffffff" }} />
        <FalsyFC component={accessoryRight} />
      </Styled.Button>
    </TouchableWeb>
  );
};

export default Button;
