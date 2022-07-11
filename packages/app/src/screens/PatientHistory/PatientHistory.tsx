import { Box, Table, ColumnDef } from "@zerry-ui/components";
import React from "react";
import { ScrollView } from "react-native";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

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

const PatientHistory = () => {
  return (
    <Box flex={1} overflow="visible" marginVertical={16}>
      <ScrollView style={{ flex: 1 }} nestedScrollEnabled>
        <Table
          data={defaultData}
          columns={columns}
          getRowId={(row) => row.firstName}
          accessibilityLabel="Patient History"
          mobileRowHeight={250}
          rowHeight={44}
        />
      </ScrollView>
    </Box>
  );
};

export default PatientHistory;
