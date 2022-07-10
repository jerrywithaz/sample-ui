import React from "react";
import { FlexBox } from "../../layout/Box";
import { IconProps } from "./Icon.types";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

const Icon: React.FC<IconProps> = ({
  paddingRight,
  paddingHorizontal,
  paddingLeft,
  ...props
}) => {
  return (
    <FlexBox
      horizontal
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      paddingHorizontal={paddingHorizontal}
    >
      <FontAwesomeIcon {...props} />
    </FlexBox>
  );
};

export default Icon;
