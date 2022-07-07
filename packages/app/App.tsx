import "@expo/match-media";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@zerry-ui/navigation";
import { FlexBox, Text, ThemeProvider } from "@zerry-ui/components";
import { DrawerStack } from "./navigation/stacks";
import Home from "./screens/Home";
import EditProfile from "./screens/EditProfile";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <FlexBox flex={1} horizontal>
          <DrawerStack.Navigator
            initialRouteName="Home"
            drawerContent={() => <FlexBox width={200}><Text>Hey</Text></FlexBox>}
            drawerType={{
              xs: "front",
              s: "front",
              m: "slide",
              xl: "permanent",
            }}
            screenOptions={{
              headerShown: true
            }}
          >
            <DrawerStack.Screen name="Home" component={Home} path="/" options={{ headerTitle: "Home" }} />
            <DrawerStack.Screen name="EditProfile" component={EditProfile} path="/profile" options={{ headerTitle: "Edit Profile" }} />
          </DrawerStack.Navigator>
          <StatusBar style="auto" />
        </FlexBox>
      </ThemeProvider>
    </NavigationContainer>
  );
}
