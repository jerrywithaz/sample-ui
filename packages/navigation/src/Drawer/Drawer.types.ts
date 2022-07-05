import { ParamListBase } from "../Stack";

export interface DrawerNavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions: {
        headerShown?: boolean;
    };
    drawerContent?: React.ComponentType<any>;
}

export interface DrawerProps {
    width?: number | string;
}