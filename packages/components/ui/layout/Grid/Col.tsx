import useResponsiveProp from "../../../hooks/useResponsiveProp";
import React from "react";
import { useDeviceSize } from "../../../devsupport/responsive";
import { FlexBox } from "../Box";
import * as Styled from "./Grid.styled";
import { ColProps } from "./Grid.types";

const Col: React.FC<React.PropsWithChildren<ColProps>> = ({
  children,
  xs,
  s,
  m,
  lg,
  xl,
  xxl,
  size,
  gutter,
  ...rest
}) => {
  const deviceSize = useDeviceSize();
  const responsizeGutter = useResponsiveProp(typeof gutter === "number" ? gutter : 0, typeof gutter === "number" ? {} : gutter);
  return (
    <Styled.Col {...rest} deviceSize={deviceSize} size={size} xs={xs} s={s} m={m} lg={lg} xl={xl} xxl={xxl}>
      <FlexBox flexBasis="100%" flexGrow={0} flexShrink={0} paddingHorizontal={responsizeGutter}>
      {children}
      </FlexBox>
    </Styled.Col>
  );
};

export default Col;
