import { Table } from "@tanstack/react-table";

export interface TableBodyProps<Data extends any> {
    table: Table<Data>;
}