import type { MenuItemProps } from "../MenuItem";

export interface MenuGroupProps {
    title: string;
    to: string;
    name: string;
    children: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[]
}