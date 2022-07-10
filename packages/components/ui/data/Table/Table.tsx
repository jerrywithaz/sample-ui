import React from 'react';
import {
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { TableProps } from './Table.types';
import { FlexBox } from '../../layout/Box';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table<Data extends any>(props: TableProps<Data>) {
    const { data, columns } = props;
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <FlexBox vertical flex={1}>
            <TableHead<Data> table={table} />
            <TableBody<Data> table={table} />
        </FlexBox>
    );
}

export default Table;
