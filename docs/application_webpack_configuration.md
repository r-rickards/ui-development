# Application Configuration

<img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg" alt="webpack" title="webpack" width=45 align=right />

## WebPack

The application is confgured with Webpack underneath - but because it was generated using the [**create-reate-app**](https://create-react-app.dev) cli - which uses **react-scripts**, configuration is greatly simplified.

**_Create React App_** lets you focus on code, not build tools.

<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="creat-rea" title="creat-rea" width=45 align=right style="margin-top: -45px" />

We literally only added `proxy` to **package.json**.

```javascript
"proxy": "http://localhost:5000"
```

### Environment files

Each environment has a .env configuration file.

-   **.env**

-   **.env.production**

-   **.env.staging**

-   **.env.test**

**Example:**

**.env**

    REACT_APP_API_SERVER=http://localhost:5000
    REACT_APP_REDIRECT_URL=http://localhost:3000
