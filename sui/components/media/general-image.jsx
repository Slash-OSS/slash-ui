import React from "react";
import './image.css';

const Image = ({ variant, src, alt, className }) => {

    switch (variant) {
    case "logoImage":
        className = "logo-image";
        break;
    case "BorderImage":
        className = "border-image";
        break;
    case "Cloudlogo":
        className = "cloud-logo";
    break;
    case "cloudBoxlogo":
        className = "component-cloudlogo";
        break;
    case "Avatar":
        className = "avatar";
        break;
    case "Image":
        default:
        className = "image-card";
        break;
    }

    const ClassName = `${className || ''}`;
    return (
        <img src={src} alt={alt} className={ClassName} />
    )
 }

export default Image;