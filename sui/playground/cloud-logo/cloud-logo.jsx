import React from "react";
import { Image } from "../../../sui";
import Images from "../../assets/image";

export default function CloudLogo() { 

    return (
        <div className="cloudlogo-wrapper">
            <Image
                src={Images.ReactLogo}
                variant="Cloudlogo"
                alt="Site logo"
            />
            <Image
                src={Images.NextLogo}
                variant="Cloudlogo"
                alt="Site logo"
            />
            <Image
                src={Images.ViteLogo}
                variant="Cloudlogo"
                alt="Site logo"
            />
            <Image
                src={Images.TailwindLogo}
                variant="Cloudlogo"
                alt="Site logo"
            />
        </div>

    )
}

