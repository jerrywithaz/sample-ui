import { View, ViewStyle } from 'react-native';
import { BoxProps } from '../../layout/Box';

export interface ListItemProps<Data extends any> extends BoxProps {
    title?: string;
    description?: string;
    item?: Data;
    style?: ViewStyle;
    accessibilityRole?: "listitem" | "menuitem";
    forwardedRef?: React.Ref<View>
}