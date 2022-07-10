import { FlexBox } from "../../../layout/Box";
import React from "react";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableBodyProps } from "./TableBody.types";

function TableBody<Data extends any>({ table }: TableBodyProps<Data>) {
  const rowModel = table.getRowModel();

  return (
    <FlexBox vertical flex={1}>
      {rowModel.rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return <TableCell<Data, any> key={cell.id} cell={cell}/>;
            })}
          </TableRow>
        );
      })}
    </FlexBox>
  );
}

export default TableBody;
