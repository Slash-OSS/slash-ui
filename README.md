# SlashUI

A component system for building products with speed. SlashUI helps you ship **accessible, reusable, and production-ready UI components** faster — so you can focus on building your product.

---

![SlashUI Screenshot](https://github.com/connectwithshivamk/connectwithshivamk/blob/main/firstv-sidebar.png?raw=true)

---

## Features

* Pre-built, reusable **UI components** .
* Composable **blocks** and templates for real-world applications.
* Accessibility-first and responsive by default.
* Framework-agnostic design (usable in React, Vue, Next.js, TailwindCSS, and other modern frameworks).
* The integrated light/dark mode component lets users instantly switch themes.
* Built for scalability.

---

Installation 

Add SlashUI to your Project:

## Import Usage
Import Sidebar and related blocks in your React Project:

```import {
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
} from 'sui/components';
```

---

## Documentation & API Reference

Find detailed guides and API documentation for individual components:

- [Sidebar Component API Reference](https://github.com/Slash-OSS/slash-ui/tree/main/src/sui/components/sidebar)

---

## Sidebar Component Overview

- **Sidebar**: The root container for sidebar layout.
- **SidebarHeader**: Section for branding elements like logos and titles.
- **SidebarContent**: Wraps navigation blocks.
- **SidebarGroup**: Groups navigation items logically.
- **SideMenuItem**: Displays individual links (with optional icons).
- **SidebarFooter**: Section for user info and actions.
- **Supporting Components**: `Link`, `Image`, `Avatar`, and `P` for structured, styling, reusable UI parts.

---

## Sidebar Usage Example

```<Sidebar>
<SidebarHeader>
<Link to="/">
<Image variant="AvatarSmall" src={logo} alt="Site Logo" />
<P>App Title</P>
</Link>
</SidebarHeader>

<SidebarContent>
<SidebarGroup>
<SideMenuItem items={menuItems} />
</SidebarGroup>
</SidebarContent>

<SidebarFooter>
<Link to="/profile">
<Avatar src={userImage} alt="User Profile" variant="SquareSmall" />
<P>{username}</P>
</Link>
</SidebarFooter>
</Sidebar>
```

## Getting Started

### Local Development 

```bash
git clone https://github.com/Slash-OSS/slash-ui.git
cd slash-ui
npm install  
npm run dev
```
---

## Documentation

Upcoming: Docs and guides are available at:
Visit https://www.slashainow.com

---

## Customization

- Multiple menu layout and icon options.
- Style using CSS modules or global stylesheets.
- Easily extend or swap sidebar blocks as needed.

## Accessibility

- Semantic HTML elements for structure.
- All images and links use valid alt and aria attributes.
- Supports keyboard users and screen readers out of the box.

---

## Upcoming Enhancements

- Dynamic menu configuration via props or external data.
- Collapsible and expandable sidebar groups.
- Mobile-responsive sidebar with toggle.
- Theme support (light and dark modes).

---

## Support 

Bug reports, and feature suggestions are welcome! Visit our GitHub Repo:
[SlahUI Repo](https://discord.gg/kw5wVaBkN8).

Your support helps build **better components for everyone**.

## License

This project is licensed under the MIT License.

