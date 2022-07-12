import React from "react";
import { ShowIfProps } from "./ShowIf.types";

const ShowIf: React.FC<React.PropsWithChildren<ShowIfProps>> = ({
  condition,
  children,
}) => {
  if (condition === true) {
    return <>{children}</>;
  }
  return null;
};

export default ShowIf;
