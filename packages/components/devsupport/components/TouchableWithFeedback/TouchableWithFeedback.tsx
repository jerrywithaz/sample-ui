import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import { TouchableWithFeedbackProps } from "./TouchableWithFeedback.types";

const TouchableWithFeedback: React.FC<TouchableWithFeedbackProps> = (
  props
) => {
  return <TouchableOpacity activeOpacity={0.4} {...props} />;
};

export default TouchableWithFeedback;
