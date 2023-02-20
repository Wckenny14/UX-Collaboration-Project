import { NavLink } from 'react-router-dom';
import React from "react";

const NavLinks = (props) => {
        return (
            <ul id='mobNavLinks'>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/newsletter">Newsletter</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink to="/home">Home</NavLink>
                </li>
            </ul>
        )
    }
export default NavLinks

