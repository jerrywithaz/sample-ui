import { useDrawerStatus } from "@react-navigation/drawer";
import { DrawerActionHelpers, NavigationProp, useNavigation as useNativeNavigation } from "@react-navigation/native";
import React, { createContext, useContext } from "react";
import { ParamListBase } from "../../types";
import { useNavigation } from "../NavigationProvider";
import { DrawerNavigationProviderContext, DrawerNavigationProviderProps } from "./DrawerNavigationProvider.types";

type DrawerNavigationProps<ParamList extends ParamListBase> =
  NavigationProp<ParamList> & DrawerActionHelpers<ParamList>;
  
const Context = createContext<DrawerNavigationProviderContext<any> | undefined>(undefined);

const DrawerNavigationProvider: React.FC<React.PropsWithChildren<DrawerNavigationProviderProps>> = (props) => {
  const { children, drawerType } = props;
  const drawerState = useDrawerStatus();
  const { toggleDrawer, openDrawer, closeDrawer } = useNativeNavigation<DrawerNavigationProps<ParamListBase>>();
  const { goBack, canGoBack, navigate } =
    useNavigation();

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
    throw new Error("useDrawerNavigation must be used within a DrawerNavigationProvider");
  }

  return context;
}

export default DrawerNavigationProvider;
