module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpg,html,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};