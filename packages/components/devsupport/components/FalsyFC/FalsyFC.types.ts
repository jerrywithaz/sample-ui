import React from 'react';

export type RenderFCProp<Props = {}> = (props?: Props) => React.ReactElement;

export type RenderProp<Props = {}> = RenderFCProp<Props> | React.ReactElement

export type FalsyFCProps<Props = {}> = Props & {
  component?: RenderProp<Props>;
  fallback?: React.ReactElement;
};