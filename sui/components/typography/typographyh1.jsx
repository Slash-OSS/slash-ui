import React from "react";
import "./typography.css";

const TypographyH1 = ({ className, style, children }) => {
    const ClassName = `typography-h1 m-0 ${className || ''}`;
    return (
        <h1 className={ClassName} style={style}>
            {children}
        </h1>
    )
}

export default TypographyH1;