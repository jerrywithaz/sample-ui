import { FlexBox, Icon } from '@zerry-ui/components';
import { useDrawerNavigation } from '@zerry-ui/navigation';
import React from 'react';
import { useTheme } from "styled-components/native";

const Header = () => {
    const theme = useTheme();
    const { toggleDrawer } = useDrawerNavigation();

    return (
        <FlexBox horizontal height={50} backgroundColor={theme.colors.primary.dark} alignItems="center" padding={theme.spacing.medium}>
            <Icon name="bars" size={20} color={theme.colors.white.default} onPress={toggleDrawer} />
        </FlexBox>
    );
}

export default Header;
