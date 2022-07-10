import { Link } from "../../Link";
import React from "react";
import ListItem from "../../../data/ListItem";
import { MenuItemLinkProps } from "./MenuItemLink.types";
import Icon from "../../../global/Icon";

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ title, to, name, onPress, icon }) => {
  return (
    <ListItem paddingHorizontal={12} paddingVertical={8}>
        {icon && (
            <Icon name={icon} size={20} paddingRight={12} />
        )}
      <Link to={to} name={name} onPress={onPress} fontSize="medium" fontWeight={600}>
        {title}
      </Link>
    </ListItem>
  );
};

export default MenuItemLink;
