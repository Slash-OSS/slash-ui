import React from "react";
import { Link as RouterLink } from "react-router-dom";
import './linktext.css';

const LinkText = ({ className, to, target, label, children, style}) => {
    const ClassName = `link-text ${className || ''}`.trim();
    return (
        <RouterLink
            to={to}
            className={ClassName}
            target={target}
            aria-label={label}
            style={style}
        >
            {children}
        </RouterLink>
    )
 }

export default LinkText;