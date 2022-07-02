import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import { TouchableWithoutFeedbackProps } from "./TouchableWithoutFeedback.types";

const TouchableWithoutFeedback: React.FC<TouchableWithoutFeedbackProps> = (props) => {
  return <TouchableOpacity activeOpacity={1.0} {...props} />;
};

export default TouchableWithoutFeedback;
