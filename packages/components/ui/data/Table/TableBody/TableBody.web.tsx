import { FlexBox } from "../../../layout/Box";
import React, { useCallback, useState } from "react";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableBodyProps } from "./TableBody.types";
import { FixedSizeList } from "react-window";

function TableBody<Data extends any>({
  rowModel,
  isMinSmallDevice,
}: TableBodyProps<Data>) {
  const [height, setHeight] = useState(0);
  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rowModel.rows[index];
      return (
        <TableRow
          key={row.id}
          index={index}
          isMinSmallDevice={isMinSmallDevice}
          {...style}
        >
          {row.getVisibleCells().map((cell) => {
            return <TableCell<Data, any> key={cell.id} cell={cell} />;
          })}
        </TableRow>
      );
    },
    [rowModel.rows]
  );

  return (
    <FlexBox
      vertical
      flex={1}
      onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
    >
      {height !== 0 && (
        <FixedSizeList
          height={height}
          itemCount={rowModel.rows.length}
          width="100%"
          itemSize={43}
          innerElementType={(props) => (
            <div {...props} tabIndex={0} role="rowgroup" />
          )}
          // outerElementType={(props) => <div {...props} tabIndex={0} role="rowgroup" />}
        >
          {RenderRow}
        </FixedSizeList>
      )}
    </FlexBox>
  );
}

export default TableBody;
