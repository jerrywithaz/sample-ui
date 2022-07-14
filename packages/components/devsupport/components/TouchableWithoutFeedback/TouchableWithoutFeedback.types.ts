import { TouchableOpacityProps } from "react-native";

export interface TouchableWithoutFeedbackProps extends TouchableOpacityProps {
  focusable?: boolean;
  tabIndex?: number;
  accessibilityControls?: string;
}
