import { FlexBox } from "../../../layout/Box";
import React from "react";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableHeadProps } from "./TableHead.types";

function TableHead<Data extends any>({ table }: TableHeadProps<Data>) {
  return (
    <FlexBox vertical>
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <TableRow key={headerGroup.id}>
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
