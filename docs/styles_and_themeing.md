# Styles & Theming

Code Time has dark

<img src="/Users/rick/develpment/documentation-markdown/images/Layout-Desktop-Dark.png" alt="navigation" title="navigation" />

and light themes.

<img src="/Users/rick/develpment/documentation-markdown/images/Layout-Desktop-Light.png" alt="navigation" title="navigation" />

-   Use style classes with `className`; avoid using inline styles - `style`.

💡 **Tip:** No css preprocessors are used.

## Theme directory

All `.css` files are stored in the **/Theme** directory

```
├── theme
│   ├── DarkTheme.js
│   ├── LightTheme.js
│   ├── calendar-events.css
│   ├── constants.js
│   ├── grid-lines.css
│   ├── overrides
│   │   ├── react-big-calendar.css
│   │   └── react-datetime.css
│   └── theme.css
```

### Overrides

The **/overrides** directory contains overrides for third party package styles.

-   Only selectors with rules that need to be overridden
-   Only rules that need overriding

Each third party package with styles should have it's own overrides file. This keeps things organized, as plugins are often changed.

### Loading the css files.

The application's **index.js** imports **theme.css**.

```javascript
import 'theme/theme.css';
```

**theme.css** imports Google fonts, the styles from plugins, followed by their overrides, some application wide styles followed by named-spaced styles for .lightTheme and .darkTheme.

```javascript
/* fonts & icons */
@import url("//fonts.googleapis.com/css?family=Nunito:300,400,500,600|Poppins:300,400,500,600|Material+Icons");

/* library css '~' imports from node modules directory */
@import "~react-big-calendar/lib/css/react-big-calendar.css";
@import "~react-datetime/css/react-datetime.css";
@import "~react-circular-progressbar/dist/styles.css";

/* overrides for libraries */
@import "./overrides/react-big-calendar.css";
@import "./overrides/react-datetime.css";

/* shared styles */
@import "./calendar-events.css";

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

html {
    outline: none !important;
    border: 0 !important;
}

body {
    font-family: "Nunito", sans-serif;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
}

.lightTheme .codyMessage {
    background: #e4f3fb !important;
    border: 1px solid #bce4f8;
}

.darkTheme .codyMessage {
    background: rgba(31, 32, 35, 0.35) !important;
    border: none;
}

...

```

### Constants

Enforce consistency without redundancy with constants - stored in **constants.js**. Example:

```json
sw_blue: "#00b4ee"
```

<img src="https://material-ui.com/static/images/material-ui-logo.svg" alt="material ui" title="material ui" width=50 align=right />

## Component styles

