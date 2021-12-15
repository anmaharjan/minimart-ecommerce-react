import React, {useState} from 'react';

import {Layout, Menu} from 'antd';
import './style.css';
import {Link, NavLink} from "react-router-dom";

const {Header} = Layout;

const SellerNav = () => {
    return (
        <Header className="nav-bar-header">
            <Menu className="nav-bar-menu" theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <NavLink to="/">
                        <span>Home</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/add-product">
                        <span>Add Products</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/order">
                        <span>Orders</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/profile">
                        <span>My Profile</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to="/logout">
                        <span>Logout</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default SellerNav;