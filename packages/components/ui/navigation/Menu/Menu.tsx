import React from "react";
import { VariableHeightList } from "../../data/List";
import { FlexBox } from "../../layout/Box";
import type { MenuProps } from "./Menu.types";

const Menu: React.FC<MenuProps> = ({ children, ...rest }) => {
  return (
    <FlexBox vertical flex={1} {...rest}>
      <VariableHeightList
        data={React.Children.toArray(children)}
        getItemId={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <>{item}</>;
        }}
      />
    </FlexBox>
  );
};

export default Menu;
