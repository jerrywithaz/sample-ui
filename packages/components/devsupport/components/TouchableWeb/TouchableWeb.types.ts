import type { NativeSyntheticEvent, TargetedEvent } from "react-native";
import type { TouchableWithoutFeedbackProps } from "../TouchableWithoutFeedback";

export interface TouchableWebProps extends TouchableWithoutFeedbackProps {
  onMouseEnter?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
