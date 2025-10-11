import React from "react";
import { NavLink } from "react-router-dom";
import './sidemenu.css';

const SideMenuItem = ({
    items = [],
    className,
    style,
    liClassName,
    linkClassName,
    pointClassName,
    variant,
    targetAttribute
}) => { 
    const ClassName = `sidebar-menu ${className || ''}`;

    return (
        <ul className={ClassName} style={style}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`sidebar-menu-item ${liClassName || ''} ${item.bold ? 'bold' : ''}`.trim()}
                >
                    {item.plainText ? (
                        <span className={pointClassName}>{item.name}</span>
                    ) : (
                        <NavLink
                            to={item.to} 
                            className={({ isActive }) => 
                            `sidebar-menu-link sidebar-item-wrapper ${linkClassName} ${isActive ? "active" : ""}`.trim()
                            }
                            {...(targetAttribute && { target: item[targetAttribute] })}
                            >
                            {item.icon && <span>{item.icon}</span>}
                            {item.name}
                        </NavLink>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default SideMenuItem;