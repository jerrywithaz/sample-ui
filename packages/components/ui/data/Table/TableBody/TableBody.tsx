import { FlexBox } from "../../../layout/Box";
import React, { useCallback, useMemo, useState } from "react";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableBodyProps } from "./TableBody.types";
import { FlatList, ListRenderItem } from "react-native";
import { Row } from "@tanstack/react-table";

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

  const handleItemLayout = useCallback(
    (_: Row<Data>[] | null | undefined, index: number) => {
      if (isMinSmallDevice) {
        return {
          length: rowHeight,
          offset: rowHeight * index,
          index,
        };
      } else {
        return {
          length: mobileRowHeight,
          offset: mobileRowHeight * index,
          index,
        };
      }
    },
    [mobileRowHeight, rowHeight, isMinSmallDevice]
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
      {dimensions.width && dimensions.height ? (
        <FlatList
          data={rowModel.rows}
          renderItem={renderItem}
          getItemLayout={handleItemLayout}
          initialNumToRender={initialNumToRender}
          keyExtractor={handleKeyExtraction}
        />
      ) : null}
    </FlexBox>
  );
}

export default TableBody;
