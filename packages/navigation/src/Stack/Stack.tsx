import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorProps, ParamListBase, ScreenProps } from "./Stack.types";

export function createStackNavigator<ParamList extends ParamListBase>() {
  const Stack = createNativeStackNavigator<ParamList>();

  return {
    Navigator: ({
      children,
      initialRouteName,
      screenOptions,
    }: NavigatorProps<ParamList>) => {
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
