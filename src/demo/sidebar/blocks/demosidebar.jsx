import React from "react";

import {
    SuiCalendarIcon,
    SuiDownArrowUpDownIcon,
    SuiHomeIcon,
    SuiInboxIcon,
    SuiSearchIcon,
    SuiSettingIcon,
    SuithreeDotIcon,
} from "sui/svg";

import {
    SidebarHeader,
    Link,
    Image,
    SidebarContent,
    SidebarGroup,
    SideMenuItem,
    SidebarFooter,
    Avatar,
    P
} from "sui/components";

import INFO from "data/sidebar";
import Profile from "../../../shivamk-profile.JPG"
import Logo from "../../../slash-icon.png";
import SidebarDemo from "sui/components/sidebar/sidebarcontent/sidebar.demo";

const MenuFirst = [
  { name: "Application", plainText: true, bold:true },
  { name: "Home", to: "/demo/sidebar/home", icon: <SuiHomeIcon /> },
  { name: "Inbox", to: "/demo/sidebar/home", icon: <SuiInboxIcon />},
  { name: "Calendar", to: "/demo/sidebar/home", icon: <SuiCalendarIcon /> },
  { name: "Search", to: "/demo/sidebar/home", icon: <SuiSearchIcon />},
  { name: "Settings", to: "/demo/sidebar/home", icon: <SuiSettingIcon />},
];

export default function DemoSideBarComponent() { 
    return (
        <SidebarDemo>
            <SidebarHeader>
                <Link to="/demo/sidebar/home">
                    <Image variant="AvatarSmall" src={Logo} alt="Site logo" />
                    <P children={INFO.setting.title} />
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
                <Link to="/demo/sidebar/home">
                    <Avatar variant="SquareSmall" src={Profile} alt="User Profile" />
                    <P className="small-p" children={INFO.user.username} />
                </Link>
                <SuithreeDotIcon />
            </SidebarFooter>
        </SidebarDemo>
    )
}