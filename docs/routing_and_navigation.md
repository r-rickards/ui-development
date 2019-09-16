# Routing & Navigation

Routes map paths to view components in **/components/views**.

```javascript
<Route path="/" component={App} />
```

<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png" alt="material ui" title="material ui"  width=50 align=right style="margin-top: -12px" />

Learn about [React router](https://reacttraining.com/react-router/web/guides/quick-start).

-   Application level routes
    -   **Routes.js**.
-   View component level routes
    -   **/components/views/Routes.js**.
-   Nested component routes
    -   **/components/views/settings/Routes.js**
    -   **/components/views/calendar/Routes.js**

Routes use `Route` andd `Switch` from **react-router-dom** to dynamically load the appropriate view component.

```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import components to map
import Feed from 'components/views/feed/Feed';
import Calendar from 'components/views/calendar/Calendar';
import Music from 'components/views/music/Music';
import Admin from 'components/views/admin/Admin';
import Groups from 'components/views/groups/Groups';
import Settings from 'components/views/settings/Settings';
import Auth from 'components/views/auth/Auth';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/music" component={Music} />
            <Route path="/admin" component={Admin} />
            <Route path="/groups" component={Groups} />
            <Route path="/settings" component={Settings} />
            <Route path="/auth" component={Auth} />
        </Switch>
    );
}

export default Routes;
```

💡 **Tip:** Navigation links match routes.

<img src="/Users/rick/develpment/documentation-markdown/images/AppBar-Navigation.png" alt="navigation" title="navigation" />

Example from **/components/layout/NavTabs.js**:

```javascript
import { NavLink } from 'react-router-dom';

<Tab
    className={classes.tab}
    label="Calendars"
    component={NavLink}
    to="/calendar"
    color="inherit"
/>;
```

The `<Tab>` uses the `NavLink` component from **react-router-dom** to connect `to` a route.

## Roadmap to simplify

Flatten /views (remove folders) and create a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html)

Update the import in /views/Routes.js and list routes in alphabetical order like the imports.

**/views/index.js**

```javascript
export { Admin } from './Admin';
export { Auth } from './Auth';
export { Calendar } from './Calendar';
export { Feed } from './Feed';
export { Groups } from './Groups';
export { Music } from './Music';
export { Settings } from './Settings';
```

```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import components to map
import {
    Admin,
    Auth,
    Calendar,
    Feed,
    Groups,
    Music,
    Settings
} from './components/views';

function Routes() {
    return (
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            <Route path="/calendar" component={Calendar} />
            <Route exact path="/" component={Feed} />
            <Route path="/groups" component={Groups} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </Switch>
    );
}

export default Routes;
```
