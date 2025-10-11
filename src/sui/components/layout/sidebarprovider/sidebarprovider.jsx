import React from "react";
import './sidebarprovider.css'

const SidebarProvider = ({ children, className, style }) => {
    const ClassName = `sidebar-provider-wrapper ${className || ''}`;
    
    return (
        <div className={ClassName} style={style}>
            {children}
        </div>
    )
}

export default SidebarProvider;