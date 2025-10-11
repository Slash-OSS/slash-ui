import React from "react";

import Profile from "../../shivamk-profile.JPG";
import Logo from "../../slash-icon.png";

import {
    SuiDownArrowUpDownIcon,
    SuiHomeIcon,
    SuiInboxIcon,
    SuiCalendarIcon,
    SuiSearchIcon,
    SuiSettingIcon,
    SuithreeDotIcon,
} from "sui/svg";

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SideMenuItem,
    SidebarFooter,
    Link,
    Image,
    Avatar,
    P
} from "sui/components";

import INFO from "../../data/sidebar";

const MenuFirst = [
  { name: "Application", plainText: true, bold:true },
  { name: "Home", to: "/demo/homepage", icon: <SuiHomeIcon /> },
  { name: "Inbox", to: "/demo/inbox", icon: <SuiInboxIcon />},
  { name: "Calendar", to: "/demo/calendar", icon: <SuiCalendarIcon /> },
  { name: "Search", to: "/demo/search", icon: <SuiSearchIcon />},
  { name: "Settings", to: "/demo/settings", icon: <SuiSettingIcon />},
];

export default function DemoSideBarComponent() { 
    return (
        <Sidebar>
            <SidebarHeader>
                <Link to="/demo/homepage">
                    <Image variant="AvatarSmall" src={Logo} alt="Site logo" />
                    <P>{INFO.setting.title}</P>
                </Link>
                <SuiDownArrowUpDownIcon />
            </SidebarHeader>    

            <SidebarContent>
                <SidebarGroup>
                    <SideMenuItem
                        items={MenuFirst}
                        targetAttribute="target"
                    />
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <Link to="/demo/homepage">
                    <Avatar variant="SquareSmall" src={Profile} alt="User Profile" />
                    <P className="small-p" children={INFO.user.username} />
                </Link>
                <SuithreeDotIcon />
            </SidebarFooter>
        </Sidebar>
    )
}