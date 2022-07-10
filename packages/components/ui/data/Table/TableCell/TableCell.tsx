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
import { useIsSmallDevice } from "../../../../devsupport/responsive";

function getTableCellProps<Data extends any, Value extends any>(
  props: TableCellProps<Data, Value>
): GetTableCellProps<Data, Value> {
  if ("header" in props) {
    const { header } = props;
    const size = header.getSize();

    return {
      size,
      children: header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext()),
      type: null,
      context: header.getContext(),
      cellType: "header",
      name: (header.column.columnDef as any).name as string,
    };
  } else {
    const { cell } = props;
    const size = cell.column.getSize();

    return {
      size,
      children: flexRender(cell.column.columnDef.cell, cell.getContext()),
      type: (cell.column.columnDef as any).type as TableCellType,
      context: cell.getContext(),
      cellType: "cell",
      name: (cell.column.columnDef as any).name as string,
    };
  }
}

function TableCell<Data extends any, Value extends any>(
  props: TableCellProps<Data, Value>
) {
  const isSmallDevice = useIsSmallDevice();
  const { size, children, type, context, cellType, name } =
    getTableCellProps(props);

  const Component = type ? TABLE_CELL_MAPPING[type] : null;

  return (
    <Styled.TableCell
      flexShrink={0}
      flexGrow={0}
      flexBasis={!isSmallDevice ? 0 : `${size}px`}
      horizontal={!isSmallDevice}
      justifyContent={!isSmallDevice ? "space-between" : undefined}
    >
        {!isSmallDevice && (
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
