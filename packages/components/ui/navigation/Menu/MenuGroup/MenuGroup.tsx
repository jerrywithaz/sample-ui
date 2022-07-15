import React from "react";
import MenuItemLink from "../MenuItemLink";
import { MenuGroupProps } from "./MenuGroup.types";
import Collapse from "../../../data/Collapse";

const MenuGroup: React.FC<MenuGroupProps> = ({
  children,
  title,
  to,
  name,
  icon,
}) => {
  return (
    <>
        <Collapse.Panel
          id={name}
          accessibilityRole="menuitem"
          contentPadding="0px 8px"
          header={
            <MenuItemLink
              title={title}
              to={to}
              name={name}
              paddingVertical={4}
              paddingHorizontal={4}
              icon={icon}
            />
          }
        >
          {children}
        </Collapse.Panel>
    </>
  );
};

export default MenuGroup;
