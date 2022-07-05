import React, { createContext, useCallback, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigateFunction, NavigationProviderContext } from './NavigationProvider.types';
import { ParamListBase } from '../../factories/createStackNavigator';

const Context = createContext<NavigationProviderContext | undefined>(undefined);

const NavigationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const customNavigate = useCallback<NavigateFunction<ParamListBase>>((screen, params) => {
        if (typeof screen === "string") {
            navigate(screen, {
                state: params
            });
        }
        else {
            navigate(screen);
        }
    }, []);

    const goBack = useCallback(() => {
        navigate(-1);
    }, []);

    const canGoBack = useCallback(() => {
        return true;
    }, []);

    return (
        <Context.Provider value={{ goBack, canGoBack, navigate: customNavigate }}>
            {children}
        </Context.Provider>
    );
}

export function useNavigation() {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }

    return context;
}

export default NavigationProvider;


