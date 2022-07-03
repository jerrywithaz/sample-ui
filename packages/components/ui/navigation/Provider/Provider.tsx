import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProviderProps } from './Provider.types';

export const NavigationProvider: React.FC<React.PropsWithChildren<NavigationProviderProps>> = ({ children, documentTitle }) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
}