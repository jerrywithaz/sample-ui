import React, { createContext, useContext } from "react";
import { useResponsiveSize } from "./responsive";
import { ResponsiveSize } from "./responsive.types";

const Context = createContext<Record<ResponsiveSize, boolean> | undefined>(undefined);

const ResponsiveProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const deviceSize = useResponsiveSize();

    return (
        <Context.Provider value={deviceSize}>
            {children}
        </Context.Provider>
    );
}

export function useDeviceSize() {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error('useDeviceSize must be used within the ResponsiveProvider');
    }

    return context;
}

export default ResponsiveProvider;
