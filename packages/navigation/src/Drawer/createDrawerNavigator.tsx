import React from "react";
import { createDrawerNavigator as _createDrawerNavigator } from "@react-navigation/drawer";
import { ParamListBase, ScreenProps } from "../Stack";
import { DrawerNavigatorProps } from "./Drawer.types";
import { NavigationStateProvider } from "../Provider";

export function createDrawerNavigator<ParamList extends ParamListBase>() {
  const Stack = _createDrawerNavigator<ParamList>();

  return {
    Navigator: ({
      children,
      initialRouteName,
      screenOptions,
      drawerContent: DrawerContent,
    }: DrawerNavigatorProps<ParamList>) => {
      const screens = React.Children.map(children, (child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { component: Component, name, options } = props;
          
          const StackComponent = () => {
            return (
              <NavigationStateProvider>
                <Component />
              </NavigationStateProvider>
            );
          };

          return (
            <Stack.Screen
              name={name}
              component={StackComponent}
              options={options}
            />
          );
        }

        return null;
      });

      const Drawer = <DrawerContent />;

      return (
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={initialRouteName}
          drawerContent={(props) => (DrawerContent ? Drawer : null)}
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
