import { ResponsiveSize } from "../devsupport/responsive";
import { ResponsiveProp } from "../types";

function responsiveCssProp<Type extends any>(
  defaultValue: Type,
  deviceSize: Record<ResponsiveSize, boolean>,
  prop?: ResponsiveProp<Type>
): Type {
  if (!prop) return defaultValue;
  if (deviceSize.xxl && prop.xxl) return prop.xxl;
  if (deviceSize.xl && prop.xl) return prop.xl;
  if (deviceSize.lg && prop.lg) return prop.lg;
  if (deviceSize.m && prop.m) return prop.m;
  if (deviceSize.s && prop.s) return prop.s;
  if (deviceSize.xs && prop.xs) return prop.xs;

  return defaultValue;
}

export default responsiveCssProp;
