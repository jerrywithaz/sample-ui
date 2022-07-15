import { SpringValue } from "@react-spring/native";

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
}