import type { DrawerType } from "../../factories/createDrawerNavigator";
import type { ParamListBase } from "../../types";
import { NavigationProviderContext } from "../NavigationProvider";

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
