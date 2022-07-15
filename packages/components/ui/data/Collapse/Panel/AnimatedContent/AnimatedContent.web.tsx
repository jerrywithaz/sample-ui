import React from "react";
import { FlexBox } from "../../../../layout/Box";
import { AnimatedContentProps } from "./AnimatedContent.types";
import { animated } from "@react-spring/web";
import { LayoutChangeEvent } from "react-native";

const AnimatedFlexbox = animated(FlexBox);

const AnimatedContent: React.FC<React.PropsWithChildren<AnimatedContentProps>> =
  ({
    setContentHeight,
    children,
    animation,
    id,
    accessibilityLabelledBy,
    contentPadding,
  }) => {
    return (
      <AnimatedFlexbox
        flex={1}
        vertical
        maxHeight={0}
        overflow="hidden"
        style={animation}
        nativeID={id}
        accessibilityLabelledBy={accessibilityLabelledBy}
        accessibilityRole="region"
      >
        <FlexBox
          padding={
            contentPadding === true
              ? 12
              : contentPadding === false
              ? 0
              : contentPadding
          }
          flex={1}
          flexBasis="0%"
          onLayout={(e: LayoutChangeEvent) =>
            setContentHeight(e.nativeEvent.layout.height)
          }
        >
          {children}
        </FlexBox>
      </AnimatedFlexbox>
    );
  };

export default AnimatedContent;
