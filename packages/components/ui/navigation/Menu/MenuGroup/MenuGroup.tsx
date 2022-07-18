import React from "react";
import MenuItemLink from "../MenuItemLink";
import { MenuGroupProps } from "./MenuGroup.types";
import Collapse from "../../../data/Collapse";
import type { MenuItemProps } from "../MenuItem";
import { AccessibilityRole } from "react-native";

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
        accessibilityRole={"presentation" as AccessibilityRole}
        contentPadding="0px 8px"
        contentAccessibilityRole={"group" as AccessibilityRole}
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
        {React.Children.map(children, (child) => {
          if (React.isValidElement<MenuItemProps>(child)) {
            const { props } = child;
            return <MenuItemLink {...props} />;
          }

          return null;
        })}
      </Collapse.Panel>
    </>
  );
};

export default MenuGroup;
