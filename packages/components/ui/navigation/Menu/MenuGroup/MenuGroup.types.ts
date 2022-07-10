import type { MenuItemProps } from "../MenuItem";
import { IconProps } from "../../../global/Icon";

export interface MenuGroupProps {
    title: string;
    to: string;
    name: string;
    children: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[];
    icon?: IconProps['name']
}