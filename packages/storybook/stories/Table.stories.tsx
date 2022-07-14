import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table, ColumnDef, FlexBox, Text } from "@zerry-ui/components";
import { faker } from "@faker-js/faker";
import { v4 } from "uuid";
import uuid from "react-native-uuid";
import { Platform } from "react-native";

export default {
  title: "Data/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  id: string;
};

const defaultData: Person[] = new Array(10000).fill(null).map((_, index) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: Number(faker.random.numeric(2)),
  visits: Number(faker.random.numeric(3)),
  progress: Number(faker.random.numeric(3)),
  status: "In Progress",
  id: Platform.OS === "web" ? v4() : (uuid.v4() as string),
}));

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    header: () => "First Name",
    footer: (info) => info.column.id,
    type: "text",
    cell: (info) => info.getValue(),
    name: "First Name",
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    header: () => "Last Name",
    footer: (info) => info.column.id,
    type: "text",
    name: "Last Name",
  },
  {
    accessorKey: "age",
    header: () => "Age",
    footer: (info) => info.column.id,
    type: "text",
    name: "Age",
  },
  {
    accessorKey: "visits",
    header: () => "Visits",
    footer: (info) => info.column.id,
    type: "text",
    name: "Visits",
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (info) => info.column.id,
    type: "text",
    name: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    footer: (info) => info.column.id,
    type: "text",
    name: "Profile Progress",
  },
];

const getRowId = (row: Person) => row.id;

const Template: ComponentStory<typeof Table> = (args) => (
  <FlexBox flex={1}>
    <Text style={{ marginBottom: 10 }}>
      Rendering 10,000 items performantly
    </Text>
    <Table
      data={defaultData}
      columns={columns}
      getRowId={getRowId}
      accessibilityLabel="Example Table"
      rowHeight={{
        xs: 300,
        s: 44
      }}
    />
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {};
