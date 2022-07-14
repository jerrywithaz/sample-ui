import React, { useCallback, useEffect, useRef, useState } from "react";
import ListItem from "../ListItem";
import {
  ListProps,
  FixedHeightListProps,
  VariableHeightListProps,
  ListItemInnerProps,
  ListContextChildrenProps,
} from "./List.types";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import ListContextProvider, { useListContext } from "./ListContext";
import useResponsiveProp from "@zerry-ui/components/hooks/useResponsiveProp";

function ListItemInner(props: ListItemInnerProps) {
  const { children, index, itemHeight } = props;

  const { setSize, containerWidth } = useListContext();

  const [mounted, setMounted] = useState(false);

  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (rowRef.current && mounted) {
      setSize(index, rowRef.current.getBoundingClientRect().height);
    }
  }, [index, containerWidth, mounted]);

  if (itemHeight !== undefined) {
    return <>{children}</>;
  }

  return (
    <div
      ref={rowRef}
      style={{ boxSizing: "border-box", width: "100%", height: "100%" }}
      data-measure="true"
    >
      {children}
    </div>
  );
}

function List<Data extends any, VariableHeight extends boolean = false>({
  data,
  renderItem,
  itemHeight,
  listAccessibilityRole = "list",
  listItemAccessibilityRole = "listitem",
}: ListProps<Data, VariableHeight>) {
  const responsiveItemHeight = useResponsiveProp(undefined, itemHeight);

  const listRef = useRef<VariableSizeList>(null);

  const RenderRow = useCallback(
    ({ index, style }: ListChildComponentProps<Data>) => {
      return (
        <ListItem
          accessibilityRole={
            listItemAccessibilityRole == null
              ? undefined
              : listItemAccessibilityRole
          }
          paddingHorizontal={0}
          paddingVertical={0}
          style={{
            height: typeof itemHeight === "number" ? style.height : undefined,
            width: style.width,
            top: style.top,
            left: style.left,
            right: style.right,
            position: style.position === "relative" ? "relative" : "absolute",
          }}
        >
          <ListItemInner index={index} itemHeight={responsiveItemHeight}>
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
    [data, itemHeight, renderItem]
  );

  const RenderList = useCallback(
    ({ width, height, getSize }: ListContextChildrenProps) => {
      return (
        <VariableSizeList
          ref={listRef}
          height={height}
          width={width}
          itemCount={data.length}
          itemSize={getSize}
          innerElementType={(props) => (
            <div {...props} tabIndex={0} role={listAccessibilityRole} />
          )}
        >
          {RenderRow}
        </VariableSizeList>
      );
    },
    [data]
  );

  return (
    <ListContextProvider itemHeight={responsiveItemHeight} listRef={listRef}>
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
  return (
    <List<Data, true> {...props} variableHeight={true} itemHeight={undefined} />
  );
}

export default List;
