import React from "react";
import { NavigatorProps, ParamListBase, ScreenProps } from "./Stack.types";
import { Routes, Route, Navigate } from "react-router-dom";
import { getInitialRoutePath } from "./Stack.utils";
import NavigationProvider from "../NavigationProvider";

export function createStackNavigator<ParamList extends ParamListBase>() {
  return {
    Navigator: ({ children, initialRouteName }: NavigatorProps<ParamList>) => {
      const initialRoutePath = getInitialRoutePath<ParamList>(
        children,
        initialRouteName
      );

      const routes = React.Children.map(children, (child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { path, component: Component, name, options } = props;

          return <Route path={path} element={<Component />} />;
        }

        return null;
      });

      const initialRoute = initialRoutePath ? (
        <Route path="*" element={<Navigate to={initialRoutePath} />} />
      ) : null;

      return (
        <NavigationProvider>
          <Routes>
            {routes}
            {initialRoute}
          </Routes>
        </NavigationProvider>
      );
    },
    Screen: (_: ScreenProps<ParamList>) => {
      return <></>;
    },
  };
}
