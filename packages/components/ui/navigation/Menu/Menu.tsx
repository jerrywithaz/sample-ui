import React from "react";
import { AccessibilityRole } from "react-native";
import { FlexBox } from "../../layout/Box";
import type { MenuProps } from "./Menu.types";

const Menu: React.FC<MenuProps> = ({ children, name, ...rest }) => {
  return (
    <FlexBox vertical flex={1} accessibilityRole={"navigation" as AccessibilityRole} {...rest} accessibilityLabel={name}>
      <FlexBox vertical flex={1} accessibilityRole="menu">
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default Menu;
