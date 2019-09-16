# Login Flow

<img src="images/login.png"  width=400 style="margin: 20px" />

## Features

### Social Log In

#### oAuth Authentication Flow

Used for all social logins.

<img src="https://i.pinimg.com/originals/65/b5/d4/65b5d42d620be214302ccb9f1b28a128.png" />

It works by redirects and using the url to pass queryString parameters.

Those parameters:

```
let {
            token,
            error,
            loginStatusCode,
            message,
            yesConfirm,
            noConfirm = '',
            email,
            title,
            group,
            groupToken,
            addr
        } = queryString.parse(history.location.search);
```

#### → Log in with GitHub

Clicking the **Log in with GitHub** button triggers a redirect.

```http
https://github.com/login?client_id=38ff3794d3494cad2408&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D38ff3794d3494cad2408%26redirect_uri%3Dhttps%253A%252F%252Fstagingapi.software.com%252Fauth%252Fgithub%252Fcallback%26response_type%3Dcode%26scope%3Dread%253Auser%252Cuser%253Aemail
```

<img src="images/github-signin.png" width=400 style="margin: 20px" />

Logging into GitHub authorizes and redirects back to software.

If successful:

Redirect: →

```
https://staging.software.com/?user=%7B%22id%22%3A65%7D&jwt=JWT%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1OTMxMn0.HxiTkuob9Cj5GbxwQhZKX_pT8cTEucWyenJkOPkf4M4&message=success

```

```
user	{"id":65}
jwt	JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1OTMxMn0.HxiTkuob9Cj5GbxwQhZKX_pT8cTEucWyenJkOPkf4M4
message	success
```

If unsuccessful:

```
https://staging.software.com/message=Sorry%2C%20we%27re%20unable%20to%20find%20a%20user%20based%20on%20your%20login%20information#
```

```
message	Sorry, we're unable to find a user based on your login information
```

**/components/login/LoginInfoDialog.js**

💡 **Tip:** When testing, clear all cookies; you should start at `https://staging.software.com/getting-started` if cookies are deleted. Otherwise, it will likely redirect to the **feed** due to a JWT stored in the cookie.

Click **LOG IN**

#### → Log in with Google

Clicking the **Log in with Google** button triggers a redirect.

```http
https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=693108335854-h2i4b317eehmfr60tplekdjt6j1e8ku8.apps.googleusercontent.com&as=YaK7ifY4orefHYgzXFBhJg&destination=https%3A%2F%2Fstagingapi.software.com&approval_state=!ChRaZUMxY2RuQ0ZLekFNUVJCRkJyURIfOC1LLTJYT0NRdGdVa013TWpqbVNUV1ZpT0VUN3p4WQ%E2%88%99AJDr988AAAAAXXHh8wST_n66bVtVctxDHwFjgyVkMSHN&oauthgdpr=1&xsrfsig=ChkAeAh8T-kP81_Uw8o8rDdwnLBZS1pw1cv3Eg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow
```

<img src="images/google-signin.png" width=400 style="margin: 20px" />

Choose an account

Redirect: →

```
https://staging.software.com/?user=%7B%22id%22%3A65%7D&jwt=JWT%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1ODM1NH0.zLLG1Ii_GNArH7Vi1erLz2ovlLtXh2vSYlG9tJDvF44&message=success
```

```
user	{"id":65}
jwt	JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1OTUxMX0.D8rYtezqAynuu57c47GHte3RcnbtgEVhck-RMHNrfQg
message	success
```

#### → Log in with Software

<img src="images/software-login.png" width=400 style="margin: 20px" />

**Route:** /login

-   → Forgot password?

<img src="images/forgot-password.png" width=400 style="margin: 20px" />

Check email

<img src="images/password-reset-email.png" width=400 style="margin: 20px" />

Click RESET PASSWORD

Redirect: → https://app.software.com/resetpass?reset_token=2PFCCQTPXS4RLPNU
with **reset_token**

**Route:** /resetpass

**Query String** reset_token=2PFCCQTPXS4RLPNU

<img src="images/reset-password.png" width=400 style="margin: 20px" />

