import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import theme from "./theme";

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>;
};

export default ThemeProvider;
