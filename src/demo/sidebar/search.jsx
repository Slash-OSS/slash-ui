import DemoSideBarComponent from "components/layout/sidebarlayout";
import React from "react";
import { Divider, H2, SidebarProvider } from "sui/components";

export default function DemoSearchPage() {
    return (
        <div className="body-light">
            <SidebarProvider>
                <DemoSideBarComponent />
                <div className="content-box-spacing">
                    <div className="content-box">
                        <H2>Search</H2>
                        <Divider />
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}