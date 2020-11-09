// eslint-disable-next-line no-undef
const rule = require('../../../lib/rules/use-numeric-separators');
// eslint-disable-next-line no-undef
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('format-long-numbers', rule, {
	valid: [
		{
			code: 'var foo = 100;',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = 1_000;',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = 1_000_000;',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = parseInt(123_456_789);',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'console.log(9_876);',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = array[1_00];',
			parserOptions: { ecmaVersion: 2021 },
		},
	],

	invalid: [
		{
			code: 'var foo = 1000;',
			errors: [{ messageId: 'useSeparator', data: { raw: '1000' } }],
			output: 'var foo = 1_000;',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = 1000000;',
			errors: [{ messageId: 'useSeparator', data: { raw: '1000000' } }],
			output: 'var foo = 1_000_000;',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'console.log(1234567890);',
			errors: [{ messageId: 'useSeparator', data: { raw: '1234567890' } }],
			output: 'console.log(1_234_567_890);',
			parserOptions: { ecmaVersion: 2021 },
		},
		{
			code: 'var foo = parseInt(123456789);',
			errors: [{ messageId: 'useSeparator', data: { raw: '123456789' } }],
			output: 'var foo = parseInt(123_456_789);',
			parserOptions: { ecmaVersion: 2021 },
		},
	],
});

// https://github.com/eslint/eslint/pull/13574/files
