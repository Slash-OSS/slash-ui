import React from "react";
import "./typography.css";

const TypographyP = ({ children, className, style }) => {
    const ClassName = `typography-p m-0 ${className || ''}`;
    return (
        <p className={ClassName} style={style}>
            {children}
        </p>
    )
}

export default TypographyP;