import React from 'react';
import { ImageProps } from 'react-native';
import { RenderProp } from '../../../devsupport/components/FalsyFC';
import { TouchableWebProps } from '../../../devsupport/components/TouchableWeb';

export interface ButtonProps extends TouchableWebProps {
    children?: string | number;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
}