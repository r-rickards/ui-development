<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/220px-Npm-logo.svg.png" alt="npm" title="npm" width=50 align=right />

# Dependencies

## package.json

package.json contains both dependencies and devDependencies.

<img src="https://pbs.twimg.com/profile_images/778422085639032832/44mC-kJ3_400x400.jpg" alt="yarn" title="yarn" align=right width=50 style="margin-top: 10px;margin-left: 10px; border-radius: 50%" />

## Adding Dependencies

`yarn add [package-name]`

This will also update your **package.json** and your **yarn.lock** so that other developers working on the project will get the same dependencies as you when they run `yarn` or `yarn install`.

## Adding Dev Dependencies

`yarn add <package...> [--dev/-D]`

## Installing Dependencies

`yarn` or `yarn install`

## yarn.lock

All yarn.lock files should be checked in.

## Roadmap

Consider adding types.

```
npm i @types/react @types/react-dom @types/classnames @types/node typescript

```

💡 **Tip:** The applications dependencies could be added from scratch to **create-react-app**

```
yarn add @date-io/moment @honeybadger-io/react @material-ui/core @material-ui/icons @nivo/axes @nivo/bar @nivo/bullet @nivo/calendar @nivo/chord @nivo/circle-packing @nivo/core @nivo/generators @nivo/heatmap @nivo/legends @nivo/line @nivo/parallel-coordinates @nivo/pie @nivo/radar @nivo/sankey @nivo/scales @nivo/scatterplot @nivo/stream @nivo/sunburst @nivo/treemap @nivo/voronoi @nivo/waffle chartist chroma-js d3 d3-array d3-axis d3-scale d3-selection d3-shape d3-time dotenv downshift fs-extra google-timezones-json history human-format lodash material-ui-pickers moment moment-timezone prop-types query-string random-gradient randomcolor react react-big-calendar react-calendar-heatmap react-chartist react-circular-progressbar react-click-outside react-csv react-datetime react-dev-utils react-device-detect react-dom react-google-recaptcha react-heatmap-grid react-infinite-scroll-component react-json-tree react-markdown react-pace-progress react-recaptcha-v3 react-redux react-router-dom react-router-redux react-scripts react-select react-select-fast-filter-options react-swipeable-views react-transition-group redux redux-logger redux-thunk smoothscroll-polyfill source-map-explorer string-hash
```