```http
Request URL: https://api.software.com/users/65
Request Method: GET
Status Code: 200
Remote Address: 54.183.32.226:443
Referrer Policy: no-referrer-when-downgrade

access-control-allow-headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, access_token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers
access-control-allow-methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
access-control-allow-origin: *
content-encoding: gzip
content-type: application/json; charset=utf-8
date: Thu, 05 Sep 2019 03:55:14 GMT
etag: W/"fa21-l8oad/VNY6aeU4PbOx3m9e9pyR0"
server_env: production
status: 200
vary: Accept-Encoding
x-powered-by: Express
x-trace: 2B6BE6ABCE05201A91FBCF04E0EA8BE3282C31D62D938F5130BAA8D74A00

Provisional headers are shown
accept: application/json
authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1NTcxMn0.1pMsGzF1pQceVUfUx6lxu35z_uENixlypfzd7TuAdt0
content-type: application/json
Referer: https://app.software.com/
Sec-Fetch-Mode: cors
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
```

💡 **Tip:** The header contains the **JWT** - use this when testing apis.

```
JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzY1NTcxMn0.1pMsGzF1pQceVUfUx6lxu35z_uENixlypfzd7TuAdt0
```

RESPONSE

Status Code: 200

```json
{
    "data": {
        "id": 65,
        "name": "Rick Rickards",
        "email": "rick@software.com",
        "password": true,
        "profile_image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/9k=",
        "salt": true,
        "setup_complete": true,
        "code_goals": {
            "working_hours": [
                [118800, 151200],
                [205200, 237600],
                [291600, 324000],
                [378000, 410400],
                [464400, 496800]
            ],
            "daily_code_hours": {
                "days": {
                    "fri": {
                        "goal": 4
                    },
                    "mon": {
                        "goal": 4
                    },
                    "thu": {
                        "goal": 4
                    },
                    "tue": {
                        "goal": 4
                    },
                    "wed": {
                        "goal": 4
                    }
                },
                "modified": false
            }
        },
        "client_cache": null,
        "timezone": "America/Los_Angeles",
        "occupation": "Developer",
        "company": "Software",
        "location": "US",
        "github_id": "37358488",
        "github_access_token": true,
        "github_scopes": ["read:user", "user:email"],
        "google_id": "109067313322949313256",
        "google_access_token": true,
        "permissions": [],
        "invite_timestamp": 1521671846,
        "login_timestamp": 1567655712,
        "login_count": 69,
        "plugin_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU2NzU2Njc5Nn0.O91OeWAGD4iRmTJ1Kk5QUCoC6xhHrwWfcT9XO6LYyuQ",
        "plugin_jwt": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1IiwiaWF0IjoxNTY3NTY2ODE3fQ.pcvEM4fuaIkJ5HsrKLyVOaeWu9q8MM9pNHdRSkyDnD4",
        "first_datum_timestamp": 1535760864,
        "last_datum_timestamp": 1535760864,
        "time_to_collect_data": -60,
        "preferences": {
            "showGit": true,
            "showRank": false,
            "showMusic": true
        },
        "datum_count": 5534,
        "mac_addr": "rick_fa:00:35:30:97:01",
        "mac_addr_share": "rick_fa:00:35:30:97:01",
        "deactivated": null,
        "phone": null,
        "last_heartbeat_timestamp": 1559848071,
        "creation_annotation": null,
        "hostname": null,
        "heartbeat_count": 4083,
        "coding_days": 137,
        "coding_range": 1,
        "ide_integrations": {
            "2": "Visual Studio Code Visual Studio Code_0.16.12"
        },
        "spotify_id": null,
        "spotify_access_token": null,
        "spotify_refresh_token": null,
        "spotify_scopes": null,
        "createdAt": "2018-03-21T22:37:26.000Z",
        "updatedAt": "2019-09-05T03:55:12.000Z",
        "integrations": [
            {
                "id": 156,
                "name": "Visual Studio Code",
                "value": "rick@software.com",
                "status": "ACTIVE",
                "upgraded": null,
                "last_datum_timestamp": 1565106949,
                "last_heartbeat_timestamp": 1559848071,
                "version": "Visual Studio Code_0.16.12",
                "createdAt": "2018-09-01T00:15:24.000Z",
                "updatedAt": "2019-06-06T19:07:56.000Z",
                "userId": 65,
                "pluginId": 2
            },
            {
                "id": 741,
                "name": "Atom",
                "value": "rick@software.com",
                "status": "ACTIVE",
                "upgraded": null,
                "last_datum_timestamp": null,
                "last_heartbeat_timestamp": null,
                "version": null,
                "createdAt": "2019-01-31T22:42:18.000Z",
                "updatedAt": "2019-01-31T22:42:18.000Z",
                "userId": 65,
                "pluginId": 7
            },
            {
                "id": 122,
                "name": "Calendar",
                "value": "rick@software.com",
                "status": "ACTIVE",
                "upgraded": null,
                "last_datum_timestamp": null,
                "last_heartbeat_timestamp": null,
                "version": null,
                "createdAt": "2018-07-18T04:58:37.000Z",
                "updatedAt": "2019-09-04T03:13:42.000Z",
                "userId": 65,
                "pluginId": 8
            },
            {
                "id": 305,
                "name": "GitHub",
                "value": "rick@software.com",
                "status": "ACTIVE",
                "upgraded": null,
                "last_datum_timestamp": null,
                "last_heartbeat_timestamp": null,
                "version": null,
                "createdAt": "2018-11-06T07:34:22.000Z",
                "updatedAt": "2018-11-06T07:34:22.000Z",
                "userId": 65,
                "pluginId": 9
            },
            {
                "id": 22121,
                "name": "Spotify",
                "value": "r2.rickards@gmail.com",
                "status": "ACTIVE",
                "upgraded": null,
                "last_datum_timestamp": null,
                "last_heartbeat_timestamp": null,
                "version": "",
                "createdAt": "2019-06-04T17:36:31.000Z",
                "updatedAt": "2019-06-04T17:36:31.000Z",
                "userId": 65,
                "pluginId": 12
            }
        ],
        "apps": ["CodeTime", "Calendar", "Git", "Spotify"],
        "onboardingInfo": {
            "codeTimeOnboarding": false,
            "musicTimeOnboarding": false,
            "oldestPayloadStart": 1535760864,
            "isOnboarding": false
        }
    },
    "message": "success",
    "code": "200"
}
```

