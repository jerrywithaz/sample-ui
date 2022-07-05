import React from "react";
import { FlatList, View } from "react-native";
import { ListProps } from "./List.types";

function List<Data extends any>({ data, renderItem, ...props }: ListProps<Data>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      CellRendererComponent={({ children }: React.PropsWithChildren<{}>) => (
        <View accessibilityRole="list">{children}</View>
      )}
      {...props}
    />
  );
}

export default List;
