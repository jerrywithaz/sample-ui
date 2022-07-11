import { HeaderGroup } from "@tanstack/react-table";

export interface TableHeadProps<Data extends any> {
    isMinSmallDevice: boolean;
    mobileRowHeight: number;
    headerGroups: HeaderGroup<Data>[];
}