import {
  useNavigation as useNativeNavigation,
} from "@react-navigation/native";
import React, { createContext, useContext } from "react";
import { ParamListBase } from "../Stack";
import { NavigationProviderContext } from "./NavigationProvider.types";

const Context = createContext<NavigationProviderContext | undefined>(undefined);

const NavigationProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const { goBack, canGoBack, navigate } =
    useNativeNavigation();

  return (
    <Context.Provider
      value={{
        goBack,
        canGoBack,
        navigate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useNavigation<
  ParamList extends ParamListBase
>(): NavigationProviderContext<ParamList> {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
}

export default NavigationProvider;
