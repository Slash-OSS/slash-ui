import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import styles from "./link.module.css";

const VARIANTS = {
    None: styles.deconone
};

const Link = ({
    variant = "None",
    to,
    target,
    label,
    children,
    style,
    className = "",
    ...props
}) => {
    const ClassName = `${VARIANTS[variant] || ''} ${className}`.trim();

    return (
        <RouterLink
            to={to}
            className={ClassName}
            target={target}
            aria-label={label}
            style={style}
            {...props}
        >
            {children}
        </RouterLink>
    );
};
 
Link.propTypes = {
  variant: PropTypes.oneOf(["None"]),
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Link;