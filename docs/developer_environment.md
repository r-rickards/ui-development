# Developer Environment

## Install dependencies

**Install brew**

<img src="https://brew.sh/assets/img/homebrew-256x256.png" alt="homebrew" title="homebrew" align=right width=45  />

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)")
```

**Install node**

<img src="https://nodejs.org/static/images/logo.svg" alt="node" title="node" align=right width=55 />

[Download](https://nodejs.org/dist/v8.11.3/node-v8.11.3.pkg)

_installs npm & npx_

**Install yarn**

<img src="https://pbs.twimg.com/profile_images/778422085639032832/44mC-kJ3_400x400.jpg" alt="yarn" title="yarn" align=right width=50 style="margin-left: 10px; border-radius: 50%" />

```
brew install yarn --ignore-dependencies
```

<img src="https://blogs.swarthmore.edu/its/wp-content/uploads/2019/06/docker_logo.png" alt="docker" title="docker" width=50 align=right style="margin-top: 20px; border-radius: 50%" />

**Install docker**

[Download](https://download.docker.com/mac/stable/Docker.dmg)

[Register for Docker ID](https://docs.docker.com/docker-id/)

-   Start Docker and sign in (in the menu)

**Install xCode command line tools**

<img src="https://logos-download.com/wp-content/uploads/2017/07/Apple_logo-571x700.png" alt="xcode" title="xcode" width=30 align=right style="margin-top: -30px;padding-right: 12px" />

-   [Download and install xCode command line tools](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

## Setup GitHub account

<img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="github" title="github" width=50 align=right style="margin-top: -30px" />

-   [Generate a new SSH key and add it to the ssh-agent.](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

-   [Add the new SSH key to your GitHub account.](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)

<img src="https://softwaredotcom.gallerycdn.vsassets.io/extensions/softwaredotcom/swdc-vscode/1.1.26/1567007561828/Microsoft.VisualStudio.Services.Icons.Default" alt="software" title="software" width=45 align=right style="border-radius: 50%; margin-right: 7px; margin-top:47px; margin-left: 10px" />

## Clone project

```
git clone https://github.com/swdotcom/swdc-codetime.git
```

## Start application

-   Start docker containers in the **DOCKER CONTAINERS** panel in the explorer (_or
    docker-compose up_).

-   Use scripts in the **NPM SCRIPTS** panel (in the explorer) to seed the database and start the frontend and backend applications (_or open the terminal and use yarn to install dependencies & run scripts_).
