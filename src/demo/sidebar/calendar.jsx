import React from "react";
import '../styles/styles.css'
import { Divider, H2, SidebarProvider } from "sui/components";
import DemoSideBarComponent from "components/layout/sidebarlayout";

export default function DemoCalendarPage() {
    return (
        <div className="body-light">
            <SidebarProvider>
                <DemoSideBarComponent />
                <div className="content-box-spacing">
                    <div className="content-box">
                        <H2>Calendar</H2>
                        <Divider />
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}