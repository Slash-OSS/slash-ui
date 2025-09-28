import React from "react";
import { ImageLink } from "../../../sui";
import logo from "../../slashui-logo.png";

export default function LogoImage() { 
    return (
        <ImageLink
            src={logo}
            alt="Site logo"
            to="/"
        />
    )
}
