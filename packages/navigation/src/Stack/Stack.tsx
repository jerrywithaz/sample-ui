import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorProps, ParamListBase, ScreenProps } from "./Stack.types";
import NavigationProvider from "../NavigationProvider";

export function createStackNavigator<ParamList extends ParamListBase>() {
  const Stack = createNativeStackNavigator<ParamList>();

  return {
    Navigator: (props: NavigatorProps<ParamList>) => {
      const { children, initialRouteName, screenOptions } = props;
      
      const screens = React.Children.map(children, (child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { component: Component, name, options } = props;

          const ComponentWithNavigationProvider = () => {
            return (
              <NavigationProvider>
                <Component />
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
          }}
          initialRouteName={initialRouteName}
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
