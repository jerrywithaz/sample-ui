import { ResponsiveProp } from "@zerry-ui/components/types";
import React from "react";
import { ListRenderItem } from "react-native";
import { VariableSizeList } from "react-window";

export type ListItemHeight = ((index: number) => number) | number;

export interface ListItemInnerProps {
  index: number;
  itemHeight?: number;
  children: React.ReactNode;
}

export interface ListBaseProps<
  Data extends any,
  VariableHeight extends boolean
> {
  /** The data to be rendered, each item in the data will be passed to each item in the list */
  data: Data[];
  /** Takes an item from the data and renders it to a React component. */
  renderItem: ListRenderItem<Data>;
  /** Accessibility role for the list container for assitive technology defaults to `list` */
  listAccessibilityRole?: "list" | "menu" | "rowgroup";
  /** Accessibility role for list items for assitive technology defaults to `listitem` */
  listItemAccessibilityRole?: "listitem" | "menuitem" | "row" | null;
  /** Used to extract a unique key for a given item at the specified index. */
  getItemId: (item: Data, index: number) => string;
  /** How many items to render in the initial batch. This should be enough to fill the screen but not much more. */
  initialNumToRender?: number;
  /** Indicates items in the list do not all have the same height. */
  variableHeight?: VariableHeight extends true ? true : false;
  /** The height for each item in the list */
  itemHeight?: ResponsiveProp<number>;
}

export interface FixedHeightListProps<Data extends any>
  extends ListBaseProps<Data, false> {}

export interface VariableHeightListProps<Data extends any>
  extends ListBaseProps<Data, true> {}

export type ListProps<Data extends any, VariableHeight extends boolean> =
  VariableHeight extends false
    ? FixedHeightListProps<Data>
    : VariableHeightListProps<Data>;

export interface ListContextValue {
  getSize: (index: number) => number;
  setSize: (index: number, height: number) => void;
  containerWidth: number;
}

export interface ListContextChildrenProps {
  width: number;
  height: number;
  getSize: (index: number) => number;
}

export interface ListContextProps<Data extends any> {
  itemHeight: number | undefined;
  listRef?: React.RefObject<VariableSizeList<Data>>;
  children: React.FC<ListContextChildrenProps>;
}
