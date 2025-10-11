import React from "react";

const SidebarHeader = ({
    children,
    className,
    style,
    onClick,
    ...props
}) => {
    const ClassName = `sidebar-header ${className || ''}`;

    return (
        <div className={ClassName}>
            <button
                className={`sidebar-header-wrapper sidebar-header-button ${className || ''}`}
                style={style}
                {...props}
                onClick={onclick}
            >
                {children}
            </button>
        </div>
    )
}

export default SidebarHeader;