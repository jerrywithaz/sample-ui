import { ParamListBase } from "../Stack";

export interface DrawerNavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions: {
        headerShown?: boolean;
    };
    drawerContent?: (props: {}) => React.ReactNode;
}

export interface DrawerProps {

}