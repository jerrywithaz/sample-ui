import { Header, Cell, ColumnDef } from "@tanstack/react-table";

export type TableCellType = "text";

type TableCellHeadProps<
  Data extends unknown = any,
  Value extends unknown = any
> = {
  header: Header<Data, Value>;
};

type TableCellCellProps<
  Data extends unknown = any,
  Value extends unknown = any
> = {
  cell: Cell<Data, Value>;
};

type GetTableCellHeaderProps<
Data extends unknown = any,
Value extends unknown = any
> = {
    cellType: "header";
    type: null;
    children: React.ReactNode | JSX.Element;
    size: number;
    context: ReturnType<Header<Data, Value>['getContext']>;
    name: string;
    isMinSmallDevice: boolean;
};

type GetTableCellCellProps<
Data extends unknown = any,
Value extends unknown = any
> = {
    cellType: "cell";
    type: TableCellType;
    children: React.ReactNode | JSX.Element;
    size: number;
    context: ReturnType<Cell<Data, Value>['getContext']>;
    name: string;
    isMinSmallDevice: boolean;
};

export type GetTableCellProps<
Data extends unknown = any,
Value extends unknown = any
> = GetTableCellHeaderProps<Data, Value> | GetTableCellCellProps<Data, Value>;

export type TableCellProps<
  Data extends unknown = any,
  Value extends unknown = any
> = TableCellHeadProps<Data, Value> | TableCellCellProps<Data, Value>;

export type TableCellVariationProps<Data extends any, Type extends string = string> = ColumnDef<Data> & {
    type: Type;
    name: string;
}
