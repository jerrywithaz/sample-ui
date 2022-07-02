import React from 'react';
import FalsyFC from '../../../devsupport/components/FalsyFC';
import FalsyText from '../../../devsupport/components/FalsyText';
import TouchableWeb from '../../../devsupport/components/TouchableWeb';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, accessoryLeft, accessoryRight, ...props }) => {
    return (
        <TouchableWeb {...props}>
            <FalsyFC component={accessoryLeft} />
            <FalsyText component={children} />
            <FalsyFC component={accessoryRight} />
        </TouchableWeb>
    );
}

export default Button;

