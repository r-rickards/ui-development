<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" title="react" width=45 align=right style="margin-top: 40px" />

# React Context

### When to Use Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

See example of theme switcher

https://reactjs.org/docs/context.html#when-to-use-context

**theme-context.js**

```javascript
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});
```

**theme-toggler-button.js**

```javascript
import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background }}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
```

**app.js**

```javascript
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        // The entire state is passed to the provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

ReactDOM.render(<App />, document.root);
```
