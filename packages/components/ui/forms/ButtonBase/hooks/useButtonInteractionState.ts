import {
  useState,
  useCallback,
  useMemo,
} from "react";
import { GestureResponderEvent, NativeSyntheticEvent, TargetedEvent } from "react-native";
import { ButtonBaseProps } from "../ButtonBase.types";
import useButtonInteractionStyles from "./useButtonInteractionStyles";

function useButtonInteractionState({
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  disabled,
  onPressIn,
  onPressOut,
  onLongPress,
  interactionStyles
}: ButtonBaseProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);

  const handleHoverIn = useCallback(
    (e: NativeSyntheticEvent<React.PointerEvent<HTMLButtonElement>>) => {
      setHovered(true);
      if (onHoverIn) onHoverIn(e);
    },
    [onHoverIn]
  );

  const handleHoverOut = useCallback(
    (e: NativeSyntheticEvent<React.PointerEvent<HTMLButtonElement>>) => {
      setHovered(false);
      if (onHoverOut) onHoverOut(e);
    },
    [onHoverOut]
  );

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TargetedEvent>) => {
      setFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TargetedEvent>) => {
      setFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      setPressed(true);
      if (onPressIn) onPressIn(e);
    },
    [onPressIn]
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      setPressed(false);
      if (onPressOut) onPressOut(e);
    },
    [onPressOut]
  );

  const handleLongPress = useCallback(
    (e: GestureResponderEvent) => {
      setPressed(true);
      if (onLongPress) onLongPress(e);
    },
    [onLongPress]
  );

  const state = useMemo(() => ({
    disabled,
    hovered,
    focused,
    pressed,
  }), [disabled, hovered, focused, pressed]);

  const interactionStyle = useButtonInteractionStyles(state, interactionStyles);

  return {
    interactionStyle,
    state,
    handleBlur,
    handleFocus,
    handleHoverIn,
    handleHoverOut,
    handlePressIn,
    handlePressOut,
    handleLongPress
  };
}

export default useButtonInteractionState;
