import React from "react";
import './typographyp.css';

const P = ({
    children,
    className,
    style
}) => {
    const ClassName = `typography-p ${className || ''}`.trim();

    return (
        <p
            className={ClassName}
            style={style}
        >
            {children}
        </p>
    )
 }

export default P;