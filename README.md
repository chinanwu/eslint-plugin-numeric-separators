# Use-numeric-separators (use-numeric-separators)

'Long numbers' are numbers that have a length longer than 3. 

## Installation
- Coming soon

## Rule Details

The `use-numeric-separators` rule aims to make code more readable by ensuring that long numbers uses "_".

Examples of **incorrect** code for this rule:

```js
/*eslint use-numeric-separators: "error"*/

const number = 1000;
```

Examples of **correct** code for this rule:

```js
/*eslint use-numeric-separators: "error"*/

const number = 1_000;
```

## TODOs
- Github Actions To Publish

## Resources I've Used
- [ESLint's official developer guide to making rules](https://eslint.org/docs/developer-guide/working-with-rules)
    - [ESLint's Rule Tester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
- ["Ensure code quality; create your own ESLint rules"](https://blog.theodo.com/2020/04/create-your-own-eslint-rules/)
- ["How I built my first custom ESLint rule"](https://blog.maximeheckel.com/posts/how-to-build-first-eslint-rule)
- [AST Explorer](https://astexplorer.net/)
- Fantastic existing examples:
    - ESLint's `no-magic-numbers` rule
        - [Test](https://github.com/eslint/eslint/blob/master/tests/lib/rules/no-magic-numbers.js)
        - [Actual Code](https://github.com/eslint/eslint/blob/master/lib/rules/no-magic-numbers.js)
    - `eslint-plugin-jsx-a11y`'s `lang` rule
        - [Test](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/__tests__/src/rules/lang-test.js)
        - [Actual Code](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/src/rules/lang.js)
