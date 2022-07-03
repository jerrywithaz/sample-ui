import React from "react";
import { RowProps } from "./Grid.types";
import * as Styled from './Grid.styled';

const Row: React.FC<React.PropsWithChildren<RowProps>> = ({ gutter = 0, children, wrap, verticalAlignment, horizontalAlignment, ...rest }) => {
    return (
        <Styled.Row {...rest} gutter={gutter} wrap={wrap} flexDirection="row">
            {children}
        </Styled.Row>
    );
}

export default Row;
