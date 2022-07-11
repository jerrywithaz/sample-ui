import React from "react";
import { AccessibilityRole } from "react-native";
import { FlexBox } from "../../../layout/Box";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableHeadProps } from "./TableHead.types";

function TableHead<Data extends any>({ isMinSmallDevice, mobileRowHeight, headerGroups }: TableHeadProps<Data>) {
  if (!isMinSmallDevice) return null;

  return (
    <FlexBox
      vertical
      accessibilityRole={"rowgroup" as AccessibilityRole}
      flexShrink={0}
      flexBasis="44px"
    >
      {headerGroups.map((headerGroup, index) => {
        return (
          <TableRow
            key={headerGroup.id}
            id={headerGroup.id}
            index={index}
            isHeader
            isMinSmallDevice={isMinSmallDevice}
            mobileRowHeight={mobileRowHeight}
          >
            {headerGroup.headers.map((header) => {
              return <TableCell<Data, any> key={header.id} header={header} />;
            })}
          </TableRow>
        );
      })}
    </FlexBox>
  );
}

export default TableHead;
