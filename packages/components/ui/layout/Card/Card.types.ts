import React from "react";
import { BoxProps } from "../Box";

export interface CardProps extends BoxProps {
    header?: React.ReactElement | (() => React.ReactElement)
    footer?: React.ReactElement | (() => React.ReactElement)
}