import type { DrawerType } from "../Drawer";
import { NavigationProviderContext } from "../NavigationProvider";
import { ParamListBase } from "../Stack";

export interface DrawerNavigationProviderProps {
  drawerType: DrawerType;
}

export interface DrawerNavigationProviderContext<
  ParamList extends ParamListBase = ParamListBase
> extends NavigationProviderContext<ParamList> {
  drawerState: "open" | "closed";
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  drawerType: DrawerType;
}
