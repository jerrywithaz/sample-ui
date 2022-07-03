import { AccessibilityRole } from "react-native";
import { TextCategory, TextCategoryProps, TextProps } from "./Text.types";

const ariaLevel = "aria-level";

const CATEGORY_TO_PROPS: Record<TextCategory, TextCategoryProps> = {
    h1: {
        [ariaLevel]: 1,
        accessibilityRole: "header",
        fontSize: "xxxLarge"
    },
    h2: {
        [ariaLevel]: 2,
        accessibilityRole: "header",
        fontSize: "xxLarge"
    },
    h3: {
        [ariaLevel]: 3,
        accessibilityRole: "header",
        fontSize: "xLarge"
    },
    h4: {
        [ariaLevel]: 4,
        accessibilityRole: "header",
        fontSize: "large"
    },
    h5: {
        [ariaLevel]: 5,
        accessibilityRole: "header",
        fontSize: "medium"
    },
    h6: {
        [ariaLevel]: 5,
        accessibilityRole: "header",
        fontSize: "small"
    },
    p1: {
        accessibilityRole: "text",
        fontSize: "small"
    },
    p2: {
        accessibilityRole: "text",
        fontSize: "small"
    }
} 

export function categoryToProps(category: TextCategory) {
    return CATEGORY_TO_PROPS[category];
}
