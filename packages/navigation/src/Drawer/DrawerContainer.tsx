import React from 'react';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({ width, children }) => {
    return (
        <>
            {children}
        </>
    );
}
