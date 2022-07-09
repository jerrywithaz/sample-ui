import { TextCategory, TextCategoryProps } from "./Text.types";

const ariaLevel = "aria-level";

const CATEGORY_TO_PROPS: Record<TextCategory, TextCategoryProps> = {
    h1: {
        [ariaLevel]: 1,
        accessibilityRole: "header",
        fontSize: "xxxLarge",
        fontWeight: 500
    },
    h2: {
        [ariaLevel]: 2,
        accessibilityRole: "header",
        fontSize: "xxLarge",
        fontWeight: 500
    },
    h3: {
        [ariaLevel]: 3,
        accessibilityRole: "header",
        fontSize: "xLarge",
        fontWeight: 500
    },
    h4: {
        [ariaLevel]: 4,
        accessibilityRole: "header",
        fontSize: "large",
        fontWeight: 500
    },
    h5: {
        [ariaLevel]: 5,
        accessibilityRole: "header",
        fontSize: "medium",
        fontWeight: 500
    },
    h6: {
        [ariaLevel]: 5,
        accessibilityRole: "header",
        fontSize: "small",
        fontWeight: 500
    },
    p1: {
        accessibilityRole: "text",
        fontSize: "medium"
    },
    p2: {
        accessibilityRole: "text",
        fontSize: "medium"
    }
} 

export function categoryToProps(category: TextCategory) {
    return CATEGORY_TO_PROPS[category];
}
