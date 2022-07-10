import React from "react";
import Text from "../../../../../global/Text";
import { TableCellTextProps } from "./TableCellText.types";

function TableCellText<Data, Value>(props: TableCellTextProps<Data, Value>) {
    return (
        <Text>
            {props.getValue()}
        </Text>
    );
}

export default TableCellText;
