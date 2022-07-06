import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { ButtonInteractionState, ButtonInteractionStateStyles } from "../ButtonBase.types";
import merge from "ts-deepmerge";

function useButtonInteractionStyles({
    hovered,
    focused,
    disabled,
    pressed,
}: ButtonInteractionState, styles: ButtonInteractionStateStyles) {
    return useMemo(() => {
        if (hovered && styles?.hovered) return StyleSheet.create(merge(styles.normal, styles.hovered));
        if (focused && styles?.focused) return StyleSheet.create(merge(styles.normal, styles.focused));
        if (disabled && styles?.disabled) return StyleSheet.create(merge(styles.normal, styles.disabled));
        if (pressed && styles?.pressed) return StyleSheet.create(merge(styles.normal, styles.pressed));
        return StyleSheet.create(styles.normal);
    }, [hovered, focused, disabled, pressed]);
}

export default useButtonInteractionStyles;
