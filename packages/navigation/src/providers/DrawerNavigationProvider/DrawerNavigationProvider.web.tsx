import React, { createContext, useCallback, useContext, useState } from "react";
import { DrawerNavigationProviderContext, DrawerNavigationProviderProps } from "./DrawerNavigationProvider.types";
import { useNavigation } from "../NavigationProvider";
import { ParamListBase } from "../../types";

const Context =
  createContext<DrawerNavigationProviderContext<any> | undefined>(undefined);

const DrawerNavigationProvider: React.FC<React.PropsWithChildren<DrawerNavigationProviderProps>> = ({
  children,
  drawerType
}) => {
  const { goBack, canGoBack, navigate } = useNavigation();
  const [drawerState, setDrawerState] = useState<"open" | "closed">("closed");

  const toggleDrawer = useCallback(() => {
    setDrawerState((drawerState) => {
      if (drawerState === "open") return "closed";
      return "open";
    });
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerState(() => "open");
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerState(() => "open");
  }, []);


  return (
    <Context.Provider
      value={{
        drawerState,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        goBack,
        canGoBack,
        navigate,
        drawerType
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useDrawerNavigation<
  ParamList extends ParamListBase
>(): DrawerNavigationProviderContext<ParamList> {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error(
      "useDrawerNavigation must be used within a DrawerNavigationProvider"
    );
  }

  return context;
}

export default DrawerNavigationProvider;