The apps key returns an array of applications currently enabled. This is used to gate features in the UI.

```
"apps": ["CodeTime", "Calendar", "Git", "Spotify"]
```

#### → INSTALL A PLUGIN

    -   → getting-started

<img src="images/get-started.png" width=400 style="margin: 20px" />

#### → Log out

Click the &lt;Avatar /&gt; on the &lt;AppBar /&gt; to reveal the dropdown to **Log out**

Redirect: → https://app.software.com/login

#### → Succesful Login

Redirect: → https://app.software.com/

-   /feed - default route for an authenticated user

## Frontend Code

**/frontend/src/components/views/login**

```
.
├── ConfirmSignup.js
├── GettingStarted.js
├── Login.js
└── PasswordRecovery.js
```

**login.js** imports `modules/user`

```javascript
import {
    loginGoogle,
    loginGithub,
    loginSpotify,
    sendVerificationEmail,
    setLoginStatus
} from 'modules/user';
```

```javascript
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
    loginGoogle,
    loginGithub,
    loginSpotify,
    sendVerificationEmail,
    setLoginStatus
} from 'modules/user';
import { buildTokenQryStr } from 'utils/util';

const noAccountFoundTitle = 'We couldn’t find that account';

class Login extends React.Component {
    state = {
        email: '',
        token: null,
        error: null,
        message: null,
        badRequest: false,
        notFound: false,
        notVerified: false,
        notFoundTitle: '',
        yesConfirm: '',
        noConfirm: '',
        hasError: false,
        useOauthConfirm: false,
        showLoginSoftware: false,
        group: null,
        groupToken: null,
        addr: null
    };

    componentDidMount() {
        const { dispatch, history } = this.props;

        // set special login styles for login/signup/onbording views
        const htmlElement = document.getElementsByTagName('html')[0];
        const htmlElementClassList = htmlElement.classList;
        htmlElementClassList.add('ct-bg');
        const bodyElement = document.getElementsByTagName('body')[0];
        const bodyElementClassList = bodyElement.classList;
        bodyElementClassList.add('ct-bg');

        let badRequest = false;
        let notFound = false;
        let notFoundTitle = '';
        // let noConfirm = "";
        let hasError = false;
        let useOauthConfirm = false;

        // error=true&
        // message=Sorry%2C%20we%27re%20unable%20to%20find%20a%20user%20based%20on%20your%20login%20information#
        let {
            token,
            error,
            loginStatusCode,
            message,
            yesConfirm,
            noConfirm = '',
            email,
            title,
            group,
            groupToken,
            addr
        } = queryString.parse(history.location.search);

        // TODO: maybe eventually we do all the errors/alerts this way ???
        // meaning we pass loginStatusCode in the url when auth with google or github
        // it might save a lot of complicated component state logic here
        if (loginStatusCode) {
            dispatch(
                setLoginStatus({
                    loginStatusCode,
                    title,
                    message,
                    yesConfirm,
                    noConfirm,
                    email
                })
            );
            return;
        }

        if (!yesConfirm && hasError) {
            yesConfirm = 'Install a plugin';
            noConfirm = 'Cancel';
        } else if (hasError) {
            if (yesConfirm && yesConfirm.toLowerCase().indexOf('ok') === -1) {
                // it's using a github or google confirm label
                useOauthConfirm = true;
            }
            noConfirm = 'Sign in using an existing account';
        }

        if (title) {
            notFoundTitle = title;
        } else if (hasError) {
            notFoundTitle = noAccountFoundTitle;
        }

        this.setState({
            token,
            error,
            message,
            hasError,
            notFound,
            notFoundTitle,
            yesConfirm,
            noConfirm,
            useOauthConfirm,
            badRequest,
            group,
            groupToken,
            addr
        });
    }

    renderError() {
        const { classes } = this.props;

        let errorComp = null;
        if (this.state.error) {
            errorComp = (
                <Typography
                    color="error"
                    variant="body2"
                    align="center"
                    gutterBottom
                >
                    {this.state.message}
                </Typography>
            );
        } else {
            errorComp = (
                <React.Fragment>
                    <Typography
                        color="error"
                        variant="body2"
                        align="center"
                        gutterBottom
                    >
                        Login token invalid
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                        gutterBottom
                    >
                        The Beta program is by invitation-only. If you'd like to
                        join, please
                        <a
                            className={classes.link}
                            href="mailto:cody@software.com"
                        >
                            &nbsp;send us an email.
                        </a>
                    </Typography>
                </React.Fragment>
            );
        }
        return errorComp;
    }

    confirmClickHandler = () => e => {
        const { yesConfirm, useOauthConfirm, notVerified } = this.state;
        const { dispatch, isLogin, history, loginAttempt } = this.props;

        // console.log("confirmClickHandler(); notVerified: %o\nemail: %o", notVerified, loginAttempt.email);
        if (notVerified) {
            dispatch(sendVerificationEmail(loginAttempt.email));
        }
        // clear out the errors
        this.setState({
            badRequest: false,
            notFound: false,
            notVerified: false,
            notFoundTitle: '',
            noConfirm: '',
            hasError: false,
            useOauthConfirm: false
        });

        if (useOauthConfirm) {
            const lcConfirm = yesConfirm.toLowerCase();
            if (lcConfirm.indexOf('github') !== -1) {
                loginGithub(null /*token*/, false /*isSignUp*/);
            } else if (lcConfirm.indexOf('google') !== -1) {
                loginGoogle(null /*token*/, false /*isSignUp*/);
            } else {
                loginSpotify(null /*token*/, false /*isSignUp*/);
            }
            return;
        }

        if (yesConfirm && yesConfirm.toLowerCase().indexOf('ok') === -1) {
            let qryStr = '';
            if (history.location.search) {
                // don't get the error param
                let { token, group, groupToken, addr } = queryString.parse(
                    history.location.search
                );
                qryStr = buildTokenQryStr({ token, group, groupToken, addr });

                if (qryStr) {
                    qryStr = '?' + qryStr;
                }
            }

            if (isLogin) {
                window.location = `/getting-started${qryStr}`;
            } else {
                window.location = `/login${qryStr}`;
            }
        }
    };

    handleErrorClose = () => {
        const { isLogin, history } = this.props;
        let params = history.location.search ? history.location.search : '';
        if (params.indexOf('error') !== -1) {
            if (isLogin) {
                window.location = `/login`;
            } else {
                window.location = `/getting-started`;
            }
        } else {
            this.setState({
                notFound: false,
                notVerified: false,
                badRequest: false
            });
        }
    };

    render() {
        const {
            classes,
            isLogin,
            isSignUp,
            isOnboarding /*history*/
        } = this.props;

        const {
            token,
            notFound,
            notVerified,
            badRequest,
            message,
            notFoundTitle,
            yesConfirm,
            noConfirm,
            showLoginSoftware,
            group,
            groupToken,
            addr
        } = this.state;

        let cardTitleComp = null;
        if (isOnboarding) {
            cardTitleComp = (
                <React.Fragment>
                    <Grid item xs={12} className={classes.signupTitle}>
                        Almost done!
                    </Grid>

                    <Grid item xs={12} className={classes.signupSubtitle}>
                        Log in to get weekly email reports, set goals, and more.
                    </Grid>
                </React.Fragment>
            );
        } else if (isSignUp) {
            cardTitleComp = (
                <Grid item xs={12} className={classes.signupTitle}>
                    Sign up
                </Grid>
            );
        } else {
            cardTitleComp = (
                <Grid item xs={12} className={classes.signupTitle}>
                    Log In
                </Grid>
            );
        }
        const yesConfirmLabel = !yesConfirm ? 'Ok' : yesConfirm;

        let qryStr = buildTokenQryStr({ token, group, groupToken, addr });

        const getStartedUrl = qryStr
            ? `/getting-started?${qryStr}`
            : '/getting-started';
        return (
            <React.Fragment>
                <Grid
                    container
                    justify="center"
                    className={classes.topContainer}
                >
                    <Grid item xs={12} className={classes.brand}>
                        <Paw />
                    </Grid>
                    {cardTitleComp}
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Grid container justify="center">
                                    <Grid item xs={12} className={classes.form}>
                                        <ButtonGithub
                                            onClick={() =>
                                                loginGithub(
                                                    token,
                                                    isSignUp,
                                                    group,
                                                    groupToken,
                                                    addr
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.form}>
                                        <ButtonGoogle
                                            onClick={() =>
                                                loginGoogle(
                                                    token,
                                                    isSignUp,
                                                    group,
                                                    groupToken,
                                                    addr
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.form}>
                                        <ButtonSoftware
                                            onClick={this.showLoginDlg}
                                        />
                                        <LoginSoftwareDialog
                                            open={showLoginSoftware}
                                            handleSubmitError={
                                                this.getSubmitError
                                            }
                                            onClose={this.hideLoginDlg}
                                        />
                                    </Grid>

                                    {(isSignUp || isOnboarding) && (
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            align="center"
                                            gutterBottom
                                        >
                                            By using Software, you agree to our
                                            <br />
                                            <a
                                                href="https://www.software.com/legal/end-user-license-agreement"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={classes.link}
                                            >
                                                terms and conditions
                                            </a>
                                            .
                                        </Typography>
                                    )}
                                    <Grid item xs={12}>
                                        <LoginInfoSnackbar />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {isLogin && (
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} className={classes.textContainer}>
                            Don't already have an account?
                        </Grid>
                        <Grid item xs={12} className={classes.loginContainer}>
                            <Button
                                className={classes.loginButton}
                                href={getStartedUrl}
                            >
                                Install a plugin
                            </Button>
                        </Grid>
                    </Grid>

                <Snackbar
                    open={badRequest}
                    onClose={this.handleErrorClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <WrappedSnackbar
                        onClose={this.handleErrorClose}
                        variant="info" // success, error, warning, info
                        message={message}
                    />
                </Snackbar>

                <WrappedDialog
                    open={notVerified}
                    onClose={this.handleErrorClose}
                    aria-labelledby="notverified-account-dialog"
                >
                    <DialogTitle>{notFoundTitle}</DialogTitle>
                    <DialogContent>
                        <Typography>{message}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" onClick={this.handleErrorClose}>
                            Ok, got it!
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={this.confirmClickHandler()}
                        >
                            Resend verification
                        </Button>
                    </DialogActions>
                </WrappedDialog>

                <WrappedDialog
                    open={notFound}
                    onClose={this.handleErrorClose}
                    aria-labelledby="notfound-account-dialog"
                >
                    <DialogTitle>{notFoundTitle}</DialogTitle>
                    <DialogContent>
                        <Typography>{message}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" onClick={this.handleErrorClose}>
                            {noConfirm}
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={this.confirmClickHandler()}
                        >
                            {yesConfirmLabel}
                        </Button>
                    </DialogActions>
                </WrappedDialog>
            </React.Fragment>
        );
    }

    showLoginDlg = () => this.setState({ showLoginSoftware: true });
    hideLoginDlg = () => this.setState({ showLoginSoftware: false });

    getSubmitError = res => {
        let message = '';
        let isOk = res.ok;

        // the backend is sending 404 when it's unable to find the user
        let badRequest = false;
        let notFound = false;
        let notVerified = false;
        let notFoundTitle = '';
        let yesConfirm = '';
        let noConfirm = '';
        let hasError = !isOk;
        let useOauthConfirm = false;

        // check if it was a basic bad request error (validation error)
        if (res.status) {
            if (res.status === 400) {
                badRequest = true;
            } else if (res.status === 404) {
                notFound = true;
            } else if (res.status === 403) {
                notVerified = true;
            }
        }

        if (res.body && res.body.message) {
            message = res.body.message;
        }

        if (hasError) {
            notFoundTitle = noAccountFoundTitle;
            yesConfirm = 'Install a plugin';
            noConfirm = 'Try again?';
        }

        if (res.body && res.body.title) {
            notFoundTitle = res.body.title;
        }

        if (res.body && res.body.yesConfirm) {
            yesConfirm = res.body.yesConfirm;
            if (yesConfirm && yesConfirm.toLowerCase().indexOf('ok') === -1) {
                // it's using a github or google confirm label
                useOauthConfirm = true;
            }
            noConfirm = 'Cancel';
        }

        if (!isOk) {
            this.setState({
                badRequest,
                notFound,
                notVerified,
                message,
                notFoundTitle,
                yesConfirm,
                noConfirm,
                hasError,
                useOauthConfirm
            });
        }
    };
}

const withState = connect(state => {
    const path = window.location.pathname;
    const isLogin = path === '/login';
    const isSignUp = path === '/signup';
    const isOnboarding = path === '/onboarding';
    const { loginAttempt } = state.user;

    console.log('state.user', state.user);

    return {
        path,
        isLogin,
        isSignUp,
        isOnboarding,
        loginAttempt
    };
});

export default withStyles(styles)(withState(Login));
```

