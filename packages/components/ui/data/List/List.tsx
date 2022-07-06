import React from "react";
import { AccessibilityRole, FlatList } from "react-native";
import Box from "../../layout/Box";
import { ListProps } from "./List.types";

function List<Data extends any>({ data, renderItem, ...props }: ListProps<Data>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      // renderScrollComponent={({ children, ...props }: React.PropsWithChildren<{}>) => {
      //   return <ScrollView><Box accessibilityRole="list">{children}</Box></ScrollView>;
      // }}
      CellRendererComponent={({ children }: React.PropsWithChildren<{}>) => (
        <Box accessibilityRole={"listitem" as AccessibilityRole}>{children}</Box>
      )}
      {...props}
    />
  );
}

export default List;
