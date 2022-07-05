import React, { createContext, useCallback, useContext, useState } from 'react';
import { NavigationStateProviderContext } from './Provider.types';

const Context = createContext<NavigationStateProviderContext | undefined>(undefined);

const NavigationStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [drawerState, setDrawerState] = useState<'open' | 'closed'>('open');

    const toggleDrawer = useCallback(() => {
        setDrawerState((drawerState) => {
            if (drawerState === "open") return "closed";
            return "open";
        });
    }, [drawerState]);

    return (
        <Context.Provider value={{ drawerState, toggleDrawer }}>
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


