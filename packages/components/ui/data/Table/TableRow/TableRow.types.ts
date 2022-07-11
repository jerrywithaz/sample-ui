import { BoxProps } from "../../../../ui/layout/Box";

export interface TableRowProps extends Pick<BoxProps, "position" | "left" | "right" | "top" | "width" | "height"> {
    index: number;
    isHeader?: boolean;
    isMinSmallDevice: boolean;
    id: string;
    mobileRowHeight: number;
}