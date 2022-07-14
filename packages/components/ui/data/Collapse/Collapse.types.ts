import React from "react";
import type { PanelProps } from "./Panel";

export interface CollapseProps {
    
}

export interface ICollapse extends React.FC<CollapseProps> {
    Panel: React.FC<PanelProps>;
}