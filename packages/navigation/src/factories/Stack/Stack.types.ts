import React from "react";

export type ParamListBase = {
    [x: string]: Record<string, unknown>;
};

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

    name: string;
    options?: ScreenOptions;
    component: React.ComponentType<any>;

    // Native Only Props

    path: string;

    // Web Only Props
}

