import React from "react";
import { Platform, StyleSheet } from "react-native";
import TouchableWithoutFeedback from "../TouchableWithoutFeedback";
import { TouchableWebProps } from "./TouchableWeb.types";

const TouchableWeb: React.FC<TouchableWebProps> = ({ style, ...props }) => {
  return (
    <TouchableWithoutFeedback {...props} style={[styles.container, style]} />
  );
};

const styles = StyleSheet.create({
  container:
    Platform.OS === "web"
      ? {
          // @ts-ignore
          outlineWidth: 0,
        }
      : {},
});

export default TouchableWeb;
