import { SpringValue } from "@react-spring/native";
import { AccessibilityRole } from "react-native";

export interface AnimatedContentProps {
    setContentHeight: (height: number) => void;
    open: boolean;
    animation: {
        maxHeight: SpringValue<number>;
    };
    contentHeight: number;
    id: string;
    accessibilityLabelledBy: string;
    contentPadding: boolean | number | string;
    contentAccessibilityRole?: AccessibilityRole;
}