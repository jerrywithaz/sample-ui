import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export interface TouchableWithoutFeedbackProps extends TouchableOpacityProps {
  focusable?: boolean;
}