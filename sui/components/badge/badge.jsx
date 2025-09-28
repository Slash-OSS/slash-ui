import React from "react";
import '../styles/index.css';

const Badge = ({ variant, className, style, children }) => {
    switch (variant) { 
        case "rounded":
            className = "rounded-badge";
            break;
        case "outline":
            className = "outline-badge";
            break;
        case "square":
            default:
            className = "square-badge";
            break;
    }
    
    const ClassName = `${className || ''}`;
    return (
        <span className={ClassName} style={style}>{children}</span>
    )
}

export default Badge;