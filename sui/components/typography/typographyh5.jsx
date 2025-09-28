import React from "react";
import "./typography.css";

const TypographyH5 = ({ children, className, style }) => {
    const ClassName = `typography-h5 m-0 ${className || ''}`
    return (
        <h5 className={ClassName} style={style}>
            {children}
        </h5>
    )

}

export default TypographyH5;