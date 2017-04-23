module.exports = {
    plugins: [
	require('postcss-modules')({
		scopeBehaviour: 'local' // can be 'global' or 'local',
	}),
        require('precss'),
        require('autoprefixer'),
    ]
}
