import React from "react";

const SidebarContent = ({children, className, style, ...props}) => {
    const ClassName = `sidebar-content ${className || ''}`;
    
    return (
        <div className={ClassName} style={style} {...props}>{ children }</div>
    )
}

export default SidebarContent;