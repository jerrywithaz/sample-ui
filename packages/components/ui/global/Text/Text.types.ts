import React from "react";
import type { TextProps as RNTextProps } from "react-native";

export type TextElement = React.ReactElement<TextProps>;

type ChildElement = string | number | TextElement;

export interface TextProps extends RNTextProps {
    // children?: ChildElement | ChildElement[];
}
