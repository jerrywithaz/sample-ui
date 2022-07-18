import { View, ViewStyle } from 'react-native';
import { BoxProps } from '../../layout/Box';

export interface ListItemProps<Data extends any> extends Omit<BoxProps, 'accessibilityRole'> {
    title?: string;
    description?: string;
    item?: Data;
    style?: ViewStyle;
    accessibilityRole?: "listitem" | "menuitem" | "row" | "presentation";
    forwardedRef?: React.Ref<View>
}