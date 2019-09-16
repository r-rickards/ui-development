## create-react-app vscode extension

As a developer, I want an extension that opens a tab or has a cli such that I can make configuration/design/settings choices and generate an application.

<img src="https://code.visualstudio.com/assets/updates/1_35/logo-stable.png" alt="One Dark Pro" title="One Dark Pro" width=40 align=right style="margin-top: 40px" />

<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" title="react" width=45 align=right style="margin-top: 40px" />

#### Whats out there

https://marketplace.visualstudio.com/items?itemName=tobiKl.create-react-component

The best one out there isn't very nice.

Possibly ideas on structure and how to make it work.

https://github.com/olehvolynets/create-react-component

### Features

This isn't intended to replace a UI Developer or UX Designer - it's designed to speed prototyping. In the future, when more AI is added we can evolve into a full-fleged application manufacturer.

-   Not just use create-react-app to generate the app, but continue to be able to adjust settings or add features, libraries, examples and components.
-   create-react-app with additional features

    -   add questions to cli

        -   UI library choice

            -   material-ui
            -   bootstrap
            -   semantic-ui
            -   ant-ui
            -   bulma
            -   none

                -   create **/src/theme**, **theme.css** and **theme.js**

        -   google font

            -   enter valid google font

        -   css preprocessor

            -   saas
            -   less
            -   none

        -   Redux

            -   create redux constructs

        -   Authentication

            -   oAuth 2
            -   basic
            -   jwt

            -   full-stack

                -   create server
                -   use service

        -   Authorization

        -   user manager

            -   Add default user schema
            -   Add sql\*lite db
            -   Add list/item/detail/edit views
            -   Add CRUD service

-   **App-Frame** visual layout tool - https://mui-treasury.com/layout-builder

    -   the generator creates a directory **/src/components/App-Frame** with a default **App-Frame.js** (and associated components)

-   Add **route/view**

    -   the generator creates a directory **/src/views**
    -   the generator also creates a **/src/Routes.js** file
    -   the default **/src/Routes.js** contains routes and the App-Frame uses `Link` from **react-router**
    -   ask for **route/view** name OR library example (e.g. react-big-calendar, nivo charts, material-ui table - maybe with bits). I want to be able to inject working examples into the app because its easier to configure and style once you have it working
    -   create the view component in **/src/views**
    -   add an import for the new view to the **/src/Routes.js**
    -   add an route for the new view to the **/src/Routes.js**

-   Add component

    -   the generator creates a directory **/src/components**
    -   the generator creates a directory **/src/components/common**
    -   the generator creates a directory **/src/components/App-Frame**
    -   the generator creates a directory **/src/templates**
    -   create a set of files in **/src/components** based on **/src/templates**

        -   create <COMPONENT_NAME> dir & add:

            -   <COMPONENT_NAME>.js (or optionally .ts)
            -   <COMPONENT_NAME>.spec.js (or .test)
            -   <COMPONENT_NAME>.story.js

-   Add library/module

    -   manage dependencies - maybe ask to import missing npms
    -   run yarn for the user
    -   ask if an example should be added to **route/view**

    These could be anything from a datepicker to oAuth-login. So features can be quickly added/tested/evaluated in context. Then once you have what you want working some workflow to customize it.

    Encourage library developers to build tools like nivo,rocks - the interactive configuration that shows code, data and the result in a nice ui with sliders and form elements.

*   Create an eco-system of plugins or wrapped components OR a simple automated way to wrap components such that their props can be configured.

*   Robust set of default components and features.

*   If material-ui - theming plugin

    -   themes site where users can upload or download themes
    -   premium theme marketplace
    -   plugins marketplace

*   complimentary extension for doing the server-side? or all-in-one?

    -   or full-stack: Add feature - adds server route/controller/model/db and client route/view/components

    -   the server side would use OpenAPI/swagger to generate the APIs

### What did you get

A way to repeatably generate a react application.

A way to quickly add features.

A quick prototyper - that can be customized

Tested, generated code packed with best practices.

Based on best practices and the leading libraries/plugins and of course - create-react-app.

### Can it get traction

vs code marketplace

like GitLens - only vs code, focused

medium/dev.to

list of awesome react

twitter

developer recommendations

### How to

How to make a tab like settings.json that has a sidebar menus and configuration with form elements to edit settings/configuration.

Generate this:

https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/AppDrawer.js
