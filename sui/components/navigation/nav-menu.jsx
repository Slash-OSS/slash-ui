import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css';

const NavMenu = ({ items=[], className, style, linkClassName, targetAttribute}) => { 
    const ClassName = `navmenu-wrapp ${className || ''}`;
    return (
        <ul className={ClassName} style={style}>
            {items.map((item, index) => (
                <li key={index}>
                    <Link to={item.to} className={linkClassName}
                        {...(targetAttribute && { target: item[targetAttribute] })}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavMenu;

