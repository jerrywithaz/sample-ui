import { BoxProps } from "../../layout/Box";
import type { MenuGroupProps } from "./MenuGroup";
import type { MenuItemProps } from "./MenuItem";

export interface IndexPath {
  row: number;
  section?: number;
}

export interface MenuProps extends BoxProps {
  onSelect?: () => void;
  children?: React.ReactElement<MenuItemProps | MenuGroupProps> | React.ReactElement<MenuItemProps | MenuGroupProps>[]
}
