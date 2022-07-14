import { TableMeta as RTMetaTable } from "@tanstack/table-core";

declare module "@tanstack/table-core" {
  interface TableMeta extends RTMetaTable {
    isMinSmallDevice: boolean;
    rowHeight: number;
  }
}
