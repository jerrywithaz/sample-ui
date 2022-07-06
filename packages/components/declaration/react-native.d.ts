import "react";
import "react-native";

declare module "react-native" {
  import { PointerEvent } from 'react';
  import { NativeSyntheticEvent, TargetedEvent } from 'react-native';

  export interface PressableProps {
    onHoverIn?: (e: NativeSyntheticEvent<PointerEvent<HTMLButtonElement>>) => void;
    onHoverOut?: (e: NativeSyntheticEvent<PointerEvent<HTMLButtonElement>>) => void;
  }

  export function unstable_createElement<Props extends Record<string, unknown>>(component: string | React.Component<Props>, props: Props): React.Component<Props>
}
