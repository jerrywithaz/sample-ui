import React from "react";
import NativeThemeProvider from "./native.provider";
import WebThemeProvider from "./web.provider";

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <NativeThemeProvider>
      <WebThemeProvider>
        {children}
      </WebThemeProvider>
    </NativeThemeProvider>
  );
};

export default ThemeProvider;
