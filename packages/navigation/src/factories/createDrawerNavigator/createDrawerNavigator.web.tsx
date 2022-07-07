import React from "react";
import { DrawerNavigatorProps } from "./createDrawerNavigator.types";
import { Routes, Route, Navigate } from "react-router-dom";
import { ScreenProps, getInitialRoutePath } from "../createStackNavigator";
import { FlexBox } from "@zerry-ui/components";
import NavigationProvider from "../../providers/NavigationProvider";
import DrawerNavigationProvider from "../../providers/DrawerNavigationProvider";
import useResponsiveDrawerType from "../../hooks/useResponsiveDrawerType";
import { ParamListBase } from "../../types";

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
          const { path, component: Component } = props;

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
            <FlexBox flex={1} horizontal>
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
