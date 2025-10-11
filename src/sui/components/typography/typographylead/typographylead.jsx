import React from "react";
import './typographylead.css';

const Lead = ({
    children,
    className,
    style
}) => {
    const ClassName = `typography-lead ${className || ''}`.trim();

    return (
        <p
            className={ClassName}
            style={style}
        >
            {children}
        </p>
    )
 }

export default Lead;