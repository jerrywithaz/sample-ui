import React, { useCallback, useEffect, useState } from "react";
import { FlexBox } from "../../../layout/Box";
import TouchableWithoutFeedback from "../../../../devsupport/components/TouchableWithoutFeedback";
import { PanelProps } from "./Panel.types";
import { AccessibilityRole, StyleSheet } from "react-native";
import { useSpring } from "@react-spring/web";
import AnimatedContent from "./AnimatedContent";
import useComponentDidMount from "../../../../hooks/useComponentDidMount";

const Panel: React.FC<PanelProps> = ({
  children,
  header,
  id,
  defaultOpen = false,
  accessibilityRole,
  contentPadding = true,
  contentAccessibilityRole,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [open, setOpen] = useState(defaultOpen);
  const mounted = useComponentDidMount();

  const [enableAnimation, setEnableAnimation] = useState(
    defaultOpen ? false : true
  );

  const handleHeaderPress = useCallback(() => {
    setOpen((open) => (open ? false : true));
  }, []);

  const animation = useSpring(
    !enableAnimation
      ? {
          maxHeight: undefined,
        }
      : {
          maxHeight: open ? contentHeight : 0,
        }
  );

  const sectionId = `${id}-section`;

  useEffect(() => {
    if (mounted && contentHeight) {
      setEnableAnimation(true);
    }
  }, [mounted, contentHeight]);

  return (
    <FlexBox
      vertical
      flexBasis="auto"
      accessibilityRole={
        accessibilityRole === null
          ? undefined
          : accessibilityRole ?? ("listitem" as AccessibilityRole)
      }
      nativeID={id}
    >
      <TouchableWithoutFeedback
        accessibilityRole="button"
        tabIndex={0}
        style={styles.header}
        onPress={handleHeaderPress}
        accessibilityControls={sectionId}
        aria-expanded={open}
      >
        {header}
      </TouchableWithoutFeedback>
      <AnimatedContent
        setContentHeight={setContentHeight}
        open={open}
        defaultOpen={defaultOpen}
        animation={animation}
        contentHeight={contentHeight}
        id={sectionId}
        accessibilityLabelledBy={id}
        contentPadding={contentPadding}
        contentAccessibilityRole={
          contentAccessibilityRole ?? ("region" as AccessibilityRole)
        }
      >
        {children}
      </AnimatedContent>
    </FlexBox>
  );
};

const styles = StyleSheet.create({
  header: {
    flexShrink: 0,
    flexBasis: "auto",
  },
});

export default Panel;
