# Authentication & Authorization

<img src="https://oauth.net/images/oauth-logo-square.png" width=50 align=right />

## OAuth Authentication

[OAuth 2.0](https://oauth.net/2/)

<img src="https://confluence.atlassian.com/bitbucket/files/238027431/301007093/5/1559333015336/diagram.png" />

[react-social-login-buttons](https://github.com/MichalSzorad/react-social-login-buttons)

<img alt="social login" src="https://raw.githubusercontent.com/MichalSzorad/react-social-login-buttons/master/examples/simple/screenshot1.jpg" />

```javascript
<GoogleLoginButton onClick={() => alert("Google")} />
<GithubLoginButton onClick={() => alert("Github")} />
```

#### Create your own button

You can create your own button.

You can also use your own icons, let's say from font-awesome.

You can also pass a component to the icon prop.

```
import React from "react";
import {createButton} from "react-social-login-buttons";

const config = {
  text: "Login",
  icon: "cody",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#00b4ee" },
  activeStyle: { background: "#00b4ee" }
};

const SoftwareLoginButton = createButton(config);

export default SoftwareLoginButton;
```

## Example

<img align=right width=50 src="data:image/png;base64,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" />

[Client](https://github.com/funador/react-auth-client)

[Server](https://github.com/funador/react-auth-server)

```
npm install dotenv --save
```

## Roadmap

Using hooks to handle authentication.

```javascript
import React from 'react'
import {useUser} from './context/auth'

const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export App
```

```javascript
import React from 'react';
import { FullPageSpinner } from '../components/lib';

const AuthContext = React.createContext();

function AuthProvider(props) {
    // code for pre-loading the user's information if we have their token in
    // localStorage goes here
    // 🚨 this is the important bit.
    // Normally your provider components render the context provider with a value.
    // But we post-pone rendering any of the children until after we've determined
    // whether or not we have a user token and if we do, then we render a spinner
    // while we go retrieve that user's information.
    if (weAreStillWaitingToGetTheUserData) {
        return <FullPageSpinner />;
    }
    const login = () => {}; // make a login request
    const register = () => {}; // register the user
    const logout = () => {}; // clear the token in localStorage and the user data
    // note, I'm not bothering to optimize this `value` with React.useMemo here
    // because this is the top-most component rendered in our app and it will very
    // rarely re-render/cause a performance problem.
    return (
        <AuthContext.Provider
            value={{ data, login, logout, register }}
            {...props}
        />
    );
}

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
```

https://kentcdodds.com/blog/authentication-in-react-applications

https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/context/auth-context.js

Example
https://github.com/kentcdodds/bookshelf/tree/69bde2c117660bd988ffbc60f387165d2f852c62

https://medium.com/@ni3t/reacts-usestate-and-context-for-auth-routing-78347da1d6f
