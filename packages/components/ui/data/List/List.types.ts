export type ListRenderItem<Data extends any> = (type: string | number, data: Data, index: number) => JSX.Element | JSX.Element[] | null;

export interface ListProps<Data extends any> {
    data: Data[];
    renderItem: ListRenderItem<Data>;
    rowHeight?: number;
    rowHasChanged?: (r1: Data, r2: Data) => boolean;
    variableHeight?: boolean;
    listAccessibilityRole?: "list" | "menu";
    listItemAccessibilityRole?: "listitem" | "menuitem";
}

export interface FixedHeightListProps<Data extends any> extends Omit<ListProps<Data>, 'rowHeight' | 'variableHeight'> {
    rowHeight: number;
}

export interface VariableHeightListProps<Data extends any> extends Omit<ListProps<Data>, 'rowHeight' | 'variableHeight'> {
    rowHeight?: number;
}