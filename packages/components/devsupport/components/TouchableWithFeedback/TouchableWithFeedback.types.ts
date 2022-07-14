import { TouchableOpacityProps } from "react-native";

export interface TouchableWithFeedbackProps extends TouchableOpacityProps {
  focusable?: boolean;
  tabIndex?: number;
  accessibilityControls?: string;
}
