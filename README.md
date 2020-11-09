# Format Long Numbers (format-long-numbers)

'Long numbers' are numbers that have a length longer than 3. 

## Rule Details

The `format-long-numbers` rule aims to make code more readable by ensuring that long numbers uses "_".

Examples of **incorrect** code for this rule:

```js
/*eslint no-magic-numbers: "error"*/

const number = 1000;
```

Examples of **correct** code for this rule:

```js
/*eslint no-magic-numbers: "error"*/

const number = 1_000;
```
