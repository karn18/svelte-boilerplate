module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['standard-with-typescript', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
    project: "tsconfig.json",
    // tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
  rules: {
    "no-multiple-empty-lines": ["error", { max: 2 }]
  }
};
