import React, { createContext, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParamListBase } from '../../types';
import { NavigateFunction, NavigationProviderContext } from './NavigationProvider.types';

const Context = createContext<NavigationProviderContext<any> | undefined>(undefined);

const NavigationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const navigate = useNavigate();

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

export function useNavigation<
ParamList extends ParamListBase
>(): NavigationProviderContext<ParamList> {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }

    return context;
}

export default NavigationProvider;


