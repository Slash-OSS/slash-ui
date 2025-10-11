import React from "react";
import PropTypes from 'prop-types';
import styles from "./image.module.css";

const VARIANTS = {
  LogoImage: styles.logoimage,
  AvatarSmall: styles.avatarsmall,
  outline: styles.outline,
};

const Image = ({ variant = "LogoImage", src, alt, className = "", ...props }) => {
  const ClassName = `${VARIANTS[variant] || ""} ${className}`.trim();
  
    return (
        <img src={src} alt={alt} className={ClassName} {...props} />
    )
 }

Image.propTypes = {
  variant: PropTypes.oneOf(["LogoImage", "secondary", "outline"]),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;