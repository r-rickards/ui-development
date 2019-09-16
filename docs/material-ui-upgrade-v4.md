# Upgrading material-ui

**Latest version: 4.4.1**

https://material-ui.com/

✅ Read https://material-ui.com/guides/migration-v3/

-   Update Material-UI & Material-UI Styles version

```
// React 16.9.0 already up to date
yarn add @material-ui/core
yarn add @material-ui/styles
```

-   Styles

Make sure **JSS v9 is not installed**

We have
"version": "9.8.7",

-   Removing react-jss from your package.json can help.

-   Remove the first option argument of **withTheme()**.

```javascript
-const DeepChild = withTheme()(DeepChildRaw);
+const DeepChild = withTheme(DeepChildRaw);
```

```javascript
-animation: 'mui-ripple-enter 100ms cubic-bezier(0.4, 0, 0.2, 1)',
+animation: '$mui-ripple-enter 100ms cubic-bezier(0.4, 0, 0.2, 1)',
```

### Handling breaking changes

-   Theme

```javascript
-const background = { main: color };
-theme.palette.augmentColor(background);
+const background = theme.palette.augmentColor({ main: color });
```

```javascript
typography: {
- useNextVariants: true,
}
```

theme.spacing.unit usage is deprecated

```javascript
label: {
  [theme.breakpoints.up('sm')]: {
-paddingTop: theme.spacing.unit * 12,
+paddingTop: theme.spacing(12),
  },
}
```

-   Grid

```
/**
-   Defines the space between the type `item` component.
-   It can only be used on a type `container` component.
*/
    -spacing: PropTypes.oneOf([0, 8, 16, 24, 32, 40]),
    +spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
```

-   Button

    [Button] Remove the deprecated button variants (flat, raised and fab):

```javascript
-<Button variant="raised" /> + <Button variant="contained" />;
```

```javascript
-<Button variant="flat" /> + <Button variant="text" />;
```

```
-import Button from '@material-ui/core/Button';
-<Button variant="fab" />
+import Fab from '@material-ui/core/Fab';
+<Fab />
```

```
-import Button from '@material-ui/core/Button';
-<Button variant="extendedFab" />
+import Fab from '@material-ui/core/Fab';
+<Fab variant="extended" />
```

-   Card

    [CardActions] Rename the disableActionSpacing prop to disableSpacing.

    [CardActions] Remove the disableActionSpacing CSS class.

    [CardActions] Rename the action CSS class to spacing.

*   ClickAwayListener

    [ClickAwayListener] Hide react-event-listener props.

*   Dialog

    [DialogActions] Rename the disableActionSpacing prop to disableSpacing.

    [DialogActions] Rename the action CSS class to spacing.

    [DialogContentText] Use typography variant body1 instead of subtitle1.

    [Dialog] The child needs to be able to hold a ref. The composition guide explains the migration strategy.

*   Divider

    [Divider] Remove the deprecated inset prop.

```
-<Divider inset />
+<Divider variant="inset" />;
```

-   ExpansionPanel

    [ExpansionPanelActions] Rename the action CSS class to spacing.

    [ExpansionPanel] Increase the CSS specificity of the disabled style rule.

-   List

    [List] Rework the list components to match the specification:

    The ListItemAvatar component is required when using an avatar.

    The ListItemIcon component is required when using a left checkbox.

    The edge property should be set on the icon buttons.

    [ListItem] Increase the CSS specificity of the disabled and focusVisible style rules.

-   Menu

    [MenuItem] Remove the fixed height of the MenuItem. The padding and line-height are used by the browser to compute the height.

-   Modal

    [Modal] The child needs to be able to hold a ref. The composition guide explains the migration strategy.

    This also applies to Dialog and Popover.

    [Modal] Remove the classes customization API for the Modal component (-74% bundle size reduction when used standalone).

    [Modal] event.defaultPrevented is now ignored. The new logic closes the Modal even if event.preventDefault() is called on the key down escape event. event.preventDefault() is meant to stop default behaviors like clicking a checkbox to check it, hitting a button to submit a form, and hitting left arrow to move the cursor in a text input etc. Only special HTML elements have these default behaviors. You should use event.stopPropagation() if you don't want to trigger an onClose event on the modal.

