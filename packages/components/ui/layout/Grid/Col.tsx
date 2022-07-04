import React from "react";
import { useDeviceSize } from "../../../devsupport/responsive";
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
  
  return (
    <Styled.Col {...rest} deviceSize={deviceSize} size={size} xs={xs} s={s} m={m} lg={lg} xl={xl} xxl={xxl} gutter={gutter}>
      {children}
    </Styled.Col>
  );
};

export default Col;
