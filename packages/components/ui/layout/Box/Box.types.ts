import { FlexStyle } from "react-native";

export type BoxProps = FlexStyle & {
  backgroundColor?: string;
  borderRadius?: number | string;
  horizontal?: boolean;
  vertical?: boolean;
  wrap?: boolean;
  fullWidth?: boolean;
};
