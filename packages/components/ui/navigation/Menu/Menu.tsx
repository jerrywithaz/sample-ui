import React from "react";
import { FlexBox } from "../../layout/Box";
import type { MenuProps } from "./Menu.types";

const Menu: React.FC<MenuProps> = ({ children, ...rest }) => {
  return (
    <FlexBox vertical flex={1} accessibilityRole="menu" {...rest}>
      {children}
    </FlexBox>
  );
};

export default Menu;
