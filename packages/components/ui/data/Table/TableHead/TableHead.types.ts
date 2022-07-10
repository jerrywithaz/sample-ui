import { Table } from "@tanstack/react-table";

export interface TableHeadProps<Data extends any> {
    table: Table<Data>;
}