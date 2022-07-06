import {
  ResponsiveSize,
  useDeviceSize,
} from "@zerry-ui/components/devsupport/responsive";
import { ResponsiveProp } from "../types";

/**
 * Returns a singular value for a set of responsive values based on the current device size.
 * @param prop A set of values for each device size
 * @param defaultValue The default value to return.
 * @returns
 */
function useResponsiveProp<Type extends any>(
  defaultValue: Type,
  prop?: ResponsiveProp<Type>,
): Type {
  const deviceSize = useDeviceSize();

  return responsiveProp(defaultValue, deviceSize, prop);
}

export function responsiveProp<Type extends any>(
  defaultValue: Type,
  deviceSize: Record<ResponsiveSize, boolean>,
  prop?: ResponsiveProp<Type>,
): Type {
  if (!prop) return defaultValue;
  if (deviceSize.xxl && prop.xxl) return prop.xxl;
  if (deviceSize.xl && prop.xl) return prop.xl;
  if (deviceSize.lg && prop.lg) return prop.lg;
  if (deviceSize.m && prop.m) return prop.m;
  if (deviceSize.s &&  prop.s) return prop.s;
  if (deviceSize.xs && prop.xs) return prop.xs;

  return defaultValue;
}

export default useResponsiveProp;
