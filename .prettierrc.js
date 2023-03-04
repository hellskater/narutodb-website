module.exports = {
	arrowParens: 'avoid',
	trailingComma: 'none',
	tabWidth: 4,
	printWidth: 100,
	semi: false,
	useTabs: true,
	bracketSpacing: true,
	bracketSameLine: false,
	singleQuote: true,
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[./]'],
	importOrderSortSpecifiers: true,
	plugins: [
		'prettier-plugin-tailwindcss' // MUST come last
	],
	pluginSearchDirs: false
}
