import React from "react";
import { FlexBox } from "@zerry-ui/components";
import { DrawerContainerProps } from "./DrawerContainer.types";
import { SafeAreaView } from "react-native";

export const DrawerContainer: React.FC<
  React.PropsWithChildren<DrawerContainerProps>
> = ({ width, children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlexBox flex={1} vertical width={width}>
        {children}
      </FlexBox>
    </SafeAreaView>
  );
};
