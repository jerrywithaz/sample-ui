import "react-native";

declare module "react-native" {
  import { AccessibilityRole as NativeAccessibilityRole, AccessibilityProps as NativeAccessibilityProps } from 'react-native';

  export interface DefaultTheme extends Theme {}

  export type CustomAccessibilityRole = NativeAccessibilityRole | "listitem" | "list";

  export interface AccessibilityProps extends NativeAccessibilityProps {
    accessibilityRole: CustomAccessibilityRole;
  };

  export type D = AccessibilityProps['accessibilityRole'];
}
