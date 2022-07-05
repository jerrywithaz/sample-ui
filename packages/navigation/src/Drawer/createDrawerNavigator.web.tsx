import React from "react";
import { DrawerNavigatorProps } from "./Drawer.types";
import { Routes, Route, Navigate } from "react-router-dom";
import { ParamListBase, ScreenProps, getInitialRoutePath } from "../Stack";
import { FlexBox } from "@zerry-ui/components";
import NavigationProvider from "../NavigationProvider";
import DrawerNavigationProvider from "../DrawerNavigationProvider";
import useResponsiveDrawerType from "./hooks/useResponsiveDrawerType";

export function createDrawerNavigator<ParamList extends ParamListBase>() {
  return {
    Navigator: ({
      children,
      initialRouteName,
      drawerContent: DrawerContent,
      drawerType
    }: DrawerNavigatorProps<ParamList>) => {

      const type = useResponsiveDrawerType(drawerType);

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
          <DrawerNavigationProvider drawerType={type}>
            <FlexBox horizontal>
              {DrawerContent && <DrawerContent />}
              <Routes>
                {routes}
                {initialRoute}
              </Routes>
            </FlexBox>
          </DrawerNavigationProvider>
        </NavigationProvider>
      );
    },
    Screen: (_: ScreenProps<ParamList>) => {
      return <></>;
    },
  };
}
