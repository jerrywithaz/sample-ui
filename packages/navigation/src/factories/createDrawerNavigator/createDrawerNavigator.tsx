import React from "react";
import { createDrawerNavigator as _createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenProps } from "../createStackNavigator";
import { DrawerNavigatorProps } from "./createDrawerNavigator.types";
import NavigationProvider from "../../providers/NavigationProvider";
import DrawerNavigationProvider from "../../providers/DrawerNavigationProvider";
import useResponsiveDrawerType from "../../hooks/useResponsiveDrawerType";
import { ParamListBase } from "../../types";

export function createDrawerNavigator<ParamList extends ParamListBase>() {
  const Stack = _createDrawerNavigator<ParamList>();

  return {
    Navigator: (props: DrawerNavigatorProps<ParamList>) => {
      const {
        children,
        initialRouteName,
        screenOptions,
        drawerContent: DrawerContent,
        drawerType,
      } = props;

      const type = useResponsiveDrawerType(drawerType);

      const screens = React.Children.map(children, (child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { component: Component, name, options } = props;

          const ComponentWithNavigationProvider = () => {
            return (
              <NavigationProvider>
                <DrawerNavigationProvider drawerType={type}>
                  <Component />
                </DrawerNavigationProvider>
              </NavigationProvider>
            );
          };

          return (
            <Stack.Screen
              name={name}
              component={ComponentWithNavigationProvider}
              options={options}
            />
          );
        }

        return null;
      });

      return (
        <Stack.Navigator
          screenOptions={{
            ...screenOptions,
            drawerType: type,
            drawerStyle: {},
            headerStyle: {
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                  height: 0,
                  width: 0
              },
              ...typeof screenOptions?.headerStyle === "object" ? screenOptions?.headerStyle : {}
            }
          }}
          initialRouteName={initialRouteName}
          drawerContent={() => (DrawerContent ? <DrawerContent /> : null)}
        >
          {screens}
        </Stack.Navigator>
      );
    },
    Screen: (_: ScreenProps<ParamList>) => {
      return null;
    },
  };
}
