import React from "react";
import isNotNullOrUndefined from "../../../utils/isNotNullOrUndefined";
import type { MenuGroupProps } from "./MenuGroup";
import type { MenuItemProps } from "./MenuItem";

export function menuItemChildrenToJson(
  children:
    | React.ReactElement<MenuItemProps | MenuGroupProps>
    | React.ReactElement<MenuItemProps | MenuGroupProps>[]
) {
  return React.Children.map(children, (child) => {
    if (React.isValidElement<MenuItemProps>(child)) {
      const { props, type } = child;

      return {
        ...props,
        type
      };
    }
    return null;
  }).filter(isNotNullOrUndefined);
}
