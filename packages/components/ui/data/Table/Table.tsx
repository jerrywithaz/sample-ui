import React, { useMemo } from "react";
import { getCoreRowModel, useReactTable, RowModel } from "@tanstack/react-table";
import { TableProps } from "./Table.types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import * as Styled from "./Table.styled";
import { useIsSmallDevice } from "../../../devsupport/responsive";
import { AccessibilityRole } from "react-native";

/**
 * A performant, virtualized and responsive Data Table component for rendering
 * small or large tables.
 */
function Table<Data extends any>(props: TableProps<Data>) {
  const {
    data,
    columns,
    getRowId,
    accessibilityLabel,
    mobileRowHeight,
    rowHeight,
  } = props;
  const isMinSmallDevice = useIsSmallDevice();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      isMinSmallDevice,
      mobileRowHeight,
      rowHeight,
    },
    getRowId,
  });

  const rowModel: RowModel<Data> = useMemo(() => {
    return table.getRowModel();
  }, [data]);

  return (
    <Styled.Table
      vertical
      flex={1}
      isMinSmallDevice={isMinSmallDevice}
      accessibilityRole={"table" as AccessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      <TableHead<Data>
        headerGroups={table.getHeaderGroups()}
        isMinSmallDevice={isMinSmallDevice}
        mobileRowHeight={mobileRowHeight}
      />
      <TableBody<Data>
        rowModel={rowModel}
        isMinSmallDevice={isMinSmallDevice}
        mobileRowHeight={mobileRowHeight}
        rowHeight={rowHeight}
        getRowId={getRowId}
      />
    </Styled.Table>
  );
}

export default Table;
