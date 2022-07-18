import React from "react";
import { AccessibilityRole } from "react-native";

export interface PanelProps {
    header: React.ReactNode;
    id: string;
    defaultOpen?: boolean;
    accessibilityRole?: AccessibilityRole | null;
    contentPadding?: boolean | number | string;
    contentAccessibilityRole?: AccessibilityRole;
}