import React from "react";

const SidebarDemo = ({children, className, style, ...props}) => {
    const ClassName = `sidebar-demo ${className || ''}`;
    return (
        <aside className={ClassName} style={style} {...props}>{ children }</aside>
    )
}

export default SidebarDemo;

//Only for Docs use width no collapse in mobile screen