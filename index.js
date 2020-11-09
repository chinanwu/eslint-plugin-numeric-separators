'use strict';

module.exports = {
	rules: {
		'format-long-numbers': require('./rules/format-long-numbers'),
	},
};

// Research:
// - https://eslint.org/docs/developer-guide/working-with-rules
// - https://blog.theodo.com/2020/04/create-your-own-eslint-rules/
// - https://blog.maximeheckel.com/posts/how-to-build-first-eslint-rule
// - https://astexplorer.net/

// To install:
// "eslint-plugin-format-number": "file:eslint",