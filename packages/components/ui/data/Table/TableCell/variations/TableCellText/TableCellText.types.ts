import { Cell } from "@tanstack/react-table";
import type { TableCellVariationProps } from "../../TableCell.types";

export type TableCellTextProps<Data, Value> = ReturnType<Cell<Data, Value>['getContext']>;

export type TableCellTextColumnDef<Data extends any> = TableCellVariationProps<Data, "text">;