import React from "react";
import Text from "../../global/Text";
import * as Styled from "./ButtonBase.styled";
import { ButtonBaseProps } from "./ButtonBase.types";
import useButtonInteractionState from "./hooks/useButtonInteractionState";

const ButtonBase: React.FC<React.PropsWithChildren<ButtonBaseProps>> = ({
  children,
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  onPressIn,
  onLongPress,
  onPressOut,
  interactionStyles,
  style,
  ...rest
}) => {
  const {
    handleBlur,
    handleFocus,
    handleHoverIn,
    handleHoverOut,
    handleLongPress,
    handlePressIn,
    handlePressOut,
    state,
    interactionStyle
  } = useButtonInteractionState({
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    onPressIn,
    onPressOut,
    onLongPress,
    interactionStyles,
  });

  return (
    <Styled.Pressable
      {...rest}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onLongPress={handleLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      interactionStyles={interactionStyles}
      accessibilityRole="button"
      style={[typeof style === "function" ? style(state) : style, interactionStyle.button] as any}
    >
      <Text style={interactionStyle.text}>{children}</Text>
    </Styled.Pressable>
  );
};

export default ButtonBase;
