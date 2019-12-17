### [fast-equal](https://github.com/warren-bank/node-fast-equal)

Fork of [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)

* based on tagged release: `3.1.1`
  - [source](https://github.com/epoberezkin/fast-deep-equal/blob/v3.1.1/src/index.jst)
  - [npm](https://cdn.jsdelivr.net/npm/fast-deep-equal@3.1.1/es6/react.js)

#### Differences:

* `equal(a, b, options)`
  - options:
    1. key: `depth`
       - type: integer
         * default value = `Infinity`
         * summary:
           - provides fine grain control to configure how deep to recurse into a data structure to test equality
             * typically, you're given 2 choices:
               - _shallow_
                 * equivalent to: `{depth: 1}`
                 * equality occurs when either:
                   - `a === b`
                   - `a` and `b` are both: Arrays, Objects, ES6 Maps
                     * same length
                     * all children: `a[i] === b[i]`
               - _deep_
                 * equivalent to: `{depth: Infinity}`
                 * equality occurs when either:
                   - shallow equality is true
                   - for all children where: `a[i] !== b[i]`
                     * `a[i]` and `b[i]` are both: Arrays, Objects, ES6 Maps
                     * same length
                     * all children: `a[i][j]` and `b[i][j]` exhibit _deep_ equality
    2. key: `shallow`
       - type: boolean
         * default value = `false`
         * summary:
           - `true`
             * equivalent to: `{depth: 1}`
           - `false`
             * equivalent to: `{depth: Infinity}`
    3. key: `react`
       - type: boolean
         * default value = `false`
         * summary:
           - avoid traversing React elements' `_owner`
           - `_owner` contains circular references and is not needed when comparing the actual elements
    4. key: `es6`
       - type: Object || boolean
         * Object
           - keys can include: `['Map', 'Set', 'ArrayBuffer']`
           - values are boolean
         * boolean
           - shortcut for assigning this boolean value to all Object keys
         * default value = `false`
  - notes:
    * the `shallow` key provides a quick way to configure the `depth` key with one of the two most common use cases (ie: _shallow_ and _deep_)
      - these two keys shouldn't be used together
        * `depth` takes priority

#### Install:

```bash
  npm install --save '@warren-bank/fast-equal'
```

#### Usage:

```javascript
  const equal = require('@warren-bank/fast-equal')

  const a = {foo: 'bar', hello: 'world'}
  const b = {...a}

  if (equal(a, b, {shallow: true})) {
    // profit!
  }
```

#### Legal:

* copyright: [Evgeny Poberezkin](https://github.com/epoberezkin)
* license: [MIT](https://github.com/epoberezkin/fast-deep-equal/blob/v3.1.1/LICENSE)
