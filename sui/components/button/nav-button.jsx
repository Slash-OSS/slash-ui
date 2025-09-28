import React from "react";
import { Link } from "react-router-dom"
import '../styles/index.css'

const NavButton = ({ to, className, style, children, variant, target }) => {

    switch (variant) {
        case "small":
        default:
            className = "small";
            break;
        case "large":
            className = "large";
            break;
    }

    return (
        <Link to={to} target={target}>
            <button className={className} variant={variant} style={style}>{children}</button>
        </Link>
    )
 }

export default NavButton;