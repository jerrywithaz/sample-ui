import { ThemeFontSizeKey } from "../../../theme";
import { TextCategory } from "./Text.types";

export const CATEGORY_TO_FONTSIZE: Record<TextCategory, ThemeFontSizeKey> = {
    h1: "xxxLarge",
    h2: "xxLarge",
    h3: "xLarge",
    h4: "large",
    h5: "medium",
    h6: "small",
    p1: "small",
    p2: "small",
}