import React from "react";
import '../styles/index.css';

const Button = ({ variant, onClick, className, style, children, id}) => {

    switch (variant) {
        case "small":
            className = "small";
            break;
        case "large":
            default:
            className = "large";
            break;
    }

  const handleClick = (event) => {
    if (onClick) onClick(event); 
  };

    const ClassName = `${className || ''}`;
    return (
        <button onClick={handleClick} className={ClassName} style={style} id={id}>
            {children}
        </button>
    )
 }

export default Button;