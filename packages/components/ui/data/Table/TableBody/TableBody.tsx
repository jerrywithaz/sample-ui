import { FlexBox } from "../../../layout/Box";
import React, { useCallback, useMemo, useState } from "react";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableBodyProps } from "./TableBody.types";
import { ListRenderItem } from "react-native";
import { Row } from "@tanstack/react-table";
import { VariableHeightList } from "../../List";

function TableBody<Data extends any>({
  rowModel,
  isMinSmallDevice,
  mobileRowHeight,
  rowHeight,
  getRowId,
}: TableBodyProps<Data>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const renderItem: ListRenderItem<Row<Data>> = useCallback(
    ({ item: row, index }) => {
      return (
        <TableRow
          id={row.id}
          index={index}
          isMinSmallDevice={isMinSmallDevice}
          mobileRowHeight={mobileRowHeight}
        >
          {row.getVisibleCells().map((cell) => {
            return <TableCell<Data, any> key={cell.id} cell={cell} />;
          })}
        </TableRow>
      );
    },
    [isMinSmallDevice, mobileRowHeight]
  );

  const initialNumToRender = useMemo(() => {
    if (dimensions.height && dimensions.width) {
      if (isMinSmallDevice) {
        return Math.ceil(dimensions.height / rowHeight);
      } else {
        return Math.ceil(dimensions.height / mobileRowHeight);
      }
    }
    return 10;
  }, [dimensions]);

  const handleKeyExtraction = useCallback((row: Row<Data>) => {
    const key = getRowId(row.original);
    return key;
  }, []);

  return (
    <FlexBox
      vertical
      flex={1}
      onLayout={(e) =>
        setDimensions({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        })
      }
    >
      <VariableHeightList
        data={rowModel.rows}
        renderItem={renderItem}
        getItemId={handleKeyExtraction}
        initialNumToRender={initialNumToRender}
        itemHeight={isMinSmallDevice ? rowHeight : mobileRowHeight}
        listAccessibilityRole="rowgroup"
        listItemAccessibilityRole={null}
      />
    </FlexBox>
  );
}

export default TableBody;
