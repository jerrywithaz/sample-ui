import React from "react";
import { useResponsiveSize } from "../../../devsupport/responsive";
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
  ...rest
}) => {
  const deviceSize = useResponsiveSize();

  console.log(deviceSize);
  
  return (
    <Styled.Col {...rest} deviceSize={deviceSize} size={size} xs={xs} s={s} m={m} lg={lg} xl={xl} xxl={xxl}>
      {children}
    </Styled.Col>
  );
};

export default Col;
