import React from "react";
import { Link } from "react-router-dom";
import './image.css';

const ImageLink = ({ to, className, label, src, alt, logoclassName, style }) => {
    const ClassName = `logo-image ${logoclassName || ''}`;
    return (
        <Link to={to} className={className} aria-label={label}>
            <img src={src} alt={alt} className={ClassName} style={style}/>
        </Link>
    )
 }

export default ImageLink;