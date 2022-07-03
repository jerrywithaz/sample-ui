import { Theme } from "./theme.types";
import { Platform } from 'react-native';

const theme: Theme = {
    colors: {
        primary: {
            dark: "#004d80",
            default: "#0077b3",
            light: "#cde5f1",
            lighter: "#e6f2f8",
            lightest: "#f3f9fc"
        },
        secondary: {
            default: "#00294d"
        },
        white: {
            default: "#ffffff"
        },
        gray: {
            darker: "#909599",
            dark: "#909599",
            default: "#cfd2d4",
            light: "#e1e3e6",
            lighter: "#f5f8fa",
            lightest: "#ffffff"
        },
        status: {
            default: "#00294d",
            danger: "#de2362",
            success: "#00875a",
            warning: "#f7b228"
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
        sharp: "0px",
        pill: Platform.OS === "web" ? "20rem" : "50%",
        default: "4px",
        circle: (size) => typeof size === "number" ? `${size / 2}px` : "50%",
    },
    shadow: {
        tooltip: "0 2px 10px 0 rgba(0, 41, 77, 0.07)",
        modal: "0 2px 20px 0 rgba(0, 0, 0, 0.2)",
        card: "0 2px 6px 0 rgba(0, 41, 77, 0.07)",
        default: "0 2px 6px 0 rgba(0, 41, 77, 0.07)",
        hover: "0 2px 10px 0 rgba(0, 41, 77, 0.1)"
    },
    typography: {
        fontSizes: {
            xSmall: {
                rem: "0.75rem",
                pixel: "12px"
            },
            small: {
                rem: "0.875rem",
                pixel: "14px"
            },
            medium: {
                rem: "1rem",
                pixel: "16px"
            },
            large: {
                rem: "1.25",
                pixel: "20px"
            },
            xLarge: {
                rem: "1.5rem",
                pixel: "24px"
            },
            xxLarge: {
                rem: "2.25rem",
                pixel: "36px"
            },
            xxxLarge: {
                rem: "3rem",
                pixel: "48px"
            },
            xxxxLarge: {
                rem: "4.5rem",
                pixel: "72px"
            }
        }
    }
}

export default theme;
