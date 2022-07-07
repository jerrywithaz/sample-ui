import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { ResponsiveProp } from "@zerry-ui/components";
import { ParamListBase } from "../../types";

export type DrawerType = "permanent" | "front" | "slide";

export type ResponsiveDrawerType = ResponsiveProp<DrawerType>;

export interface DrawerNavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions?: DrawerNavigationOptions;
    drawerContent?: React.ComponentType<any>;
    drawerType?: ResponsiveDrawerType;
    header?: React.ComponentType<{ drawerType: DrawerType }>;
}