import React from "react";
import { FlexBox } from "@zerry-ui/components";
import { useDrawerNavigation } from "../../providers/DrawerNavigationProvider";
import { DrawerContainerProps } from "./DrawerContainer.types";
import { SafeAreaView } from "react-native";

export const DrawerContainer: React.FC<
  React.PropsWithChildren<DrawerContainerProps>
> = ({ width, children }) => {
  const { drawerState, drawerType } = useDrawerNavigation();

  if (drawerState === "closed" && drawerType !== "permanent") return null;

  return (
    <SafeAreaView style={{ flexGrow: 0, flexBasis: "200px" }}>
      <FlexBox flex={1} vertical width={width}>
        {children}
      </FlexBox>
    </SafeAreaView>
  );
};
