import React from "react";
import "./typography.css";

const TypographyH2 = ({ className, style, children}) => { 
    const ClassName = `typography-h2 m-0 ${className || ''}`
    return (
        <h2 className={ClassName} style={style}>
            { children }
        </h2>
    )
}

export default TypographyH2;