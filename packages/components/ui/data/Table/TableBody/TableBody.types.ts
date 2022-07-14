import { RowModel } from "@tanstack/react-table";
import { ResponsiveProp } from "../../../../types";

export interface TableBodyProps<Data extends any> {
    rowModel: RowModel<Data>;
    isMinSmallDevice: boolean;
    rowHeight: number;
    getRowId: (data: Data) => string;
    responsiveItemHeight?: ResponsiveProp<number>;
}