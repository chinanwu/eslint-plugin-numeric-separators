const rule = require('../rules/use-numeric-separators');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('format-long-numbers', rule, {
	valid: [
		{
			code: 'var foo = 100;',
			parserOptions: { ecmaVersion: 2021 }
		},
		{
			code: 'var foo = 1_000;',
			parserOptions: { ecmaVersion: 2021 }
		},
		{
			code: 'var foo = 1_000_000;',
			parserOptions: { ecmaVersion: 2021 }
		},
		{
			code: 'var foo = parseInt(123_456_789);',
			parserOptions: { ecmaVersion: 2021 }
		},
		{
			code: 'console.log(9_876);',
			parserOptions: { ecmaVersion: 2021 }
		},
		{
			code: 'var foo = array[1_00];',
			parserOptions: { ecmaVersion: 2021 }
		},
	],

	invalid: [
		{
			code: 'var foo = 1000;',
			errors: [{ messageId: 'useSeparator', data: { num: '1000' } }],
		},
		{
			code: 'var foo = 1000000;',
			errors: [{ messageId: 'useSeparator', data: { num: '1000000' } }],
		},
	],
});

// Research:
// - https://eslint.org/docs/developer-guide/nodejs-api#ruletester

// Example:
// - Eslint
//		- https://github.com/eslint/eslint/blob/master/tests/lib/rules/no-magic-numbers.js
//		- https://github.com/eslint/eslint/blob/master/lib/rules/no-magic-numbers.js
// - A11y
//		- https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/__tests__/src/rules/lang-test.js
//		- https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/src/rules/lang.js
