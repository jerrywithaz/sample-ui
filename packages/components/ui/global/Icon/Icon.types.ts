import { FontAwesome } from '@expo/vector-icons';
import { IconProps as ExpoIconProps } from '@expo/vector-icons/build/createIconSet';
import { BoxProps } from '../../layout/Box';

export interface IconProps extends ExpoIconProps<keyof typeof FontAwesome.glyphMap>, Pick<BoxProps, 'paddingRight' | 'paddingLeft' | 'paddingHorizontal'> {
}