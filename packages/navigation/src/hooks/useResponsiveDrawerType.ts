import { useDeviceSize } from "@zerry-ui/components/devsupport/responsive";
import { ResponsiveDrawerType, DrawerType } from "../factories/createDrawerNavigator/createDrawerNavigator.types";

function useResponsiveDrawerType(
  drawerType?: ResponsiveDrawerType
): DrawerType {
  const deviceSize = useDeviceSize();

  if (!drawerType) return "permanent";
  if (deviceSize.xxl && drawerType.xxl) return drawerType.xxl;
  if (deviceSize.xl && drawerType.xl) return drawerType.xl;
  if (deviceSize.lg && drawerType.lg) return drawerType.lg;
  if (deviceSize.m) return drawerType.m ?? "slide";
  if (deviceSize.s) return drawerType.s ?? "front";
  if (deviceSize.xs) return drawerType.xs ?? "front";

  return "permanent";
}

export default useResponsiveDrawerType;
