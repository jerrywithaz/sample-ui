import "@expo/match-media";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@zerry-ui/navigation";
import { FlexBox, ThemeProvider } from "@zerry-ui/components";
import { DrawerStack } from "./navigation/stacks";
import Home from "./screens/Home";
import EditProfile from "./screens/EditProfile";
import Drawer from "./navigation/drawer";
import Header from "./navigation/header";
import { ResponsiveProvider } from "@zerry-ui/components/devsupport/responsive";
import { createGlobalStyle } from "styled-components";
import { Platform } from "react-native";

const GlobalStyles = Platform.OS === "web" ? createGlobalStyle`
  * {
    box-sizing: border-box;
  }
` : () => null;

export default function App() {
  return (
    <ResponsiveProvider>
      <NavigationContainer hashRouter>
        <ThemeProvider>
          <GlobalStyles />
          <FlexBox flex={1} horizontal backgroundColor="#F7F8FD">
            <DrawerStack.Navigator
              initialRouteName="Home"
              drawerContent={() => <Drawer />}
              drawerType={{
                xs: "front",
                s: "front",
                m: "slide",
                xl: "permanent",
              }}
              screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: "#004d80",
                },
                headerTitleStyle: {
                  color: "#ffffff",
                },
                headerTintColor: "#ffffff",
              }}
              header={() => <Header />}
            >
              <DrawerStack.Screen
                name="Home"
                component={Home}
                path="/"
                options={{ headerTitle: "Home" }}
              />
              <DrawerStack.Screen
                name="EditProfile"
                component={EditProfile}
                path="/profile"
                options={{ headerTitle: "Edit Profile" }}
              />
            </DrawerStack.Navigator>
            <StatusBar style="auto" />
          </FlexBox>
        </ThemeProvider>
      </NavigationContainer>
    </ResponsiveProvider>
  );
}