state.user

```
{
  "user": null,
  "isLoading": false,
  "isAdmin": false,
  "isDeleted": false,
  "preparedWorkingHours": [],
  "preparedCodeGoals": {},
  "workingHoursDayStarts": [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  ],
  "isEmailAvailable": true,
  "loginAttempt": {
    "email": "",
    "password": ""
  },
  "loginStatus": {
    "loginStatusCode": "success",
    "title": "",
    "message": "",
    "noConfirm": "Cancel",
    "yesConfirm": "Ok"
  },
  "resentVerificationEmailTs": "",
  "changePasswordRequest": {
    "status": "",
    "message": "",
    "code": ""
  }
}
```

**/frontend/src/components/login**

```
├── ButtonGithub.js
├── ButtonGoogle.js
├── ButtonSoftware.js
├── ButtonSpotify.js
├── LoginInfoDialog.js
├── LoginInfoSnackbar.js
├── LoginSoftware.js
├── LoginSoftwareDialog.js
├── SignupConfirm.js
└── SignupLoginToggle.js
```

## Backend Code

## From Scratch

https://material-ui.com/getting-started/templates/sign-in/

https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js

https://material-ui.com/getting-started/templates/sign-up/

https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js

https://github.com/MichalSzorad/react-social-login-buttons

https://github.com/funador/react-auth-client

