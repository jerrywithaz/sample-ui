import { ResponsiveSize } from "@zerry-ui/components/devsupport/responsive";
import { BoxProps } from "../Box";

export interface GridProps extends BoxProps {

}

export interface RowProps extends BoxProps {
    gutter?: number | ResponsiveGutter;
    verticalAlignment?: "top" | "middle" | "bottom"
    horizontalAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
    wrap?: boolean;
}

export interface ResponsiveGutter {
    xs?: number;
    s?: number;
    m?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

export interface ColProps extends BoxProps {
    size?: number;
    xs?: number;
    s?: number;
    m?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    gutter?: number | ResponsiveGutter;
}

export interface StyledColProps extends ColProps {
    deviceSize: Record<ResponsiveSize, boolean>;
}