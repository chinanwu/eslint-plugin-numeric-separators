// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require('../rules/format-long-numbers');
const RuleTester = require('eslint').RuleTester;

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('format-long-numbers', rule, {
	// valid: ['const foo = 100', 'const foo = 1_000', 'const foo = 1_000_000'],
	valid: [
		{
			code: 'var foo = 100;',
		},
		{
			code: 'var foo = 1_000',
		},
		{
			code: 'var foo = 1_000_000',
		},
	],

	invalid: [
		{
			code: 'var foo = 1000',
			errors: [{ messageId: 'useSeparator', data: { num: '1000' } }],
		},
		{
			code: 'var foo = 1000000',
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
