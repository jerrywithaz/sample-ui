import {
  ResponsiveSize,
  useDeviceSize,
} from "../devsupport/responsive";
import { ResponsiveProp } from "../types";

type ConditionalType<Type extends any, AllowUndefined extends boolean = false> =
  AllowUndefined extends true ? Type | undefined : Type;

/**
 * Returns a singular value for a set of responsive values based on the current device size.
 * @param prop A set of values for each device size
 * @param defaultValue The default value to return.
 * @returns
 */
function useResponsiveProp<
  Type extends any,
  AllowUndefined extends boolean = false
>(
  defaultValue: Type,
  prop?: ResponsiveProp<Type>,
  allowUndefined?: AllowUndefined
): ConditionalType<Type, AllowUndefined> {
  const deviceSize = useDeviceSize();

  return responsiveProp(defaultValue, deviceSize, prop, allowUndefined);
}

function canReturnProp<
  Type extends any,
  AllowUndefined extends boolean = false
>(
  keyDefined: boolean,
  prop?: Type,
  allowUndefined?: AllowUndefined,
): prop is ConditionalType<Type, AllowUndefined> {
  if (allowUndefined && keyDefined) {
    return true;
  } else if (prop === undefined) {
    return false;
  } else {
    return true;
  }
}

export function responsiveProp<
  Type extends any,
  AllowUndefined extends boolean = false
>(
  defaultValue: Type,
  deviceSize: Record<ResponsiveSize, boolean>,
  prop?: ResponsiveProp<Type>,
  allowUndefined?: AllowUndefined
): ConditionalType<Type, AllowUndefined> {
  if (prop === undefined) return defaultValue;
  if (deviceSize.xxl && canReturnProp('xxl' in prop, prop?.xxl, allowUndefined))
    return prop.xxl;
  if (deviceSize.xl && canReturnProp('xl' in prop, prop?.xl, allowUndefined)) return prop.xl;
  if (deviceSize.lg && canReturnProp('lg' in prop, prop?.lg, allowUndefined)) return prop.lg;
  if (deviceSize.m && canReturnProp('m' in prop, prop?.m, allowUndefined)) return prop.m;
  if (deviceSize.s && canReturnProp('s' in prop, prop?.s, allowUndefined)) return prop.s;
  if (deviceSize.xs && canReturnProp('xs' in prop, prop?.xs, allowUndefined)) return prop.xs;

  return defaultValue;
}

export default useResponsiveProp;
