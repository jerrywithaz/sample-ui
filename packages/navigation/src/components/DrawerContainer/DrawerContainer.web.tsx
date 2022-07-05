import React from 'react';
import { FlexBox } from '@zerry-ui/components';
import { useDrawerNavigation } from '../../providers/DrawerNavigationProvider';
import { DrawerContainerProps } from './DrawerContainer.types';

export const DrawerContainer: React.FC<React.PropsWithChildren<DrawerContainerProps>> = ({ width, children }) => {
    const { drawerState, drawerType } = useDrawerNavigation();

    if (drawerState === "closed" && drawerType !== "permanent") return null;
    
    return (
        <FlexBox width={width}>
            {children}
        </FlexBox>
    );
}
