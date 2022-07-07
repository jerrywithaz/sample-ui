import { FlexBox } from '@zerry-ui/components';
import React from 'react';
import { useTheme } from "styled-components/native";

const Header = () => {
    const theme = useTheme();
    return (
        <FlexBox height={50} backgroundColor={theme.colors.primary.dark}>
            
        </FlexBox>
    );
}

export default Header;
