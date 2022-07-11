import React, { useMemo } from "react";
import { AccessibilityRole } from "react-native";
import { useTheme } from "styled-components/native";
import { FlexBox } from "../../../layout/Box";
import Card from "../../../layout/Card";
import { TableRowProps } from "./TableRow.types";

function TableRowWrapper({
  children,
  isMinSmallDevice,
  accessibilityRole,
  mobileRowHeight,
}: React.PropsWithChildren<{
  isMinSmallDevice: boolean;
  accessibilityRole: AccessibilityRole;
  mobileRowHeight: number;
}>) {
  if (isMinSmallDevice) {
    return <>{children}</>;
  } else {
    return (
      <Card
        marginBottom={16}
        marginHorizontal={16}
        accessibilityRole={accessibilityRole}
        minHeight={mobileRowHeight}
        height={mobileRowHeight}
        maxHeight={mobileRowHeight}
      >
        <FlexBox flex={1} overflow="scroll">
          {children}
        </FlexBox>
      </Card>
    );
  }
}

function TableRow({
  children,
  isHeader,
  isMinSmallDevice,
  position,
  left,
  right,
  top,
  width,
  height,
  mobileRowHeight,
}: React.PropsWithChildren<TableRowProps>) {
  const theme = useTheme();
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

  const flexboxProps = useMemo(() => {
    return {
      horizontal: isMinSmallDevice,
      vertical: !isMinSmallDevice,
      backgroundColor:
        isHeader && isMinSmallDevice ? theme.colors.gray.lighter : undefined,
      accessibilityRole: isMinSmallDevice
        ? ("row" as AccessibilityRole)
        : undefined,
      ...(isMinSmallDevice ? style : {}),
    };
  }, [isMinSmallDevice, isHeader, style]);

  return (
    <TableRowWrapper
      isMinSmallDevice={isMinSmallDevice}
      accessibilityRole={"row" as AccessibilityRole}
      mobileRowHeight={mobileRowHeight}
    >
      <FlexBox {...flexboxProps}>{children}</FlexBox>
    </TableRowWrapper>
  );
}

export default TableRow;
