<img src="./images/transparent.png"  />

<img src="https://code.visualstudio.com/assets/updates/1_35/logo-stable.png" alt="One Dark Pro" title="One Dark Pro" width=25 align=right style="margin-top: 37px;padding: 1px" />

# vs code setup

> What's important is that you optimize your develoer ergonomics and flow & repetive tasks should be scripted and boilerplate generated. ~_Rick_

#### Extensions

#### Theme

#### Font

#### Emmet

#### Prettier

#### ES Lint

#### Markdown Preview Enhanced

#### NPM Scripts

#

## Extensions

| Name ↗︎                                                                                              | Category    |
| ---------------------------------------------------------------------------------------------------- | ----------- |
| [Atlassian](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)                 | jira        |
| [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode)          | metrics     |
| [Docker Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.docker-explorer) | docker      |
| [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)                 | jsDocs      |
| [gitflow](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                       | git-flow    |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                       | git         |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)               | formatting  |
| [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                 | api testing |
| [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)                        | db          |
| [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal)               | terminal    |
|                                                                                                      |             |

💡 **Tip:** In the **extensions explorer** - search by name and install.

#

<img src="https://binaryify.github.io/OneDark-Pro/icon.svg" alt="One Dark Pro" title="One Dark Pro" width=50 align=right />

## Theme

-   [One Dark Pro](https://binaryify.github.io/OneDark-Pro/#/?id=about)

After installing the theme extension - set the theme.

💡 **Tip:** In **settings** - search for `theme` and set the Workbench: Color Theme.

Workbench: **Color Theme**

Specifies the color theme used in the workbench.

    One Dark Pro

<img src="https://ws2.sinaimg.cn/large/006tNbRwgy1fvwkrv2rorj31kw16odhw.jpg" alt="One Dark Pro" title="One Dark Pro" />

#

<img src="https://pbs.twimg.com/profile_images/968487958801248257/lfqLESLY_400x400.jpg" alt="https://pbs.twimg.com/profile_images/968487958801248257/lfqLESLY_400x400.jpg" title="https://pbs.twimg.com/profile_images/968487958801248257/lfqLESLY_400x400.jpg" width=50 align=right style="margin-bottom: 20px; border-radius: 50%" />

## Font

-   [Fira Code](https://medium.com/@qjli/daily-dev-tips-96-visual-studio-code-how-to-enable-this-new-sexy-fira-code-font-89bafbfa245f 'Learn how to set up Fira Code')

<img src="https://beldy.tk/wp-content/uploads/2019/04/fira-code-font-developers-cover-article-cover.jpg" alt="Fira Code" title="Fira Code" width=380  />

Install font

```bash
brew tap caskroom/fonts
brew cask install font-fira-code
```

💡 **Tip:** In **settings** - search for `font` and set the Font Family.

Editor: **Font Family**

Controls the font family.

    Fira Code

#

<img src="https://emmet.io/-/4076541266/i/logo.svg" alt="emmet" title="emmet" width=55 align=right style="margin-bottom: 20px" />

## emmet

Configure [emmet](https://docs.emmet.io/cheat-sheet/) to work in JSX. So you can type:

```html
div>(header>ul>li*2>a)+footer>p
```

hit `tab` and output:

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

```json
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
```

💡 **Tip:** In **settings** - search for `emmet` and click `settings.json`.

#

## Format on save

💡 **Tip:** In **settings** - search for `format` and check `Format on save`.

Editor: **Format on save**

# ☑︎

<img src="https://prettier.io/icon.png" alt="Prettier" title="Prettier" width=50 align=right />

## Prettier

\* _Part of repo; nothing to configure._

.prettierrc

```yaml
printWidth: 120
tabWidth: 4
editor.formatOnSave: true
```

<img src="https://eslint.org/assets/img/logo.svg" alt="ESLint" title="ESLint" width=50 align=right />
## ESLint

\* _Part of repo; nothing to configure._

package.json

```json
"eslintConfig": {
    "extends": "react-app"
}
```

💡 **Tip:** Be sure to fix **ALL** lint errors and warnings, including cleaning up `unused-vars` before checking in.

## Markdown Preview Enhanced

After installing the theme extension - set the theme.

💡 **Tip:** In **settings** - search for `markdown`, select **Markdown Preview Enhanced** and set the Markdown Preview Enhanced: .

Markdown Preview Enhanced: **Color Theme**

Specifies the Code Block Theme used in the theme preview.

    one-dark.css

💡 **Tip:** In **settings** - search for `markdown`, select **Markdown Preview Enhanced** and set the Markdown Preview Enhanced: Preview Them.

Markdown Preview Enhanced: **Preview Theme**

Specifies the theme used in the theme preview.

    one-dark.css

<img src="https://user-images.githubusercontent.com/1908863/28495106-30b3b15e-6f09-11e7-8eb6-ca4ca001ab15.png" alt="One Dark Pro" title="One Dark Pro" />

<img src="https://atlassian.gallerycdn.vsassets.io/extensions/atlassian/atlascode/1.4.3/1563294833595/Microsoft.VisualStudio.Services.Icons.Default" alt="One Dark Pro" title="One Dark Pro" width=50 align=right />

## Atlassian

Integrate jira into vs code.

<img src="https://confluence.atlassian.com/bitbucket/files/969520759/969520750/1/1556130508163/auth-jira1.gif" alt="Jira" title="Jira" width=380 />

Click the `Jira` icon in the status bar to open Atlassian Settings

-   Authenticate
-   Set Default site
-   Set Project

See **Your Issues** and **Open Issues** in the Atlassian Explorer.

<img src="https://softwaredotcom.gallerycdn.vsassets.io/extensions/softwaredotcom/swdc-vscode/1.1.26/1567007561828/
Microsoft.VisualStudio.Services.Icons.Default" alt="One Dark Pro" title="One Dark Pro" width=45 align=right style="border-radius: 50%; margin-right: 7px" />

## Code Time

After installing, you will be prompted to login (_you can also click on "Code Time" in the status bar_).

You can visit the web app any time at https://app.software.com/.

<img src="https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/9.9.3/1565067337167/Microsoft.VisualStudio.Services.Icons.Default" alt="GitLens" title="GitLens" width=55 align=right style="margin-top: 8px" />

## GitLens

Type &#8984;⇧-P to open the Command Palette. Type `REST` and select:

    REST Client: Generate Code Snippet

Add the lines below and save the file as: `sw.http`

<img src="https://vector-of-bool.gallerycdn.vsassets.io/extensions/vector-of-bool/gitflow/1.2.1/1524369215332/Microsoft.VisualStudio.Services.Icons.Default" alt="REST Client" title="REST Client" width=60 align=right style="margin-top: 8px" />

## gitflow

[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/) - by Vincent Driessen

<img src="https://raw.githubusercontent.com/vector-of-bool/vscode-gitflow/master/res/Step1.png" alt="gitflow" title="gitflow" width=380 />

```
brew install git-flow
```

Set rebase true

```
git config --global pull.rebase true
```

<img src="https://image-static.segmentfault.com/664/047/664047023-5c551c5e282ca_articlex" alt="REST Client" title="REST Client" width=50 align=right style="margin-top: 8px" />

## REST Client

Type &#8984;⇧-P to open the Command Palette. Type `REST` and select:

    REST Client: Generate Code Snippet

Add the lines below and save the file as: `sw.http`

💡 **Tip:** `Port 5000` is configured as the proxy in **package.json**.

```javascript
@hostname = localhost
@port = 5000
@host = {{hostname}}:{{port}}
@http = HTTP/1.1
@contentType = application/json
@token = JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY2OTcwMDc3fQ.3ryUrBv9sNzh70EzWHG0GdAciuha2WufHlJGi30ya9s

###

GET http://{{host}}/users/1 {{http}}
Authorization: {{token}}
```

💡 **Tip:** Replace the JWT with a JWT from your developer tools.

Click on [send request]() (above the query) to send the query. The response will be opened in a new tab.

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, access_token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers
server_env: localhost
Content-Type: application/json; charset=utf-8
ETag: W/"66de1-XXRQawSpPFSaXxrjDO4ZxPjxSxU"
Vary: Accept-Encoding
Content-Encoding: gzip
Date: Sat, 31 Aug 2019 15:30:38 GMT
Connection: close
Transfer-Encoding: chunked

{
  "message": "success",
  "code": "",
  "data": {
  }
}

```

<img src="https://mtxr.gallerycdn.vsassets.io/extensions/mtxr/sqltools/0.20.2/1565878796231/Microsoft.VisualStudio.Services.Icons.Default" alt="REST Client" title="REST Client" width=50 align=right style="margin-top: 8px" />

## SQLTools

A SQLTools tab is created on the explorer. Open the tab and create a new connection. This opens the SQLTools Settings tab.

Use the configuration found in **/backend/config/localhost.json** to fill in the form and click `CREATE`

Now you can create a file with .sql extension and type a SQL query. For example:

```
select * from users;
```

Select the query and press

**&#8984;E &#8984; E** to execute. This will open a results tab.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/220px-Npm-logo.svg.png" alt="npm" title="npm" width=50 align=right style="margin-top: 8px" />

## npm scripts

💡 **Tip:** Add npm scripts to the explorer.

1. Open Settings - &#8984;,
2. Search for `npm`
3. Click on `Npm` in the side nav
4. Enable script explorer
5. Set package manager to `yarn`
6. Set script explorer action to `open`
