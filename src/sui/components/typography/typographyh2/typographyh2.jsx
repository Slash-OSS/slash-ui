import React from "react";
import './typographyh2.css';

const H2 = ({
    children,
    className
}) => {
    const ClassName = `typography-h2 ${className || ''}`;

    return (
        <h2
            className={ClassName}
        >
            {children}
        </h2>
    )
 }

export default H2;