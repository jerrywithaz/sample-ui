import { RowModel } from "@tanstack/react-table";

export interface TableBodyProps<Data extends any> {
    rowModel: RowModel<Data>;
    isMinSmallDevice: boolean;
    mobileRowHeight: number;
    rowHeight: number;
    getRowId: (data: Data) => string;
}