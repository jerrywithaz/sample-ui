import useResponsiveProp from "@zerry-ui/components/hooks/useResponsiveProp";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AccessibilityRole,
  FlatList,
  ListRenderItemInfo,
  View,
} from "react-native";
import { FlexBox } from "../../layout/Box";
import ListItem from "../ListItem";
import {
  ListProps,
  FixedHeightListProps,
  VariableHeightListProps,
  ListContextChildrenProps,
  ListItemInnerProps,
} from "./List.types";
import ListContextProvider, { useListContext } from "./ListContext";

function ListItemInner(props: ListItemInnerProps) {
  const { children, index } = props;
  const { setSize } = useListContext();

  return (
    <FlexBox
      flex={1}
      onLayout={(e) => setSize(index, e.nativeEvent.layout.height)}
      data-measure="true"
    >
      {children}
    </FlexBox>
  );
}

function List<Data extends any, VariableHeight extends boolean>({
  data,
  renderItem,
  itemHeight,
  listAccessibilityRole = "list",
  listItemAccessibilityRole = "listitem",
  getItemId,
  initialNumToRender,
}: ListProps<Data, VariableHeight>) {
  const responsiveItemHeight = useResponsiveProp(50, itemHeight);

  const renderItemContainer = useCallback(
    (info: ListRenderItemInfo<Data>) => {
      return (
        <ListItem
          accessibilityRole={
            listItemAccessibilityRole === null
              ? undefined
              : listItemAccessibilityRole
          }
          paddingHorizontal={0}
          paddingVertical={0}
          width="100%"
        >
          <ListItemInner index={info.index} itemHeight={responsiveItemHeight}>
            {renderItem(info)}
          </ListItemInner>
        </ListItem>
      );
    },
    [listItemAccessibilityRole]
  );

  const handleItemLayout = useCallback(
    (_: Data[] | null | undefined, index: number) => {
      return {
        length: responsiveItemHeight,
        offset: responsiveItemHeight * index,
        index,
      };
    },
    [responsiveItemHeight]
  );

  const RenderList = useCallback(({}: ListContextChildrenProps) => {
    const { getSize } = useListContext();
    return (
      <FlatList<Data>
        data={data}
        renderItem={renderItemContainer}
        getItemLayout={(_, index) => {
          return {
            length: getSize(index),
            offset: getSize(index) * index,
            index,
          };
        }}
        initialNumToRender={initialNumToRender}
        keyExtractor={getItemId}
        accessibilityRole={listAccessibilityRole as AccessibilityRole}
      />
    );
  }, []);

  return (
    <ListContextProvider itemHeight={responsiveItemHeight} listRef={undefined}>
      {RenderList}
    </ListContextProvider>
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
