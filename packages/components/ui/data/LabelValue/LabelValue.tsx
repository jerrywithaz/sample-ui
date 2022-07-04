import React from 'react';
import { FlexBox } from '../../layout/Box';
import * as Styled from './LabelValue.styled';
import { LabelValueProps } from './LabelValue.types';

const LabelValue: React.FC<LabelValueProps> = ({
    direction = "vertical",
    label,
    value
}) => {
    return (
        <FlexBox 
            vertical={direction === "vertical"} 
            horizontal={direction === "horizontal"}
        >
            <Styled.Label fontSize="medium">{label}</Styled.Label>
            <Styled.Value fontSize="medium">{value}</Styled.Value>
        </FlexBox>
    );
}

export default LabelValue;