The application uses the [Material-UI](https://material-ui.com/styles/basics/) styling solution which has adopted [CSS in JS](https://cssinjs.org/?v=v10.0.0-alpha.24).

<img src="https://raw.githubusercontent.com/jsstyles/logo/master/logo.png" alt="jss" title="jss" width=45 align=right />

Learn about [jss](https://cssinjs.org/?v=v10.0.0-alpha.24).

We currently use the [Higher-order component API](https://material-ui.com/styles/basics/#higher-order-component-api) approach to styling components.

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import constants from "theme/constants";

const styles {
    btn: {
        backgroundColor: constants.colors.sw_blue
    }
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.btn}>Higher-order component</Button>;
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
```

<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" title="react" width=45 align=right style="margin-top: 15px" />
<img src="./images/transparent.png"  />

But plan to move to the [Hook API](https://material-ui.com/styles/basics/#hook-api) - as we migrate our React stateful class components to functions using the [React Hooks API](https://reactjs.org/docs/hooks-intro.html).

```javascript
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import constants from 'theme/constants';

const useStyles = makeStyles({
    btn: {
        backgroundColor: constants.colors.sw_blue
    }
});

export default function Hook() {
    const classes = useStyles();
    return <Button className={classes.btn}>Hook</Button>;
}
```

## Theme provider

### LIGHT ☼ | DARK ☽

The theme providier is configured in **/components/layout/Layout.js**. This is where theme toggling is handled.

```javascript
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { checkTheme } from "utils/checkTheme";
import Nav from "./Nav";
import Routes from "components/views/Routes";
import light from "theme/LightTheme";
import dark from "theme/DarkTheme";

const body = document.querySelector("body");

class Layout extends Component {
    state = {
        isDark: false
    };

    componentDidMount() {
        const isDark = checkTheme();
        this.setState({ isDark });
        this.setBodyClass(isDark);
    }

    setBodyClass(isDark) {
        if (isDark) {
            body.classList.add("darkTheme");
            body.classList.remove("lightTheme");
        } else {
            body.classList.add("lightTheme");
            body.classList.remove("darkTheme");
        }
    }

    toggleTheme = () => {
        const isDark = checkTheme();
        localStorage.setItem("isDark", !isDark);
        this.setState({
            isDark: !isDark
        });
        this.setBodyClass(!isDark);
    };

    render() {
        const { classes } = this.props;
        const { isDark } = this.state;
        const theme = createMuiTheme(checkTheme() ? dark : light);

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div {isDark && { className: "darkTheme" }}>
                    <Nav toggleTheme={this.toggleTheme} />
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={12}>
                            <Routes />
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Layout;

```

Eample theme configuration file `DarkTheme.js`.

<img src="https://material-ui.com/static/images/material-ui-logo.svg" alt="material ui" title="material ui" width=50 align=right style="margin-top: -20px" />

-   Find out more about [Material Theming](https://material-ui.com/customization/theming/).

```javascript
import constants from 'theme/constants';

export const dark = {
    palette: {
        type: 'dark'
    },
    typography: {
        useNextVariants: true,
        fontSize: 14,
        fontFamily: 'Nunito'
    },
    shape: {
        borderRadius: 3
    },
    spacing: {
        unit: 8
    },
    props: {
        MuiAppBar: {
            elevation: 0
        },
        MuiButtonBase: {
            disableRipple: true // No more ripple throughout application
        },
        MuiButton: {},
        MuiCard: {
            elevation: 0
        },
        MuiSnackbar: {
            autoHideDuration: 6000,
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
        },
        MuiTabs: {
            variant: 'fullWidth'
        },
        MuiToolbar: {
            variant: 'dense'
        }
    },
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    // Override material ui component style throughout application
    overrides: {
        MuiAppBar: {
            root: {
                background: constants.colors.backgroundDark + '!important',
                flexShrink: 0,
                color: '#fff!important'
            }
        }
    }
};

export default dark;
```

## Fonts

https://fonts.google.com/

https://github.com/KyleAMathews/typefaces

## Scrollbars

https://github.com/xobotyi/react-scrollbars-custom

```html
<div class="twlo-product-diagram__overlay">
    <div class="twlo-product-diagram__overlay-body">
        When your phone number receives an incoming message, Twilio will send an
        HTTP request to your server at /sms
    </div>
    <div class="twlo-product-diagram__overlay-number">
        <div class="twlo-product-diagram__overlay-number-inner">1</div>
    </div>
</div>
```

```css
.twlo-product-diagram {
    position: relative;
    max-width: 700px;
    height: 25rem;
    margin: 1rem;
    margin-top: 2rem;
    margin-bottom: 6rem;
    z-index: 0;
}

.twlo-product-diagram__label {
    @include fine-print-uppercase;
    position: absolute;
}

@keyframes pulseRed {
    0% {
        box-shadow: 0 0 0 0 rgba($red, 0.4);
    }
    70% {
        box-shadow: 0 0 0 1rem transparent;
    }
    100% {
        box-shadow: 0 0 0 0 transparent;
    }
}

.twlo-product-diagram__overlay {
    position: absolute;
    cursor: default;
    z-index: 10;
}

.twlo-product-diagram__overlay-number {
    background-color: fade-out($red, 0.7);
    color: white;
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms;
    animation: pulseRed 3s infinite;
    &:hover {
        animation: none;
    }
}

.twlo-product-diagram__overlay-number-inner {
    background-color: fade-out($red, 0.4);
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms;
}

.twlo-product-diagram__overlay-body {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    pointer-events: none;
    bottom: 0;
    width: 16rem;
    @include fine-print;
    background-color: $red;
    color: white;
    border-radius: 4px;
    padding: 1rem;
    transition: opacity 200ms, visibility 200ms, transform 300ms $ease-out;
}

.twlo-product-diagram__overlay:hover {
    .twlo-product-diagram__overlay-body {
        opacity: 1;
        visibility: visible;
        transform: translateY(-3.5rem);
    }

    .twlo-product-diagram__overlay-number {
        background-color: fade-out($red, 0.4);
    }

    .twlo-product-diagram__overlay-number-inner {
        background-color: $red;
    }
}

.twlo-product-diagram__step-1 {
    position: absolute;
    right: 0;
    background-color: $dusk;
    height: 192px;
    width: 80%;
    border-radius: 4px;
    z-index: 1;
    animation: fadeIn 500ms $ease backwards;

    .twlo-product-diagram__label {
        top: 0;
        right: 0;
        background-color: $dusk;
        padding: 1rem;
        padding-bottom: 0.5rem;
        z-index: 2;
    }

    .twlo-product-diagram__overlay {
        top: -1.5rem;
        right: -1.5rem;
    }

    .twlo-product-diagram__overlay-body {
        right: 0;
        @include above($small) {
            width: 24rem;
        }
    }
}

.twlo-product-diagram__step-1-code {
    overflow: hidden;
    padding: 1rem;
    opacity: 0.25;
}

.twlo-product-diagram__step-2 {
    position: relative;
    width: 90%;
    background-color: $midnight;
    @include shadow-large;
    border-radius: 4px;
    top: 4rem;
    bottom: 1rem;
    padding: 2rem;
    z-index: 3;
    animation: fadeIn 500ms 200ms $ease backwards;

    .twlo-product-diagram__label {
        top: 1rem;
        right: 1rem;
    }

    .twlo-product-diagram__overlay {
        top: -1.5em;
        left: -1.5em;
    }
}

.twlo-product-diagram__step-2-code {
    @include code;
    color: $ash;
    line-height: 1.8;
    overflow: auto;
    margin-bottom: 1rem;
    code {
        padding: 0;
    }
}

.twlo-product-diagram__step-2-link {
    @include fine-print;
    &:hover {
        color: $smoke;
        text-decoration: underline;
    }

    > svg {
        fill: currentColor;
        margin-left: 0.5rem;
    }
}

.twlo-product-diagram__step-3 {
    position: relative;
    right: 0rem;
    bottom: -3rem;
    z-index: 4;
    animation: fadeIn 500ms 400ms $ease backwards;
    width: 60%;
    margin-left: auto;

    .twlo-product-diagram__overlay {
        top: -1.5rem;
        right: -1.5rem;
    }

    .twlo-product-diagram__overlay-body {
        right: 0;
    }

    .twlo-product-diagram__label {
        right: 0;
    }
}

.twlo-product-diagram__chat-bubble {
    background-color: white;
    padding: 1rem 1.5rem;
    @include body-text;
    border-radius: 4px;
    border-bottom-right-radius: 0px;
    @include shadow-medium;
    margin-bottom: 1rem;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 1.5rem 0.5rem 0;
        border-color: transparent #fff transparent transparent;
        right: 0;
        bottom: -0.5rem;
    }
}
```
