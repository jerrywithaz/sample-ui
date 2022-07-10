import { FlexBox } from "../../../layout/Box";
import React from "react";

function TableRow({ children }: React.PropsWithChildren<{}>) {
    return (
        <FlexBox horizontal>
            {children}
        </FlexBox>
    );
}

export default TableRow;
