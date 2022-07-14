import { ImageProps } from 'react-native';
import { ThemeBorderRadiusKey, ThemeStatus } from '../../../theme';
import { RenderProp } from '../../../devsupport/components/FalsyFC';
import { TouchableWebProps } from '../../../devsupport/components/TouchableWeb';

export interface ButtonProps extends TouchableWebProps {
    children?: string | number;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    borderRadius?: Exclude<ThemeBorderRadiusKey, "circle">;
    status?: ThemeStatus;
    size?: 'large' | 'medium' | 'small' | 'xSmall';
    tabIndex?: number;
}