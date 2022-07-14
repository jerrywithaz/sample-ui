import { FlexStyle, ViewProps } from "react-native";

export type BoxProps = FlexStyle & ViewProps & {
  backgroundColor?: string;
  borderRadius?: number | string;
  horizontal?: boolean;
  vertical?: boolean;
  wrap?: boolean;
  fullWidth?: boolean;
  wrapText?: boolean;
};
