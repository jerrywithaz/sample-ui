import { PressableProps, StyleProp, ViewStyle, TextStyle } from "react-native";

export interface BaseButtonBaseProps {
    color?: string;
    textColor?: string;
    focusColor?: string;
    focusTextColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
}

export interface ButtonInteractionState {
    hovered: boolean;
    focused: boolean;
    pressed: boolean;
    disabled: boolean | null | undefined;
}

export type ButtonBaseStyle = { button: ViewStyle; text: TextStyle };

export interface ButtonInteractionStateStyles {
    normal: ButtonBaseStyle;
    hovered?: ButtonBaseStyle;
    focused?: ButtonBaseStyle;
    pressed?: ButtonBaseStyle;
    disabled?: ButtonBaseStyle;
};

export interface ButtonBaseProps extends PressableProps, BaseButtonBaseProps {
    interactionStyles: ButtonInteractionStateStyles;
    style?: (state: ButtonInteractionState) => StyleProp<ViewStyle>
}