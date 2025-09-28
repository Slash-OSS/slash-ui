import React from "react";
import "./typographylead";

const TypographyLead = ({ children, className, style }) => { 
    const ClassName = `typography-lead m-0 ${className || ''}`;
    return (
        <p className={ClassName} style={style}>
            {children}
        </p>
    )
}

export default TypographyLead;