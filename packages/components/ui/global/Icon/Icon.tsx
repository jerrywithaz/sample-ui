import React from 'react';
import { FlexBox } from '../../layout/Box';
import { IconProps } from './Icon.types';
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

const Icon: React.FC<IconProps> = (props) => {
    return (
        <FlexBox horizontal>
            <FontAwesomeIcon {...props} />
        </FlexBox>
    );
}

export default Icon;