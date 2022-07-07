import { Button, FlexBox, TextInput } from "@zerry-ui/components";
import React from "react";

const EditProfile = () => {
  return (
    <FlexBox flex={1} vertical padding={24} backgroundColor="#ffffff" maxWidth={500}>
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
  );
};

export default EditProfile;
