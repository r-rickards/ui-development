# Layout

### Application layout

**/components/layout/Layout.js** controls the layout throughout the application.

The rest of the components in the directory support this layout - anything that is part of the **Frame** or **Chrome** of the application - it persists for the life of the application. It is a container for routes and facilitates navigating to views.

```
│   ├── layout
│   │   ├── Layout.js
│   │   ├── Nav.js
│   │   ├── NavActions.js
│   │   ├── NavBar.js
│   │   ├── NavDrawer.js
│   │   ├── NavTabs.js
│   │   ├── ThemeToggle.js
│   │   └── UserMenu.js
```

The layout is resposive.

-   On Desktop - Tabs on the AppBar allow navigating the [routes]() of the application.

<img src="/Users/rick/develpment/documentation-markdown/images/Layout-Desktop-Dark.png" alt="navigation" title="navigation" />

-   On Mobile - A MenuList in the Drawer facilitate this.

<img src="/Users/rick/develpment/documentation-markdown/images/Layout-Mobile-Dark.png" alt="navigation" title="navigation" width="25%" />

By embedding the routes in the layout container, views need not be concerned with providing navigation or layout.

```html
<div>
    <nav toggleTheme="{this.toggleTheme}" />
    <Grid container spacing="{0}" justify="center" className="{classes.root}">
        <Grid item xs="{12}">
            <Routes />
        </Grid>
    </Grid>
</div>
```

<img src="https://material-ui.com/static/images/material-ui-logo.svg" alt="material ui" title="material ui" width=50 align=right style="margin-top: 20px" />

### Component layout

At a more granular level, components use the [Material Grid component](https://material-ui.com/components/grid/).

```html
<Grid container spacing="{0}" justify="center" className="{classes.root}">
    <Grid item xs="{12}">
        <Routes />
    </Grid>
</Grid>
```

💡 **Tip:** Grid containers get the direction, spacing, justify and alignItems attributes.

Try the [Interactive tool](https://material-ui.com/components/grid/#interactive) to visually see settings.

Use breakpoints to layout repsonsively.

```javascript
xs={12} md={9}
```

Use <Hidden> to hide on breakpoints.

```javascript
import Hidden from '@material-ui/core/Hidden';

<Hdden xsDown>
    // components to hide on extra small devices
</Hidden>
```

# Roadmap

Refactor tabs and menus to conditionaly render instead of hiding and showing - using the user apps array.

https://codesandbox.io/s/material-ui-layout-v129-7mn9xq3nnj?from-embed

https://mui-treasury.com/layout-builder

https://siriwatknp.github.io/mui-layout/?path=/story/welcome--get-started

https://siriwatknp.github.io/mui-layout/?path=/story/welcome--configuration

```javascript
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Icon from '@material-ui/core/Icon';
import { Root, Header, Nav, Content, Footer } from './Layout';

const config = {
    navAnchor: 'left',
    navVariant: {
        xs: 'temporary',
        sm: 'temporary',
        md: 'permanent'
    },
    navWidth: {
        xs: 240,
        sm: 256,
        md: 256
    },
    collapsible: {
        xs: true,
        sm: true,
        md: true
    },
    collapsedWidth: {
        xs: 64,
        sm: 64,
        md: 64
    },
    clipped: {
        xs: true,
        sm: true,
        md: true
    },
    headerPosition: {
        xs: 'fixed',
        sm: 'fixed',
        md: 'fixed'
    },
    squeezed: {
        xs: true,
        sm: true,
        md: true
    },
    footerShrink: {
        xs: false,
        sm: false,
        md: true
    }
};

const App = () => (
    <Root config={config} style={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Header
            menuIcon={{
                inactive: <Icon>menu</Icon>,
                active: <Icon>arrow_back</Icon>
            }}
        >
            {/* header goes here */}
        </Header>
        <Nav
            collapsedIcon={{
                inactive: <Icon>arrow_back</Icon>,
                active: <Icon>arrow_forward</Icon>
            }}
            header={
                // you can provide fixed header inside nav
                // change null to some react element
                ctx => null
            }
        >
            {/* nav goes here */}
        </Nav>
        <Content>{/* content goes here */}</Content>
        <Footer>{/* footer goes here */}</Footer>
    </Root>
);

export default App;
```
