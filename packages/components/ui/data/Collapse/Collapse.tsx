import React from "react";
import { FlexBox } from "../../layout/Box";
import { ICollapse } from "./Collapse.types";
import Panel from './Panel';

const Collapse: ICollapse = ({ children, accessibilityRole }) => {
    return (
        <FlexBox vertical flex={1} accessibilityRole={accessibilityRole ?? "list"} padding={0} margin={0}>
            {children}
        </FlexBox>
    );
}

Collapse.Panel = Panel;

export default Collapse;
