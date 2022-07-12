import React, { useCallback, useState } from "react";
import { AccessibilityRole, FlatList, LayoutChangeEvent, ListRenderItemInfo } from "react-native";
import { FlexBox } from "../../layout/Box";
import ListItem from "../ListItem";
import {
  ListProps,
  FixedHeightListProps,
  VariableHeightListProps,
} from "./List.types";

function List<Data extends any, VariableHeight extends boolean>({
  data,
  renderItem,
  itemHeight = 50,
  listAccessibilityRole = "list",
  listItemAccessibilityRole = "listitem",
  getItemId,
  initialNumToRender,
}: ListProps<Data, VariableHeight>) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  const renderItemContainer = useCallback(
    (info: ListRenderItemInfo<Data>) => {
      return (
        <ListItem
          accessibilityRole={listItemAccessibilityRole === null ? undefined : listItemAccessibilityRole}
          paddingHorizontal={0}
          paddingVertical={0}
          width="100%"
        >
          {renderItem(info)}
        </ListItem>
      );
    },
    [listItemAccessibilityRole]
  );

  const handleItemLayout = useCallback(
    (_: Data[] | null | undefined, index: number) => {
      return {
        length: itemHeight,
        offset: itemHeight * index,
        index,
      };
    },
    [itemHeight]
  );

  return (
    <FlexBox flex={1} vertical onLayout={handleLayout}>
      {containerHeight !== 0 && containerWidth !== 0 && (
        <FlatList<Data>
          data={data}
          renderItem={renderItemContainer}
          getItemLayout={handleItemLayout}
          initialNumToRender={initialNumToRender}
          keyExtractor={getItemId}
          accessibilityRole={listAccessibilityRole as AccessibilityRole}
        />
      )}
    </FlexBox>
  );
}

export function FixedHeightList<Data extends any>(
  props: FixedHeightListProps<Data>
) {
  return <List<Data, false> {...props} variableHeight={false} />;
}

export function VariableHeightList<Data extends any>(
  props: VariableHeightListProps<Data>
) {
  return <List<Data, true> {...props} variableHeight={true} />;
}

export default List;
