import React from "react";
import './sidebargroup.css';

const SidebarGroup = ({
    children,
    className,
    style,
    ...props
}) => {
    const ClassName = `sidebar-group ${className || ''}`;

    return (
        <section
            className={ClassName}
            style={style}
            {...props}
        >
            {children}
        </section>
    )
}

export default SidebarGroup;