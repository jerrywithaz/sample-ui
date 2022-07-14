import React, { useMemo } from "react";
import { getCoreRowModel, useReactTable, RowModel } from "@tanstack/react-table";
import { TableProps } from "./Table.types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import * as Styled from "./Table.styled";
import { useIsMinSmallDevice } from "../../../devsupport/responsive";
import { AccessibilityRole } from "react-native";
import useResponsiveProp from "../../../hooks/useResponsiveProp";

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
    rowHeight,
  } = props;
  const currentRowHeight = useResponsiveProp(50, rowHeight);

  const isMinSmallDevice = useIsMinSmallDevice();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      isMinSmallDevice,
      rowHeight: currentRowHeight,
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
      />
      <TableBody<Data>
        rowModel={rowModel}
        isMinSmallDevice={isMinSmallDevice}
        rowHeight={currentRowHeight}
        getRowId={getRowId}
        responsiveItemHeight={rowHeight}
      />
    </Styled.Table>
  );
}

export default Table;
