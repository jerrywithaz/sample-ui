import { BoxProps } from "../../../layout/Box";
import { LinkProps } from "../../Link";

export interface MenuItemLinkProps extends BoxProps, LinkProps {
    title: string;
    to: string;
    name: string;
}