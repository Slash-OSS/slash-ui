import React from "react";
import '../introduction/introduction.css'
import { Divider, H2, Lead, LinkText, P } from "sui/components";

export default function DocsIntroduction() {
    return (
        <div className="body-light">
                <div className="content-box-spacing">
                    <div className="content-blank-box">
                        <H2 className="typography-space small-h2">Get started with SlashUI</H2>
                        <Lead>SlashUI a component system for building products with speed. SlashUI helps you ship accessible, reusable, and production-ready UI components faster — so you can focus on building your product.</Lead>
                        <Divider />
                        <P className="typo-primary-space">Component: <LinkText to="/demo/sidebar/home" target="_blank">Sidebar Component</LinkText></P>
                        <P className="typo-primary-space">Block: <LinkText to="/demo/homepage" target="_blank">Sidebar Block</LinkText></P>
                        <Divider/>
                        <P className="typo-primary-space">Visite SlashUI: <LinkText to="https://github.com/Slash-OSS/slash-ui" target="_blank">GitHub Repo</LinkText></P>
                        <P className="typo-primary-space">Chat with us on: <LinkText to="https://wa.me/+916307765305?text=Welcome%20SlashUI!" target="_blank">WhatsApp</LinkText></P>
                    </div>
                </div>
        </div>
    )
}
