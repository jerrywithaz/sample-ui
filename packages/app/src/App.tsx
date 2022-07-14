import "@expo/match-media";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@zerry-ui/navigation";
import { FlexBox, ThemeProvider, useThemeFonts } from "@zerry-ui/components";
import { DrawerStack } from "./navigation/stacks";
import Home from "./screens/Home";
import EditProfile from "./screens/EditProfile";
import Drawer from "./navigation/drawer";
import Header from "./navigation/header";
import { ResponsiveProvider } from "@zerry-ui/components/devsupport/responsive";
import PatientHistory from "./screens/PatientHistory";

export default function App() {
  const loaded = useThemeFonts();

  if (!loaded) return null;

  return (
    <ResponsiveProvider>
      <NavigationContainer hashRouter>
        <ThemeProvider>
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
              <DrawerStack.Screen
                name="PatientHistory"
                component={PatientHistory}
                path="/history"
                options={{ headerTitle: "Patient History" }}
              />
            </DrawerStack.Navigator>
            <StatusBar style="light" />
          </FlexBox>
        </ThemeProvider>
      </NavigationContainer>
    </ResponsiveProvider>
  );
}
