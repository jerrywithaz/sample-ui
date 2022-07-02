import { Theme } from "./theme.types";

const theme: Theme = {
    colors: {
        primary: {
            dark: "#004d80",
            default: "#0077b3",
            light: "#cde5f1",
            lighter: "#e6f2f8",
            lightest: "#f3f9fc"
        }
    },
    spacing: {
        xxxSmall: 2,
        xxSmall: 4,
        xSmall: 8,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 28,
        xxLarge: 36,
        xxxLarge: 48,
        xxxxLarge: 72,
    },
    borderRadius: {
        sharp: 0,
        pill: "20rem",
        default: 4,
        circle: (size) => typeof size === "number" ? size / 2 : "50%",
    }
}

export default theme;
