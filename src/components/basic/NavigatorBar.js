import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { menuCall } from "../../api/BaseApi";

const NavItem = ({title, path}) => {
    return (
        <Nav.Item>
            <Nav.Link eventKey={title} as={Link} to={path}>{title}</Nav.Link>
        </Nav.Item>
    )
}


const NavigatorBar = () => {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        const getMenus = async () => {
            await menuCall().then((res) => setMenuList(res.data))
        };
        getMenus();
    }, [])

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Nav fill variant="pills" defaultActiveKey="Main">
                {menuList.map((item, index) => (
                    <NavItem {...item} key={index} />
                ))}
            </Nav>
        </Navbar>
    )
}
export default NavigatorBar;