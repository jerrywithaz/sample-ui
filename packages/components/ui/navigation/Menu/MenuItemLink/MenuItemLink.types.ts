import { BoxProps } from "../../../layout/Box";
import { LinkProps } from "../../Link";
import { IconProps } from "../../../global/Icon";

export interface MenuItemLinkProps extends BoxProps, LinkProps {
    title: string;
    to: string;
    name: string;
    icon?: IconProps['name']
}