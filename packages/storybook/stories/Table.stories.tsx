import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table, ColumnDef } from "@zerry-ui/components";


export default {
  title: "Data/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: () => "First Name",
    footer: info => info.column.id,
    type: "text",
    cell: (info) => info.getValue()
  },
  {
    accessorFn: row => row.lastName,
    id: 'lastName',
    header: () => "Last Name",
    footer: info => info.column.id,
    type: "text"
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: info => info.column.id,
    type: "text"
  },
  {
    accessorKey: 'visits',
    header: () => "Visits",
    footer: info => info.column.id,
    type: "text"
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: info => info.column.id,
    type: "text"
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: info => info.column.id,
    type: "text"
  },
]

const Template: ComponentStory<typeof Table> = (args) => (
  <Table data={defaultData} columns={columns} />
);

export const Primary = Template.bind({});

Primary.args = {};
