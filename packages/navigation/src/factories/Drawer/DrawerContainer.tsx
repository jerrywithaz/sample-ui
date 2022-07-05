import { FlexBox } from '@zerry-ui/components';
import React from 'react';
import { DrawerContainerProps } from './Drawer.types';

export const DrawerContainer: React.FC<React.PropsWithChildren<DrawerContainerProps>> = ({ width, children }) => {
    return (
        <FlexBox width={width}>
            {children}
        </FlexBox>
    );
}
