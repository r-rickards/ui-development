# Folder Structure

<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" title="react" width=45 align=right />

[create-react-app](https://create-react-app.dev/docs/folder-structure) with additional folders added for organization

| Folder      | Description                                      |
| ----------- | ------------------------------------------------ |
| /assets     | images                                           |
| /components | components - includes /common, /layout and /view |
| /glossary   | definitions                                      |
| /modules    | redux actions/reducers                           |
| /theme      | material-ui theme & css                          |
| /utils      | reusable funtions                                |
|             |                                                  |

```
.
├── README.md
├── build
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── Routes.js
│   ├── assets
│   ├── components
│   ├── glossary
│   ├── index.js
│   ├── modules
│   ├── store.js
│   ├── theme
│   └── utils
└── yarn.lock
```

| File               | Description               |
| ------------------ | ------------------------- |
| jsconfig.json      | set `"baseUrl": "src`"    |
| package.json       | dependencies & scripts    |
| App.js             | application component     |
| /public/index.html | page template             |
| App.js             | application component     |
| Routes.js          | Contains top-level routes |
| index.js           | JavaScript entry poin     |
| store.js           | Redux store configuration |
|                    |                           |

💡 **Tip:** The structure could be constructed from scratch using **create-react-app**

```
npx create-react-app frontend

cd frontend

mkdir -p assets glossary modules theme/{overrides} utils components/{calendar,common,feed,goals,layout,login,metrics,music,settings,views/{admin,auth,calendar,dashboard,editors,feed,groups,login,music,settings}}
```

create jsconfig.json

```javascript
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

This configures the absolute paths for top-level folders under **/src**.

```

├── assets
├── components
├── glossary
├── modules
├── theme
└── utils
```

So you can import from:

-   'assets/...'
-   'components/...'
-   'glossary/...'
-   'modules/...'
-   'theme/...'
-   'utils/...'

and eliminate the relative path - `../../..` - nonsense

## Views

**Views == Pages**

Inspired from the NextJs project structure convention, the routing logic is kept inside pages directory. Each page is a react class component having some state. A page component uses other components to assemble the page like lego blocks.

The reason is that route logic is mostly non reusable, means page components are not reusable but we want the components inside components directory to be reusable. So it is better that page components are inside pages directory.

Advantages —

-   Quickly see what routes are available in the app.
-   Central location for all routing logic.
-   Keeping page components separated from other components leads to less crowding.

[Project structure](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb)

[Various structures](https://www.learnhowtoprogram.com/react/advanced-topics/react-and-redux-design-patterns)

## Roadmap

Move **/components/views** up to **/src/views**.
