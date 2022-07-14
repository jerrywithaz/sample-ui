import { ResponsiveProp } from "../../../types";
import type { TableCellTextColumnDef } from "./TableCell/variations/TableCellText";

export type ColumnDef<Data extends any> = TableCellTextColumnDef<Data>;

export interface TableProps<Data extends any> {
  /** The data that will be rendered into the table. */
  data: Data[];
  /** The column definitions used to render columns for the rendered data */
  columns: ColumnDef<Data>[];
  /** An accessor function which informs the Table which property from the data to use as the unique id for each row. */
  getRowId: (data: Data) => string;
  /** A short accessibility label used to quick describe the table such as `Patient History` */
  accessibilityLabel: string;
  rowHeight?: ResponsiveProp<number>;
}
