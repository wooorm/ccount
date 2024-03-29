# ccount

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Get the count of how often `substring` occurs in `value`.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`ccount(value, character)`](#ccountvalue-character)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a tiny package that finds the count of a substring.

## When should I use this?

I find this particularly useful when generating code, for example, when building
a string that can either be double or single quoted.
I use this utility to choose single quotes when double quotes are used more
frequently, and double quotes otherwise.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install ccount
```

In Deno with [`esm.sh`][esmsh]:

```js
import {ccount} from 'https://esm.sh/ccount@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {ccount} from 'https://esm.sh/ccount@2?bundle'
</script>
```

## Use

```js
import {ccount} from 'ccount'

ccount('foo(bar(baz)', '(') // => 2
ccount('foo(bar(baz)', ')') // => 1
```

## API

This package exports the identifier `ccount`.
There is no default export.

### `ccount(value, character)`

Get the count of `substring` in `value`.

###### Parameters

*   `value` (`string`) — content to search in
*   `substring` (`string`) — substring to look for, typically one character

###### Returns

Count of `substring`s in `value` (`number`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/longest-streak`](https://github.com/wooorm/longest-streak)
    — count the longest repeating streak of `substring`s in `value`
*   [`wooorm/direction`](https://github.com/wooorm/direction)
    — detect directionality: left-to-right, right-to-left, or neutral

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/ccount/workflows/main/badge.svg

[build]: https://github.com/wooorm/ccount/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/ccount.svg

[coverage]: https://codecov.io/github/wooorm/ccount

[downloads-badge]: https://img.shields.io/npm/dm/ccount.svg

[downloads]: https://www.npmjs.com/package/ccount

[size-badge]: https://img.shields.io/bundlephobia/minzip/ccount.svg

[size]: https://bundlephobia.com/result?p=ccount

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
