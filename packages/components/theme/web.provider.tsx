import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { ResponsiveProvider } from "../devsupport/responsive";
import theme from "./theme";

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <DefaultThemeProvider theme={theme}>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </DefaultThemeProvider>
  );
};

export default ThemeProvider;
