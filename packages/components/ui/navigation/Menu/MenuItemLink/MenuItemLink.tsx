import { Link } from "../../Link";
import React from "react";
import ListItem from "../../../data/ListItem";
import { MenuItemLinkProps } from "./MenuItemLink.types";

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ title, to, name, onPress }) => {
  return (
    <ListItem paddingHorizontal={4} paddingVertical={4} >
      <Link to={to} name={name} onPress={onPress}>
        {title}
      </Link>
    </ListItem>
  );
};

export default MenuItemLink;
