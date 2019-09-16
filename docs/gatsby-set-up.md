# Set Up Gatsby

yarn global add gatsby-cli

gatsby new gatsbydemo
https://github.com/gatsbyjs/gatsby-starter-default

or

gatsby new blogdemo
https://github.com/gatsbyjs/gatsby-starter-blog

or any https://www.gatsbyjs.org/starters/?v=2

gatsby new gatsby-gitbook-starter https://github.com/hasura/gatsby-gitbook-starter

gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs

## Clone the example from material-ui

```
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/gatsby
```

Install and run:

```bash
cd gatsby
yarn
yarn develop
```

```
~/develpment/gatsby is 📦 v4.0.0 via ⬢ v10.16.3 took 34s
➜ yarn develop


> gatsby@4.0.0 develop /Users/rick/develpment/gatsby
> gatsby develop

success open and validate gatsby-configs - 0.037 s
success load plugins - 0.106 s
success onPreInit - 0.024 s
success initialize cache - 0.026 s
success copy gatsby files - 0.075 s
success onPreBootstrap - 0.019 s
success source and transform nodes - 0.054 s
success Add explicit types - 0.018 s
success Add inferred types - 0.067 s
success Processing types - 0.054 s
success building schema - 0.224 s
success createPages - 0.025 s
success createPagesStatefully - 0.111 s
success onPreExtractQueries - 0.018 s
success update schema - 0.070 s
success extract queries from components - 0.098 s
success write out requires - 0.038 s
success write out redirect data - 0.018 s
success onPostBootstrap - 0.016 s
⠀
info bootstrap finished - 4.881 s
⠀
success run static queries - 0.021 s
success run page queries - 0.039 s — 3/3 149.77 queries/second
success start webpack server - 4.359 s — 1/1 1.44 pages/second
 DONE  Compiled successfully in 4348ms
⠀
You can now view gatsby in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use npm run build
⠀
ℹ ｢wdm｣: Compiled successfully.

```

## Plugins

https://www.gatsbyjs.org/docs/adding-markdown-pages/

yarn addgatsby-source-filesystem

https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/

TRY

https://github.com/whoisryosuke/gatsby-documentation-starter

```
yarn add @mdx-js/mdx @mdx-js/tag gatsby gatsby-image gatsby-link gatsby-mdx gatsby-paginate gatsby-plugin-feed gatsby-plugin-google-analytics gatsby-plugin-manifest gatsby-plugin-offline gatsby-plugin-react-helmet gatsby-plugin-sharp gatsby-plugin-sitemap gatsby-remark-copy-linked-files gatsby-remark-images gatsby-remark-prismjs gatsby-remark-smartypants gatsby-source-filesystem gatsby-transformer-json gatsby-transformer-react-docgen gatsby-transformer-remark gatsby-transformer-sharp markdown-it mdx-deck prismjs react react-dom react-helmet react-jss react-markdownit
```

https://www.gatsbyjs.org/packages/gatsby-remark-code-buttons/

```
yarn add gatsby-remark-code-buttons -D
```

https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/

```
yarn add gatsby-plugin-manifest
```

https://www.gatsbyjs.org/packages/gatsby-plugin-offline/

```
yarn add gatsby-plugin-offline
```

https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=

```
yarn add gatsby-plugin-transition-link
```

```
yarn add gatsby-remark-embedded-codesandbox
```

```npm install gatsby-remark-code-buttons --save-dev

```

````css
    color: #fff;
    background: linear-gradient(to right, #2D323E 0%, rgb(22, 25, 31) 100%);

    color: #fff;
    background-color: #3C4252;
    ```
````
