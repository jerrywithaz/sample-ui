import { FlexBox } from "../../../layout/Box";
import React, { useState } from "react";
import MenuItemLink from "../MenuItemLink";
import { MenuGroupProps } from "./MenuGroup.types";
import Menu from "../Menu";

const MenuGroup: React.FC<MenuGroupProps> = ({ children, title, to, name }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <FlexBox vertical>
      <MenuItemLink
        title={title}
        to={to}
        name={name}
        paddingVertical={4}
        paddingHorizontal={4}
        onPress={() => setSubmenuOpen((submenuOpen) => submenuOpen ? false : true)}
      />
      <Menu
        paddingHorizontal={4}
        overflow={submenuOpen ? undefined : "hidden"}
        display={submenuOpen ? "flex" : "none"}
        flex={undefined}
        minHeight={1}
      >
        {children}
      </Menu>
    </FlexBox>
  );
};

export default MenuGroup;
