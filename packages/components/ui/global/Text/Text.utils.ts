import { AccessibilityRole } from "react-native";
import { TextCategory, TextCategoryProps, TextProps } from "./Text.types";

const ariaLevel = "aria-level";

const CATEGORY_TO_PROPS: Record<TextCategory, TextCategoryProps> = {
    h1: {
        [ariaLevel]: 1,
        accessibilityRole: "header"
    },
    h2: {
        [ariaLevel]: 2,
        accessibilityRole: "header"
    },
    h3: {
        [ariaLevel]: 3,
        accessibilityRole: "header"
    },
    h4: {
        [ariaLevel]: 4,
        accessibilityRole: "header"
    },
    h5: {
        [ariaLevel]: 5,
        accessibilityRole: "header"
    },
    h6: {
        [ariaLevel]: 5,
        accessibilityRole: "header"
    },
    p1: {
        accessibilityRole: "text"
    },
    p2: {
        accessibilityRole: "text"
    }
} 

export function categoryToProps(category: TextCategory) {
    return CATEGORY_TO_PROPS[category];
}
