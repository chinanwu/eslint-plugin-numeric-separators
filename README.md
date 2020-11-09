# Use-numeric-separators (use-numeric-separators)

'Long numbers' are numbers that have a length longer than 3. 

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
