import { FlexBox } from '@zerry-ui/components';
import React from 'react';
import { useNavigationState } from '../Provider';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({ width, children }) => {
    const { drawerState } = useNavigationState();

    if (drawerState === "closed") return null;
    
    return (
        <FlexBox width={width}>
            {children}
        </FlexBox>
    );
}
