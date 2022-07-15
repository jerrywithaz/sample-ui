import React from "react";
import { AccessibilityRole } from "react-native";
import type { PanelProps } from "./Panel";

export interface CollapseProps {
    accessibilityRole?: AccessibilityRole;
}

export interface ICollapse extends React.FC<CollapseProps> {
    Panel: React.FC<PanelProps>;
}