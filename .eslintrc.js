// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		curly: ['error', 'multi-line'],
		'consistent-return': 'error',
		eqeqeq: 'error',
		'no-alert': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
	},
	plugins: ['import'],
};
