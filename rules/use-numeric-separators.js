'use strict';

const regex = /([0-9]{0,3}_[0-9]{3})+/;

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow long numbers without proper format',
			docs: 'https://github.com/chinanwu/eslint-plugin-long-numbers',
		},
		fixable: 'code',
		schema: [], // No options
		messages: {
			useSeparator: "Long numbers should be formatted with _: '{{ raw }}'",
		},
	},
	create: (context) => ({
		Literal: (node) => {
			if (!(typeof node.value === 'number') || Boolean(node.bigint)) return;

			const value = node.value;
			const raw = node.raw;

			if (value <= 999) return;
			if (raw.search(regex) >= 0) return;

			context.report({
				node,
				messageId: 'useSeparator',
				data: {
					raw,
				},
				fix: (fixer) => {
					const arr = raw.split( /(?=(?:...)*$)/ );
					let fixed = "";
					for (const item of arr) {
						if (fixed === "") {
							fixed += item;
						} else {
							fixed += "_" + item;
						}
					}

					// return fixer.replaceTextRange(node.range, fixed);
					return fixer.replaceText(node, fixed);
				}
			});
		},
	}),
};

// https://stackoverflow.com/questions/14751802/split-string-every-3-characters-from-back-using-javascript
