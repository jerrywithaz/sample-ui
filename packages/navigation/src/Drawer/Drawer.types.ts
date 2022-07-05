import { ParamListBase } from "../Stack";

export type DrawerType = "permanent" | "front" | "slide";

export interface ResponsiveDrawerType {
    xs?: DrawerType;
    s?: DrawerType;
    m?: DrawerType;
    lg?: DrawerType;
    xl?: DrawerType;
    xxl?: DrawerType;
}

export interface DrawerNavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions: {
        headerShown?: boolean;
    };
    drawerContent?: React.ComponentType<any>;
    drawerType?: ResponsiveDrawerType;
}

export interface DrawerContainerProps {
    width?: number | string;
}