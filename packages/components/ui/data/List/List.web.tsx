import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlexBox } from "../../layout/Box";
import ListItem from "../ListItem";
import {
  ListProps,
  FixedHeightListProps,
  VariableHeightListProps,
  ListItemInnerProps,
} from "./List.types";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import { LayoutChangeEvent } from "react-native";

function ListItemInner(props: ListItemInnerProps) {
  const { children, index, setSize, containerWidth, itemHeight } = props;

  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rowRef.current) {
      setSize(index, rowRef.current.getBoundingClientRect().height);
    }
  }, [setSize, index, containerWidth]);

  if (itemHeight !== undefined) {
    return <>{children}</>;
  }

  return (
    <div ref={rowRef} style={{ boxSizing: "border-box", width: "100%" }}>
      {children}
    </div>
  );
};

function List<Data extends any, VariableHeight extends boolean = false>({
  data,
  renderItem,
  itemHeight,
  listAccessibilityRole = "list",
  listItemAccessibilityRole = "listitem",
}: ListProps<Data, VariableHeight>) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  const listRef = useRef<VariableSizeList>(null);
  const sizeMap = useRef<Record<number, number>>({});

  const setSize = useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current?.resetAfterIndex(index);
  }, []);

  const RenderRow = useCallback(
    ({ index, style }: ListChildComponentProps<Data>) => {
      return (
        <ListItem
          accessibilityRole={listItemAccessibilityRole == null ? undefined : listItemAccessibilityRole }
          paddingHorizontal={0}
          paddingVertical={0}
          height={typeof itemHeight === "number" ? style.height : undefined}
          width={style.width}
          top={style.top}
          left={style.left}
          right={style.right}
          position={style.position === "relative" ? "relative" : "absolute"}
        >
          <ListItemInner
            index={index}
            setSize={setSize}
            containerWidth={containerWidth}
            itemHeight={itemHeight}
          >
            {renderItem({
              index,
              item: data[index],
              separators: {
                highlight: () => {},
                unhighlight: () => {},
                updateProps: () => {},
              },
            })}
          </ListItemInner>
        </ListItem>
      );
    },
    [data, itemHeight]
  );

  const getSize = useCallback((index: number) => {
    return sizeMap.current[index] || itemHeight || 50;
  }, []);

  return (
    <FlexBox flex={1} vertical onLayout={handleLayout}>
      {containerHeight !== 0 && containerWidth !== 0 && (
        <VariableSizeList
          ref={listRef}
          height={containerHeight}
          width={containerWidth}
          itemCount={data.length}
          itemSize={getSize}
          innerElementType={(props) => (
            <div {...props} tabIndex={0} role={listAccessibilityRole} />
          )}
        >
          {RenderRow}
        </VariableSizeList>
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
  return <List<Data, true> {...props} variableHeight={true} itemHeight={undefined} />;
}

export default List;
