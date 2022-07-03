import createStyleProp from "@zerry-ui/components/utils/createStyleProp";
import styled from "styled-components/native";
import { FlexBox } from "../Box";
import { RowProps, StyledColProps } from "./Grid.types";
import { createColFlexStyle } from "./Grid.utils";

export const Col = styled(FlexBox)<StyledColProps>`
  ${({ deviceSize, xs, s, m, lg, xl, xxl, size }) => `
        ${createColFlexStyle(size ?? 1, true)}
        ${createColFlexStyle(xs, deviceSize.xs)}
        ${createColFlexStyle(s, deviceSize.s)}
        ${createColFlexStyle(m, deviceSize.m)}
        ${createColFlexStyle(lg, deviceSize.lg)}
        ${createColFlexStyle(xl, deviceSize.xl)}
        ${createColFlexStyle(xxl, deviceSize.xxl)}
    `}
`;

export const Row = styled(FlexBox)<RowProps>`
  gap: ${({ gutter }) => gutter}px;
`;

export const Grid = styled(FlexBox)``;
