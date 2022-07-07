import { Button, FlexBox, Heading2, TextInput } from "@zerry-ui/components";
import { Platform } from "react-native";
import React from "react";

const EditProfile = () => {
  return (
    <FlexBox
      vertical
      flex={1}
      backgroundColor="#ffffff"
      alignItems="center"
    >
      {Platform.OS === "web" && <Heading2>Edit Profile</Heading2>}
      <FlexBox
        flex={1}
        horizontal
        padding={24}
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
      >
        <FlexBox flex={1} vertical maxWidth={500} flexBasis="500px">
          <FlexBox marginBottom={16}>
            <TextInput placeholder="First Name" />
          </FlexBox>
          <FlexBox marginBottom={16}>
            <TextInput placeholder="Last Name" />
          </FlexBox>
          <FlexBox marginBottom={16}>
            <TextInput placeholder="08/11/1995" />
          </FlexBox>
          <FlexBox horizontal justifyContent="flex-end">
            <Button status="success">Submit</Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default EditProfile;
