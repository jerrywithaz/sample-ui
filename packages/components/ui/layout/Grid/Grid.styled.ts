import styled from "styled-components/native";
import { FlexBox } from "../Box";
import { RowProps, StyledColProps } from "./Grid.types";
import { createColFlexStyle, createColGutterStyle } from "./Grid.utils";

export const Col = styled(FlexBox)<StyledColProps>`
  flex: 1;
  ${({ deviceSize, xs, s, m, lg, xl, xxl, size }) => `
        ${createColFlexStyle(size ?? 1, true)}
        ${createColFlexStyle(xs, deviceSize.xs)}
        ${createColFlexStyle(s, deviceSize.s)}
        ${createColFlexStyle(m, deviceSize.m)}
        ${createColFlexStyle(lg, deviceSize.lg)}
        ${createColFlexStyle(xl, deviceSize.xl)}
        ${createColFlexStyle(xxl, deviceSize.xxl)}
    `}
  ${({ deviceSize, gutter }) =>
    typeof gutter === "number"
      ? `
      ${createColGutterStyle(gutter, true)}
    `
      : `
      ${createColGutterStyle(gutter?.xs, deviceSize.xs)}
      ${createColGutterStyle(gutter?.s, deviceSize.s)}
      ${createColGutterStyle(gutter?.m, deviceSize.m)}
      ${createColGutterStyle(gutter?.lg, deviceSize.lg)}
      ${createColGutterStyle(gutter?.xl, deviceSize.xl)}
      ${createColGutterStyle(gutter?.xxl, deviceSize.xxl)}
    `}
`;

export const Row = styled(FlexBox)<RowProps>`
  flex: 1;
`;

export const Grid = styled(FlexBox)`
  flex: 1;
`;
