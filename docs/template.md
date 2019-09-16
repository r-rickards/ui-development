# Documentation Template

# ↗︎ ➦

`★★★★★`

✔️❌✅

### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius nisl eu enim iaculis gravida. Curabitur magna mi, tempor et dolor nec, feugiat sollicitudin metus. Suspendisse nec placerat massa. Suspendisse ac feugiat leo. Nulla ut risus nec odio ultricies finibus. Nunc non urna nisi.

Praesent vel leo efficitur, lacinia neque vel, maximus orci. In elementum augue ut auctor blandit. Fusce varius posuere urna, in lobortis velit tempor sit amet. Sed lacinia tellus at congue condimentum.

## Bold

**Bold**

_Italic_

### Links

[Software](software.com)

software.com

### Lists

#### Unordered

-   Array
-   Object
-   String
-   Number
-   Boolean

#### Ordered

1. one
2. two
3. three

### Blockquote

> ...like the entire repo was written by one developer - _Rick_

### Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

---

### Table alignment

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Inline code or commands

Run `yarn test` to run tests

## Keyboard Commands

### fn ⌃ ⌥ ⌘ ⎇ ⇧ ↵ ⇄ esc tab ⌫ ↻ ↓ ↑ ← →

Unicode characters UTF-8

## Code

### Patterns

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

Prefer functions over classes.

## Emojis

#### ⚠️ Installation warnings can be ignored.

💡 **Tip:** Be sure to test the steps!

## Images

<img src="https://ws2.sinaimg.cn/large/006tNbRwgy1fvwkrv2rorj31kw16odhw.jpg" alt="One Dark Pro" title="One Dark Pro" />
