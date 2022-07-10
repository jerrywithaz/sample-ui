import { IconProps } from "../../../global/Icon";

export interface MenuItemProps {
    title: string;
    to: string;
    name: string;
    children?: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[]
    icon?: IconProps['name']
}