import React from 'react';
import * as Styled from './Grid.styled';
import { GridProps } from './Grid.types';

const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({ children, ...rest }) => {
    return <Styled.Grid {...rest}>{children}</Styled.Grid>
}

export default Grid;
