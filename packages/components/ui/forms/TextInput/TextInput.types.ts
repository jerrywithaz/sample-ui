import { ThemeBorderRadiusKey } from '../../../theme';
import { ImageProps, TextInputProps as NativeTextInputProps } from 'react-native';
import { RenderProp } from '../../../devsupport/components/FalsyFC';

export type TextInputSize = 'large' | 'medium' | 'small' | 'xSmall';

export interface TextInputStyleProps {
    borderRadius?: Exclude<ThemeBorderRadiusKey, "circle">;
    size?: TextInputSize;
}

export interface TextInputProps extends NativeTextInputProps, TextInputStyleProps {
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
}