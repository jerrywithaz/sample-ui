import React, { useMemo } from "react";
import { menuItemChildrenToJson } from "../Menu.utils";
import type { MenuItemProps } from "../MenuItem";

function useMenuItems(
  children?:
    | React.ReactElement<MenuItemProps>
    | React.ReactElement<MenuItemProps>[]
) {
  const data = useMemo(() => {
    if (children === undefined) return [];
    return menuItemChildrenToJson(children);
  }, [children]);

  return data;
}

export default useMenuItems;
