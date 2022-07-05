import { FlexBox } from '@zerry-ui/components';
import React from 'react';
import { useDrawerNavigation } from '../DrawerNavigationProvider';
import { DrawerContainerProps } from './Drawer.types';

export const DrawerContainer: React.FC<React.PropsWithChildren<DrawerContainerProps>> = ({ width, children }) => {
    const { drawerState, drawerType } = useDrawerNavigation();

    if (drawerState === "closed" && drawerType !== "permanent") return null;
    
    return (
        <FlexBox width={width}>
            {children}
        </FlexBox>
    );
}
