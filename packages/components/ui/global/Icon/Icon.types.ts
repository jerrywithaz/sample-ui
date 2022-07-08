import { FontAwesome } from '@expo/vector-icons';
import { IconProps as ExpoIconProps } from '@expo/vector-icons/build/createIconSet';

export interface IconProps extends ExpoIconProps<keyof typeof FontAwesome.glyphMap> {
}