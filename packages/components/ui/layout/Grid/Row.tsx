import React from "react";
import { ColProps, RowProps } from "./Grid.types";
import * as Styled from "./Grid.styled";
import Col from "./Col";

const Row: React.FC<React.PropsWithChildren<RowProps>> = ({
  gutter = 0,
  children,
  wrap,
  verticalAlignment,
  horizontalAlignment,
  ...rest
}) => {
  return (
    <Styled.Row {...rest} gutter={gutter} wrap={wrap} flexDirection="row">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ColProps>(child)) {
          const { props } = child;
          return <Col {...props} gutter={gutter} />;
        }

        return null;
      })}
    </Styled.Row>
  );
};

export default Row;
