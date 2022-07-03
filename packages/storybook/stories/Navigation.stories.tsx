import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Box,
  createStackNavigator,
  FlexBox,
  Link,
  NavigationProvider,
  Text,
} from "@zerry-ui/components";

export default {
  title: "Layout/Navigation",
} as ComponentMeta<any>;

const Stack = createStackNavigator();

const Screen1 = () => {
  return (
    <FlexBox flex={1} backgroundColor="#ffffff">
      <Text>Welcome to Screen 1</Text>
    </FlexBox>
  );
};

const Screen2 = () => {
  return (
    <FlexBox flex={1} backgroundColor="#ffffff">
      <Text>Welcome to Screen 2</Text>
    </FlexBox>
  );
};

const Template: ComponentStory<typeof Box> = (args) => (
  <NavigationProvider>
    <FlexBox horizontal>
      <Link to="/screen1" name="Screen1">
        Navigate to Screen 1
      </Link>
      <Box marginHorizontal={4} />
      <Link to="/screen2" name="Screen2">
        Navigate to Screen 2
      </Link>
    </FlexBox>
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Screen1"
        path="/screen1"
        component={Screen1}
        options={{ headerTitle: "Screen1" }}
      />
      <Stack.Screen
        name="Screen2"
        path="/screen2"
        component={Screen2}
        options={{ headerTitle: "Screen2" }}
      />
    </Stack.Navigator>
  </NavigationProvider>
);

export const Primary = Template.bind({});

Primary.args = {};
