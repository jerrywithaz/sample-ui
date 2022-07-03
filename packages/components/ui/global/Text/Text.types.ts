import React from "react";
import type { TextProps as RNTextProps } from "react-native";
import { LiteralUnion, ThemeFontSizeKey, ThemeStatus } from "../../../theme";

export type TextElement = React.ReactElement<TextProps>;

export type TextCategory = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2";

export type TextCategoryProps = { "aria-level"?: 1 | 2 | 3 | 4 | 5 | 6, accessibilityRole: "header" | "text" };

export interface TextProps extends RNTextProps {
    status?: LiteralUnion<ThemeStatus>;
    category?: TextCategory;
    "aria-level"?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: string;
    fontSize?: ThemeFontSizeKey;
}
