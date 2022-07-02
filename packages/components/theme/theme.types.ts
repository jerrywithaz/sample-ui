export type LiteralUnion<T extends U, U = string> = T | (U & {});

export interface ThemeColor {
  dark: string;
  default: string;
  light: string;
  lighter: string;
  lightest: string;
};

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
};

export interface ThemeBorderRadius {
    sharp: number | string;
    pill: number | string;
    default: number | string;
    circle: (size?: number) => number | string;
}

export type ThemeStatus = LiteralUnion<'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control'>;

export interface Theme {
  colors: {
    primary: ThemeColor;
  };
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
};

export type ThemeColorKey = keyof ThemeColor;

export type ThemeSpacingKey = keyof ThemeSpacing;

export type ThemeBorderRadiusKey = keyof ThemeBorderRadius;

