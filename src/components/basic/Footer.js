import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <Navbar fixed="bottom">
            <Navbar.Brand>&copy; {new Date().getFullYear()} Footer</Navbar.Brand>
        </Navbar>
    )
}
export default Footer;