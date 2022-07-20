import { FlexBox, Icon, Text } from "@zerry-ui/components";
import { useDrawerNavigation } from "@zerry-ui/navigation";
import React from "react";
import { useTheme } from "styled-components/native";

const Header = () => {
  const theme = useTheme();
  const { toggleDrawer, drawerType } = useDrawerNavigation();

  return (
    <FlexBox
      horizontal
      height={50}
      backgroundColor={theme.colors.primary.dark}
      alignItems="center"
      justifyContent="space-between"
      padding={theme.spacing.medium}
    >
      <FlexBox horizontal alignItems="center">
        {drawerType !== "permanent" && (
          <Icon
            name="bars"
            size={20}
            color={theme.colors.white.default}
            onPress={toggleDrawer}
          />
        )}
        <FlexBox marginLeft={drawerType === "permanent" ? 0 : 12}>
          <Text color="#ffffff" fontSize="large" fontWeight="bold">
            Sample UI
          </Text>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <Icon name="user-circle" size={24} color={theme.colors.white.default} />
      </FlexBox>
    </FlexBox>
  );
};

export default Header;
