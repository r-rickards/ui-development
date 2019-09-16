# Templates

## react-router

<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png" alt="material ui" title="material ui"  width=50 align=right style="margin-top: -12px" />

Learn about [React router](https://reacttraining.com/react-router/web/guides/quick-start).

```json
 // react-router
  "ES6 react-router Import": {
    "prefix": "imrr",
    "body": [
      "import {",
      "\tBrowserRouter as Router,",
      "\tRoute",
      "} from 'react-router-dom'\n"
    ]
  },
  "ES6 react-router NavLink Import": {
    "prefix": "imnl",
    "body": "import { NavLink } from 'react-router-dom'\n"
  },
  "ES6 react-router withRouter Import": {
    "prefix": "imwr",
    "body": "import { withRouter } from 'react-router-dom'"
  },
  "react-router Router": {
    "prefix": "router",
    "body": [
      "<Router>",
      "\t${0}",
      "</Router>"
    ]
  },
  "react-router Route": {
    "prefix": "route",
    "body": "<Route path='${1:path}' component={${2:component}}/>\n"
  },
  "react-router NavLink": {
    "prefix": "navlink",
    "body": "<NavLink to={${1:path}}>{$anchorText}</NavLink>\n"
  },
```
