import React from "react";
import './divider.css';

const Divider = ({ className, style}) => {
    const ClassName = `divider ${className || ''}`;
    
    return (
        <hr className={ClassName} style={style}/>
    )
 }

export default Divider;