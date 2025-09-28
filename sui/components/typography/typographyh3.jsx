import React from "react";
import "./typography.css";

const TypographyH3 = ({ children, className, style }) => {
    const ClassName = `typography-h3 m-0 ${className || ''}`;
    return (
        <h3 className={ClassName} style={style}>
            {children}
        </h3>
    )
}

export default TypographyH3;