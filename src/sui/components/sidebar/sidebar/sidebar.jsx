import React from "react";
import './sidebar.css';

const Sidebar = ({children, className, style, ...props}) => {
    const ClassName = `sidebar-gray ${className || ''}`;
    
    return (
        <aside className={ClassName} style={style} {...props}>{ children }</aside>
    )
}

export default Sidebar;