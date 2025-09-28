import React from "react";
import "./typography.css";

const TypographyH4 = ({ children, className, style }) => { 
    const ClassName = `typography-h4 m-0 ${className || ''}`;
    return (
        <h4 className={ClassName} style={style}>
            {children}
        </h4>
    )
}

export default TypographyH4
