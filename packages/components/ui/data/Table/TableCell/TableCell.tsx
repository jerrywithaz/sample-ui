import React from "react";
import {
  TableCellProps,
  GetTableCellProps,
  TableCellType,
} from "./TableCell.types";
import { flexRender } from "@tanstack/react-table";
import * as Styled from "./TableCell.styled";
import Text from "../../../global/Text";
import TableCellText from "./variations/TableCellText";
import { AccessibilityRole } from "react-native";

function getTableCellProps<Data extends any, Value extends any>(
  props: TableCellProps<Data, Value>
): GetTableCellProps<Data, Value> {
  if ("header" in props) {
    const { header } = props;
    const size = header.getSize();
    const context = header.getContext();

    return {
      size,
      children: header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, context),
      type: null,
      context: context,
      cellType: "header",
      name: (header.column.columnDef as any).name as string,
      isMinSmallDevice: context.table.options.meta?.isMinSmallDevice ?? true,
    };
  } else {
    const { cell } = props;
    const size = cell.column.getSize();
    const context = cell.getContext();

    return {
      size,
      children: flexRender(cell.column.columnDef.cell, context),
      type: (cell.column.columnDef as any).type as TableCellType,
      context: context,
      cellType: "cell",
      name: (cell.column.columnDef as any).name as string,
      isMinSmallDevice: context.table.options.meta?.isMinSmallDevice ?? true,
    };
  }
}

function TableCell<Data extends any, Value extends any>(
  props: TableCellProps<Data, Value>
) {
  const { size, children, type, context, cellType, name, isMinSmallDevice } =
    getTableCellProps(props);

  const Component = type ? TABLE_CELL_MAPPING[type] : null;

  const accessibilityRole = cellType === "header" ? "columnheader" as AccessibilityRole : "cell" as AccessibilityRole;

  return (
    <Styled.TableCell
      flexBasis={!isMinSmallDevice ? "auto" : `${size}px`}
      horizontal={!isMinSmallDevice}
      justifyContent={!isMinSmallDevice ? "space-between" : undefined}
      accessibilityRole={accessibilityRole}
    >
        {!isMinSmallDevice && (
            <Text fontWeight={600}>{name}</Text>
        )}
      <>
        {cellType === "cell" && Component !== null && (
          <Component {...context}>{children}</Component>
        )}
        {cellType === "cell" && Component === null && (
          <TableCellText {...context}>{children}</TableCellText>
        )}
        {cellType === "header" && <Text fontWeight={600}>{children}</Text>}
      </>
    </Styled.TableCell>
  );
}

const TABLE_CELL_MAPPING = {
  text: TableCellText,
};

export default TableCell;
