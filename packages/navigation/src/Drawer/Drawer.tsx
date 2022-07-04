import React from "react";
import { createDrawerNavigator as _createDrawerNavigator } from "@react-navigation/drawer";
import { ParamListBase, ScreenProps } from "../Stack";
import { DrawerNavigatorProps } from "./Drawer.types";

export function createDrawerNavigator<ParamList extends ParamListBase>() {
  const Stack = _createDrawerNavigator<ParamList>();

  return {
    Navigator: ({
      children,
      initialRouteName,
      screenOptions,
      drawerContent
    }: DrawerNavigatorProps<ParamList>) => {
      const screens = React.Children.map(children, (child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { component, name, options } = props;

          return (
            <Stack.Screen name={name} component={component} options={options} />
          );
        }

        return null;
      });

      return (
          <Stack.Navigator
            screenOptions={{
              ...screenOptions,
            }}
            initialRouteName={initialRouteName}
            drawerContent={(props) => drawerContent ? drawerContent({}) : null}
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
