import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export interface TouchableWithFeedbackProps extends TouchableOpacityProps {
  focusable?: boolean;
}