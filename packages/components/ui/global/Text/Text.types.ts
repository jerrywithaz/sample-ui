import React from "react";
import type { TextProps as RNTextProps } from "react-native";
import { ThemeFontSizeKey, ThemeStatus, ThemeFontWeightKey } from "../../../theme";

export type TextElement = React.ReactElement<TextProps>;

export type TextCategory = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2";

export type TextCategoryProps = { "aria-level"?: 1 | 2 | 3 | 4 | 5 | 6, accessibilityRole: "header" | "text", fontSize: ThemeFontSizeKey; fontWeight?: ThemeFontWeightKey; };

export interface TextProps extends RNTextProps {
    status?: ThemeStatus;
    category?: TextCategory;
    "aria-level"?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: string;
    fontSize?: ThemeFontSizeKey;
    fontWeight?: ThemeFontWeightKey;
}
