import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerActionHelpers, NavigationProp, useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavigationStateProviderContext } from './Provider.types';

const Context = createContext<NavigationStateProviderContext | undefined>(undefined);

type DrawerNavigationProps = NavigationProp<{}> & DrawerActionHelpers<{}>;

const NavigationStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const drawerState = useDrawerStatus();
    const navigation = useNavigation<DrawerNavigationProps>();

    return (
        <Context.Provider value={{ drawerState, toggleDrawer: navigation.toggleDrawer }}>
            {children}
        </Context.Provider>
    );
}

export function useNavigationState() {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useNavigationState must be used within a NavigationStateProvider");
    }

    return context;
}

export default NavigationStateProvider;


