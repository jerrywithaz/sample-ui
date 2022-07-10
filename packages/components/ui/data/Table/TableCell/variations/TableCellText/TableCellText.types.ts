import { Cell } from "@tanstack/react-table";
import { TableCellVariationProps } from "../../TableCell.types";

export type TableCellTextProps<Data, Value> = ReturnType<Cell<Data, Value>['getContext']>;

export type TableCellTextColumnDef<Data extends any> = TableCellVariationProps<Data, "text">;