-   Paper

```
-<Paper />
+<Paper elevation={2} />;
```

-   Slide

    [Slide] The child needs to be able to hold a ref. The composition guide explains the migration strategy.

-   Slider

```javascript
-import Slider from '@material-ui/lab/Slider'
+import Slider from '@material-ui/core/Slider'
```

-   Switch

    [Switch] Refactor the implementation to make it easier to override the styles. Rename the class names to match the specification wording:

```
-icon
-bar
+thumb
+track
```

-   Snackbar

    [Snackbar] Match the new specification.

    Change the dimensions

    Change the default transition from Slide to Grow.

-   SvgIcon

```
-<AddIcon nativeColor="#fff" />
+<AddIcon htmlColor="#fff" />
```

-   Tabs

    [Tab] Remove the labelContainer, label and labelWrapped class keys for simplicity. This has allowed us to remove 2 intermediary DOM elements. You should be able to move the custom styles to the root class key.

    [Tabs] Remove deprecated fullWidth and scrollable props:

```
-<Tabs fullWidth scrollable />
+<Tabs variant="scrollable" />;
```

-   Table
    [TableCell] Remove the deprecated numeric property:

```
-<TableCell numeric>{row.calories}</TableCell>
+<TableCell align="right">{row.calories}</TableCell>;
```

    [TableRow] Remove the fixed height CSS property. The cell height is computed by the browser using the padding and line-height.

    [TableCell] Move the dense mode to a different property:

```
-<TableCell padding="dense" />
+<TableCell size="small" />;
```

    [TablePagination] The component no longer tries to fix invalid (page, count, rowsPerPage) property combinations. It raises a warning instead.

-   TextField

    [InputLabel] You should be able to override all the styles of the FormLabel component using the CSS API of the InputLabel component. The FormLabelClasses property has been removed.

```
<InputLabel
- FormLabelClasses={{ asterisk: 'bar' }}
+ classes={{ asterisk: 'bar' }}
>
  Foo
</InputLabel>
```

    [InputBase] Change the default box sizing model. It uses the following CSS now:

```
box-sizing: border-box;
```

This solves issues with the fullWidth prop.

    [InputBase] Remove the inputType class from InputBase.

-   Tooltip

    [Tooltip] The child needs to be able to hold a ref. The composition guide explains the migration strategy.

    [Tooltip] Appears only after focus-visible focus instead of any focus.

-   Typography

    [Typography] Remove the deprecated typography variants. You can upgrade by performing the following replacements:

        display4 => h1
        display3 => h2
        display2 => h3
        display1 => h4
        headline => h5
        title => h6
        subheading => subtitle1
        body2 => body1
        body1 (default) => body2 (default)

    [Typography] Remove the opinionated display: block default typography style. You can use the new display?: 'initial' | 'inline' | 'block'; property.

    [Typography] Rename the headlineMapping property to variantMapping to better align with its purpose.

```
-<Typography headlineMapping={headlineMapping}>
+<Typography variantMapping={variantMapping}>
```

    [Typography] Change the default variant from body2 to body1. A font size of 16px is a better default than 14px. Bootstrap, material.io, and even our documentation use 16px as a default font size. 14px like Ant Design uses is understandable, as Chinese users have a different alphabet. We recommend 12px as the default font size for Japanese.

    [Typography] Remove the default color from the typography variants. The color should inherit most of the time. It's the default behavior of the web.

    [Typography] Rename color="default" to color="initial" following the logic of this thread. The usage of default should be avoided, it lacks semantic.

## Notes

**Delete all node_modules before the yarn**

Migrating from:
"version": "3.9.3"

```json
"dependencies": {
    "@material-ui/core": "^4.0.0",
    "@material-ui/styles": "^4.0.0"
}
```
