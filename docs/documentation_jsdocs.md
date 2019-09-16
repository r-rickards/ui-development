# Writing Documentation

### Markdown

Like what you're looking at.

### jsDocs

Include a short description; `@pararm` and `@returns` should list `{type}`

```javascript
import react, { useState } from 'react';

/**
 * Reusable button with configurable
 *           label and click handler
 *
 * @pararm {callback function} - handler for click event
 * @param {string} - label
 * @returns {button component}
 *
 * */

const Expander = ({ handleClick, label }) => {
    return <button onClick={handleClick}>{label}</button>;
};

export default Expander;
```

https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md

https://eslint.org/docs/rules/valid-jsdoc

https://jsdoc.app/index.html

<img src="https://mycolor.space/img/color-scheme-left.svg" alt="" width=300 />

<img src="https://mycolor.space/img/color-scheme-right.svg" alt="" align=right width=200 />
