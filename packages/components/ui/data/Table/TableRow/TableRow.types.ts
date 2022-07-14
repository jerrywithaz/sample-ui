import { BoxProps } from "../../../../ui/layout/Box";

export interface TableRowProps extends Pick<BoxProps, "position" | "left" | "right" | "top" | "width" | "height"> {
    index: number;
    isMinSmallDevice: boolean;
    id: string;
}