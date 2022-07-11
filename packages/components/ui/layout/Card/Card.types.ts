import React from "react";
import { AccessibilityRole } from "react-native";
import { BoxProps } from "../Box";

export interface CardProps extends BoxProps {
    header?: React.ReactElement | (() => React.ReactElement)
    footer?: React.ReactElement | (() => React.ReactElement);
    accessibilityRole?: AccessibilityRole;
}