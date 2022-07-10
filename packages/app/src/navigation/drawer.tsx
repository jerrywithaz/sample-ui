import { FlexBox, Menu, MenuItem } from "@zerry-ui/components";
import { DrawerContainer } from "@zerry-ui/navigation";
import React from "react";

const Drawer = () => {
  return (
    <DrawerContainer width={200}>
      <FlexBox flex={1} vertical width={200} paddingVertical={8}>
        <Menu>
          <MenuItem title="Home" to="/" name="Home" />
          <MenuItem title="Profile" to="/profile" name="EditProfile" />
          <MenuItem title="Patient History" to="/history" name="PatientHistory" />
        </Menu>
      </FlexBox>
    </DrawerContainer>
  );
};

export default Drawer;
