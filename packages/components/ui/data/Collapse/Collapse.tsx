import React from "react";
import { FlexBox } from "../../layout/Box";
import { ICollapse } from "./Collapse.types";
import Panel from './Panel';
import { NativeModules } from "react-native";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const Collapse: ICollapse = ({ children }) => {
    return (
        <FlexBox vertical flex={1} accessibilityRole="list" padding={0} margin={0}>
            {children}
        </FlexBox>
    );
}

Collapse.Panel = Panel;

export default Collapse;
