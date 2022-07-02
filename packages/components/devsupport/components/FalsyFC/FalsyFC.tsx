import React from "react";
import { FalsyFCProps, RenderFCProp } from "./FalsyFC.types";

function FalsyFC<Props extends Record<string, unknown>>({
  component,
  fallback,
  ...props
}: FalsyFCProps<Props>) {
  if (!component) {
    return fallback || null;
  }

  if (React.isValidElement(component)) {
    return React.cloneElement(component, props);
  }

  return React.createElement(component as RenderFCProp<Props>, props as Props);
}

export default FalsyFC;
