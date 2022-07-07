import React from "react";
import { ParamListBase } from "../../types";

export interface NavigatorProps<ParamList extends ParamListBase> {
    children: React.ReactNode;
    initialRouteName?: Extract<keyof ParamList, string>;
    screenOptions: {
        headerShown?: boolean;
    }
}

export interface ScreenOptions {
    // Shared Props

    // Native Only Props

    /** React native only */
    headerShown?: boolean;
    headerTitle?: string;

    // Web Only Props
}


export interface ScreenProps<ParamList extends ParamListBase> {
    // Shared Props

    name: keyof ParamList;
    options?: ScreenOptions;
    component: React.ComponentType<any>;

    // Native Only Props

    path: string;
    headerTitle?: string;

    // Web Only Props
}