https://github.com/funador/react-auth-server

https://github.com/BalasubramaniM/react-nodejs-passport-app

https://github.com/BalasubramaniM/react-nodejs-passport-server

### Google oAuth Settings

https://console.developers.google.com/apis/credentials/oauthclient

```
{
    "web": {
        "client_id": "693108335854-h2i4b317eehmfr60tplekdjt6j1e8ku8.apps.googleusercontent.com",
        "project_id": "api-project-693108335854",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "bmu4Co19MtFlutPSpkcwqxIg",
        "redirect_uris": [
            "http://localhost:5000/auth/google/callback",
            "https://app.software.com/auth/google/callback",
            "https://api.software.com/auth/google/callback",
            "https://stagingapi.software.com/auth/google/callback",
            "https://testapi.software.com/auth/google/callback",
            "https://qaapi.software.com/auth/google/callback"
        ]
    }
}

```

Client ID
693108335854-h2i4b317eehmfr60tplekdjt6j1e8ku8.apps.googleusercontent.com
Client secret
bmu4Co19MtFlutPSpkcwqxIg
Creation date
Oct 26, 2017, 10:33:41 AM

Name
Software.com Web Application

http://localhost:5000/auth/google/callback
https://app.software.com/auth/google/callback
https://api.software.com/auth/google/callback
https://stagingapi.software.com/auth/google/callback
https://testapi.software.com/auth/google/callback
https://qaapi.software.com/auth/google/callback
https://www.example.com
