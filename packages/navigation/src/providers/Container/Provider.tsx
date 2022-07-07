import React from 'react';
import { NavigationContainer as NativeNavigationContainer } from '@react-navigation/native';
import { NavigationContainerProps } from './Provider.types';

export const NavigationContainer: React.FC<React.PropsWithChildren<NavigationContainerProps>> = ({ children }) => {
    return (
        <NativeNavigationContainer>
            {children}
        </NativeNavigationContainer>
    );
}