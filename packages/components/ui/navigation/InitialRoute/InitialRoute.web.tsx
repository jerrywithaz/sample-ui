import React from "react";
import { Route, Navigate } from "react-router-dom";
import { InitialRouteProps } from "./InitialRoute.types";

export const InitialRoute: React.FC<InitialRouteProps> = ({ path }) => {
    if (path) {
        return <Route path="*" element={<Navigate to={path} />} />;
    }
    return null;
};
