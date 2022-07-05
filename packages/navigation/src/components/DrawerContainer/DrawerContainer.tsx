import React from 'react';
import { FlexBox } from '@zerry-ui/components';
import { DrawerContainerProps } from './DrawerContainer.types';

export const DrawerContainer: React.FC<React.PropsWithChildren<DrawerContainerProps>> = ({ width, children }) => {
    return (
        <FlexBox width={width}>
            {children}
        </FlexBox>
    );
}
