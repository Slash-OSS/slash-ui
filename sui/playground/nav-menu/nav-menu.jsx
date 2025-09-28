import React from "react";
import { NavMenu } from "../../../sui";
import '../../../sui/components/styles/index.css';

const menu = [
  { name: "GitHub", to: "https://github.com/Slash-OSS/slash-ui", target: "_blank" },
];

export default function NavigationMenu() { 
    return (
        <NavMenu
            items={menu}
            linkClassName="decor-none gray-950 text-sm"
            targetAttribute="target" />
    )
}
