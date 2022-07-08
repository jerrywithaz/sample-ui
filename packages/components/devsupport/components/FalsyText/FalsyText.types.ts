import React from 'react';
import type { TextProps } from '../../../ui/global/Text';
import { RenderProp } from '../FalsyFC';

export interface FalsyTextProps extends Omit<TextProps, 'children'> {
  component?: RenderProp<TextProps> | React.ReactText;
}