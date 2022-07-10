import React from 'react';
import MenuItemLink from '../MenuItemLink';
import { MenuItemProps } from './MenuItem.types';

const MenuItem: React.FC<MenuItemProps> = ({ title, to, name, icon }) => {
    return (
        <MenuItemLink to={to} name={name} title={title} paddingHorizontal={4} paddingVertical={4} icon={icon} />
    );
}

export default MenuItem;
