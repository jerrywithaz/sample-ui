import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
          "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
          "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
          "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
          "OpenSans": require("../assets/fonts/OpenSans-Regular.ttf"),
          "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
