import React from "react";

export interface PanelProps {
    header: React.ReactNode;
    id: string;
    defaultOpen?: boolean;
}