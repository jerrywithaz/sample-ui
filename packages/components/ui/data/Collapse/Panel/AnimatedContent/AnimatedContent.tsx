import React, { useEffect, useRef } from "react";
import { FlexBox } from "../../../../layout/Box";
import { AnimatedContentProps } from "./AnimatedContent.types";
import { animated } from "@react-spring/native";
import { View, StyleSheet } from "react-native";

const AnimatedFlexbox = animated(FlexBox);

const AnimatedContent: React.FC<React.PropsWithChildren<AnimatedContentProps>> =
  ({
    setContentHeight,
    children,
    animation,
    contentHeight,
    id,
    accessibilityLabelledBy,
    contentPadding,
  }) => {
    const ref = useRef<View | null>(null);

    const measured = contentHeight !== 0 && contentHeight !== 24;

    useEffect(() => {
      if (ref.current) {
        ref.current.measure((_, __, ___, height) => {
          setContentHeight(height);
        });
      }
    }, []);

    return (
      <AnimatedFlexbox
        nativeID={id}
        accessibilityLabelledBy={accessibilityLabelledBy}
        accessibilityRole="region"
        style={[
          measured
            ? {
                height: animation.maxHeight,
                overflow: "hidden",
              }
            : styles.outscreen,
        ]}
      >
        <FlexBox
          ref={ref}
          padding={
            contentPadding === true
              ? 12
              : contentPadding === false
              ? 0
              : contentPadding
          }
          flex={1}
        >
          {children}
        </FlexBox>
      </AnimatedFlexbox>
    );
  };

const styles = StyleSheet.create({
  outscreen: {
    position: "absolute",
    left: -999,
    top: -999,
  },
  submenu: {
    overflow: "hidden",
  },
});

export default AnimatedContent;
