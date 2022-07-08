import '@expo/match-media';

export type {
  Theme,
  ThemeBorderRadius,
  ThemeBorderRadiusKey,
  ThemeColor,
  ThemeColorKey,
  ThemeSpacing,
  ThemeSpacingKey,
  ThemeStatus, 
  LiteralUnion,
  ThemeColorWithDarker,
  ThemeFontSize,
  ThemeFontSizeKey,
  ThemeShadow,
  ThemeStatusColors,
  ThemeTypography
} from "./theme";
export { default as ThemeProvider } from "./theme";

// Data
export * from './ui/data';

// Forms
export * from "./ui/forms";

// Global
export { default as Text, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "./ui/global/Text";
export type { TextProps } from "./ui/global/Text";
export { default as Icon } from './ui/global/Icon';
export type { IconProps } from './ui/global/Icon';

// Hooks
export { default as useResponsiveProp, responsiveProp } from './hooks/useResponsiveProp';

// Layout
export { default as Box, FlexBox } from "./ui/layout/Box";
export type { BoxProps } from "./ui/layout/Box";

export { default as Card } from "./ui/layout/Card";
export type { CardProps } from "./ui/layout/Card";
export { Grid, Row, Col } from "./ui/layout/Grid";
export type { GridProps, ColProps, RowProps } from "./ui/layout/Grid";

// Navigation
export * from './ui/navigation';

// Types
export type { ResponsiveProp } from './types';
