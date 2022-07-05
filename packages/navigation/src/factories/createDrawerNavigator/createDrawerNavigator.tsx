import React from "react";
import { createDrawerNavigator as _createDrawerNavigator } from "@react-navigation/drawer";
import { ParamListBase, ScreenProps } from "../createStackNavigator";
import { DrawerNavigatorProps } from "./createDrawerNavigator.types";
import NavigationProvider from "../../providers/NavigationProvider";
import DrawerNavigationProvider from "../../providers/DrawerNavigationProvider";
import useResponsiveDrawerType from "../../hooks/useResponsiveDrawerType";

export function createDrawerNavigator<ParamList extends ParamListBase>() {
  const Stack = _createDrawerNavigator<ParamList>();

  return {
    Navigator: (props: DrawerNavigatorProps<ParamList>) => {
      const {
        children,
        initialRouteName,
        screenOptions,
        drawerContent: DrawerContent,
        drawerType
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
            drawerStyle: {
            }
          }}
          initialRouteName={initialRouteName}
          drawerContent={(props) => (DrawerContent ? <DrawerContent /> : null)}
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
