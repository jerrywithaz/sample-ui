import React from "react";
import { ListRenderItem } from "react-native";

export type ListItemHeight = ((index: number) => number) | number;

export interface ListItemInnerProps {
  index: number;
  containerWidth: number;
  setSize: (index: number, size: number) => void;
  itemHeight?: number;
  children: React.ReactNode;
}

export interface ListBaseProps<
  Data extends any,
  VariableHeight extends boolean
> {
  data: Data[];
  renderItem: ListRenderItem<Data>;
  listAccessibilityRole?: "list" | "menu" | "rowgroup";
  listItemAccessibilityRole?: "listitem" | "menuitem" | "row" | null;
  getItemId: (item: Data, index: number) => string;
  initialNumToRender?: number;
  variableHeight?: VariableHeight extends true ? true : false;
  itemHeight?: number;
}

export interface FixedHeightListProps<Data extends any>
  extends ListBaseProps<Data, false> {}

export interface VariableHeightListProps<Data extends any>
  extends ListBaseProps<Data, true> {}

export type ListProps<Data extends any, VariableHeight extends boolean> =
  VariableHeight extends false
    ? FixedHeightListProps<Data>
    : VariableHeightListProps<Data>;
