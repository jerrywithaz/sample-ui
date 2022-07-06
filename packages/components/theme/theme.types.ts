export type LiteralUnion<T extends U, U = string> = T | (U & {});

export interface ThemeColor {
  dark: string;
  default: string;
  light: string;
  lighter: string;
  lightest: string;
}

export interface ThemeColorWithDarker extends ThemeColor {
  darker: string;
}

export interface ThemeStatusColors {
  default: string;
  danger: string;
  warning: string;
  success: string;
}

export interface ThemeSpacing {
  xxxSmall: number;
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  xxxLarge: number;
  xxxxLarge: number;
}

export interface ThemeBorderRadius {
  sharp: number | string;
  pill: number | string;
  default: number | string;
  card: number | string;
  circle: (size?: number) => number | string;
}

export interface ThemeShadow {
  tooltip: string;
  hover: string;
  modal: string;
  default: string;
  card: string;
}

export interface ThemeFontSize {
  rem: string;
  pixel: string;
}

export interface ThemeTypography {
  fontSizes: {
    xSmall: ThemeFontSize;
    small: ThemeFontSize;
    medium: ThemeFontSize;
    large: ThemeFontSize;
    xLarge: ThemeFontSize;
    xxLarge: ThemeFontSize;
    xxxLarge: ThemeFontSize;
    xxxxLarge: ThemeFontSize;
  };
}

export type ThemeFontSizeKey = keyof ThemeTypography['fontSizes'];

// export type ThemeStatus = LiteralUnion<'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control'>;
export type ThemeStatus = "default" | "success" | "warning" | "danger";

export interface Theme {
  colors: {
    primary: ThemeColor;
    secondary: {
      default: string;
    };
    white: {
      default: string;
    };
    gray: ThemeColorWithDarker;
    status: ThemeStatusColors;
  };
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadow: ThemeShadow;
  typography: ThemeTypography;
}

export type ThemeColorKey = keyof ThemeColor;

export type ThemeSpacingKey = keyof ThemeSpacing;

export type ThemeBorderRadiusKey = keyof ThemeBorderRadius;
