import React, { useMemo } from "react";
import { AccessibilityRole } from "react-native";
import { FlexBox } from "../../../layout/Box";
import Card from "../../../layout/Card";
import { TableRowProps } from "./TableRow.types";

function TableRow({
  children,
  isMinSmallDevice,
  position,
  left,
  right,
  top,
  width,
  height,
}: React.PropsWithChildren<TableRowProps>) {
  const style = useMemo(
    () => ({
      position,
      left,
      right,
      top,
      width,
      height,
    }),
    [position, left, right, top, width, height]
  );

  if (isMinSmallDevice) {
    return (
      <FlexBox
        horizontal
        style={style}
      >
        {children}
      </FlexBox>
    );
  }
  return (
    <Card
      marginBottom={16}
      marginHorizontal={16}
      accessibilityRole={"row" as AccessibilityRole}
      vertical
    >
      {children}
    </Card>
  );
}

export default TableRow;
