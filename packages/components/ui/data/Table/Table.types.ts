import { TableCellTextColumnDef } from "./TableCell/variations/TableCellText";

export type ColumnDef<Data extends any> = TableCellTextColumnDef<Data>;


export interface TableProps<Data extends any> {
  data: Data[];
  columns: ColumnDef<Data>[];
}
