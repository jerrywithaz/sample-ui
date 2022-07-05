import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Button, FlexBox, Text } from "@zerry-ui/components";
import {
  createDrawerNavigator,
  NavigationProvider,
  Link,
  useNavigationState,
  Drawer as DrawerContainer,
} from "@zerry-ui/navigation";

export default {
  title: "Navigation/Drawer",
} as ComponentMeta<any>;

const Stack = createDrawerNavigator();

const Screen1 = () => {
  const { toggleDrawer } = useNavigationState();

  return (
    <FlexBox flex={1} backgroundColor="#ffffff">
      <Text>Welcome to Screen 1</Text>
      <Button size="medium" status="success" onPress={() => toggleDrawer()}>
        Toggle Drawer
      </Button>
    </FlexBox>
  );
};

const Screen2 = () => {
  const { toggleDrawer } = useNavigationState();
  return (
    <FlexBox flex={1} backgroundColor="#ffffff">
      <Text>Welcome to Screen 2</Text>
      <Button size="medium" status="success" onPress={() => toggleDrawer()}>
        Toggle Drawer
      </Button>
    </FlexBox>
  );
};

const Drawer = () => {
  return (
    <DrawerContainer width={200}>
      <FlexBox>
        <FlexBox vertical>
          <Link to="/screen1" name="Screen1">
            Screen 1
          </Link>
          <Box marginVertical={4} />
          <Link to="/screen2" name="Screen2">
            Screen 2
          </Link>
        </FlexBox>
      </FlexBox>
    </DrawerContainer>
  );
};

const Template: ComponentStory<typeof Box> = (args) => (
  <FlexBox flex={1}>
  <NavigationProvider memoryRouter>
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{ headerShown: false }}
      drawerContent={Drawer}
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
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {};
