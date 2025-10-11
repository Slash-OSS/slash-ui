import React from "react";

const SidebarFooter = ({
    children,
    className,
    style,
    onClick,
    ...props
}) => {
    const ClassName = `sidebar-footer ${className || ''}`;

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

export default SidebarFooter;