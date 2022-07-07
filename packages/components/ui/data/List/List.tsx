import React, { useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import Box, { FlexBox } from "../../layout/Box";
import ListItem from "../ListItem";
import { ListProps, FixedHeightListProps, VariableHeightListProps } from "./List.types";

function List<Data extends any>({
  data,
  renderItem,
  rowHasChanged = (r1, r2) => r1 !== r2,
  rowHeight = 50,
  variableHeight = true,
  listAccessibilityRole = "list",
  listItemAccessibilityRole = "listitem",
}: ListProps<Data>) {
  const [containerWidth, setContainerWidth] = useState(300);
  const dataProvider = useMemo(() => {
    return new DataProvider(rowHasChanged).cloneWithRows(data);
  }, [data]);

  const layoutProvider = useMemo(() => {
    return new LayoutProvider(
      () => {
        return "default";
      },
      (_, dimensions) => {
        dimensions.width = containerWidth;
        dimensions.height = rowHeight;
      }
    );
  }, [containerWidth]);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  const renderContentContainer = useCallback(({ style, ...props }: Record<string, any>, children: React.ReactNode) => {
    return <Box {...props} style={style} vertical accessibilityRole={listAccessibilityRole}>{children}</Box>;
  }, [listAccessibilityRole]);

  const renderItemContainer = useCallback((props: Record<string, any>, _: Record<string, any>, children?: React.ReactNode) => {
    return (
      <ListItem {...props} accessibilityRole={listItemAccessibilityRole} paddingHorizontal={0} paddingVertical={0}>
        {children}
      </ListItem>
    );
  }, [listItemAccessibilityRole]);

  return (
    <FlexBox flex={1} vertical onLayout={handleLayout}>
      <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={renderItem}
        style={{ flex: 1 }}
        contentContainerStyle={{ margin: 3 }}
        forceNonDeterministicRendering={variableHeight}
        scrollViewProps={{
          renderContentContainer,
        }}
        renderItemContainer={renderItemContainer}
      />
    </FlexBox>
  );
}

export function FixedHeightList<Data extends any>(props: FixedHeightListProps<Data>) {
  return <List {...props} variableHeight={false} />;
}

export function VariableHeightList<Data extends any>(props: VariableHeightListProps<Data>) {
  return <List {...props} variableHeight={true} />;
}

export default List;
