import { ResponsiveProp } from "@zerry-ui/components";
import { ParamListBase } from "../../types";

export type DrawerType = "permanent" | "front" | "slide";

export type ResponsiveDrawerType = ResponsiveProp<DrawerType>;

export interface DrawerNavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions?: {
        headerShown?: boolean;
    };
    drawerContent?: React.ComponentType<any>;
    drawerType?: ResponsiveDrawerType;
}