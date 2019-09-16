<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" title="react" width=45 align=right style="margin-top: 40px" />

# React Patterns

https://reactjs.org/docs/getting-started.html

Prefer functions over classes

> **NOTE:** Because stateless functions don't have a backing instance, you can't attach a ref to a stateless function component. Normally this isn't an issue, since stateless functions do not provide an imperative API. Without an imperative API, there isn't much you could do with an instance anyway. However, if a user wants to find the DOM node of a stateless function component, they must wrap the component in a stateful component (eg. ES6 class component) and attach the ref to the stateful wrapper component.

If you use a **class** don't use a constructor or call `super(props)`, don't `bind(this)` handlers.

**Bad**

```javascript
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <div onClick={this.tick}>Clicks: {this.state.count}</div>;
    }
}
```

**Good**

```javascript
class Counter extends React.Component {
    state = {
        count: props.initialCount
    };

    tick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return <div onClick={this.tick}>Clicks: {this.state.count}</div>;
    }
}

// Or use an arrow function inline
<div onClick={() => this.tick()}>Clicks: {this.state.count}</div>;
```

**Better**

```javascript
const Counter = ({initialCount}) => {

    const [count, setCount] = React.useState(initialState);
    return (
        <div onClick={() => setCount(count + 1)}>Clicks: {count}</div
   )
}
```

#### Props

Passing props

**Bad**

```javascript
const props = {
    onClose: handleClose,
    open: isOpen,
    children
};

<Dialog onClose={handleClose} open={isOpen}>
    {children}
</Dialog>;
```

**Good**

```javascript
const props = {
    onClose,
    open,
    children
};

<Dialog {...props} />;
```

💡 **Tip:** Name the values the same as the prop. If all the props get passed down - use the **spread operator**.

**Bad**

```javascript
/*
 * props = {
 *   id: 1,
 *   name: 'Slash',
 *   instrument: 'guitar'
 * }
 */

const FeedItem = () => {
    // Use the props in the component JSX
    return (
        <div>
            {this.props.name} - {this.props.instrument}
        </div>
    );
};
```

**Better**

```javascript
/*
 * props = {
 *   id: 1,
 *   name: 'Slash',
 *   instrument: 'guitar'
 * }
 */

const FeedItem = () => {
    const { id, name, instrument } = this.props;
    // Use the props in the component JSX
    return (
        <div>
            {name} - {instrument}
        </div>
    );
};
```

**Good**

```javascript
/*
 * props = {
 *   id: 1,
 *   name: 'Slash',
 *   instrument: 'guitar'
 * }
 */

const FeedItem = ({ id, name, instrument }) => {
    // Use the props in the component JSX
    return (
        <div>
            {name} - {instrument}
        </div>
    );
};
```

💡 **Tip:** Destructure the props argument

##### Boolean Attributes

Boolean attributes like disabled, required, checked and readOnly.

True

```
<input type="button" disabled />;
```

False

```
<input type="button" disabled={false} />;
```

💡 **Tip:** To pass false an attribute expression must be used.

#### Render Props

A render prop is a function prop that a component uses to know what to render.

A technique for sharing code between (_Cross-Cutting Concerns_) React components using a prop whose value is a function.

#### State

**What goes in state?**

-   State should contain data that a component's event handlers may change to trigger a UI update.

**What Shouldn't Go in State?**

this.state should only contain the minimal amount of data needed to represent your UI's state. As such, it should not contain:

-   **Computed data**: Don't worry about precomputing values based on state — it's easier to ensure that your UI is consistent if you do all computation within render().

    For example, if you have an array of list items in state and you want to render the count as a string, simply render this.state.listItems.length + ' list items' in your render() method rather than storing it on state.

-   **Duplicated data from props**: Try to use props as the source of truth where possible. One valid use to store props in state is to be able to know its previous values, because props may change as the result of a parent component re-rendering.

#### Conditional rendering

_Short-circuit evaluation_

**Bad**

```javascript
// JSX
{
    isLoading ? (
        <div className={classes.progress}>
            <Pace color="#44BDF4" />
        </div>
    ) : null;
}

// Attributes/props
<div className={isRequired ? 'is-required' : null}>Required</div>;
```

**Good**

```javascript
// JSX
{
    isLoading && (
        <div className={classes.progress}>
            <Pace color="#44BDF4" />
        </div>
    );
}

// Attributes/props
<div className={isRequired && 'is-required'}>Required</div>;
```

If rather than a boolean the attribute is a choice - use a **ternary**

```javascript
<div
    className={checkTheme() === 'dark' ? classes.darkTheme : classes.lightTheme}
/>
```

```javascript
<div>
    {(() => {
        switch (this.state.color) {
            case 'red':
                return '#FF0000';
            case 'green':
                return '#00FF00';
            case 'blue':
                return '#0000FF';
            default:
                return '#FFFFFF';
        }
    })()}
</div>
```

💡 **Tip:** Using [immediately-invoked function expressions](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)

#### Looping through arrays

```javascript
import React, { useState } from 'react';

// Real data will likely come in as props
const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];

const List = () => {
  const [list, setList] = useState(INITIAL_LIST);

    const onRemoveItem (id, e) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
  }

  const listItems = list.map((item, index) => (
        <li key={index}>
            <a href={item.url}>{item.title}</a>
            <button type="button" onClick={(e) => onRemoveItem(item.id, e)}>
            Remove
            </button>
        </li>
    ))

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default List;
```

💡 **Tip:** **Use the index as key**, rather than a value from the array data &mdash; it's always unique.

https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b

```javascript
import * as React from 'react';

const authHandler = async () => {
    try {
        setLoading(true);
        const userData = await apiRequest(
            'https://jsonplaceholder.typicode.com/users',
            'post',
            { email: userEmail, password: userPassword }
        );
        const { id, email } = userData;
    } catch (err) {
        setLoading(false);
        showError(err.message);
    }
};

function Login() {
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                if (validateLoginForm(userEmail, userPassword, showError)) {
                    authHandler();
                }
            }}
        >
            <Header>Sign in</Header>
            <br />
            <FormGroup>
                <Input
                    type="email"
                    name="email"
                    value={userEmail}
                    placeholder="john@mail.com"
                    onChange={e => setUserEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    name="password"
                    value={userPassword}
                    placeholder="Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" disabled={loading} block={true}>
                {loading ? 'Loading...' : 'Sign In'}
            </Button>
        </Form>
    );
}
export default Login;
```

```javascript
import * as React from 'react';
const useErrorHandler = (initialState: string | null) => {
    const [error, setError] = React.useState(initialState);
    const showError = (errorMessage: string | null) => {
        setError(errorMessage);
        window.setTimeout(() => {
            setError(null);
        }, 3000);
    };
    return { error, showError };
};
export default useErrorHandler;
```

Wrapping a component (HOC)

# Roadmap

Typescript

[Documentation](https://www.typescriptlang.org/docs/home.html)

Use the create-react-app cli to create a new typescript project.

```
npx create-react-app my-app --typescript
```

Add to an existing project

```
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

How about node?

https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter
