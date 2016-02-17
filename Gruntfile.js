/* jshint node:true */
module.exports = function( grunt ) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// JavaScript linting with JSHint.
		jshint: {
			options: {jshintrc: '.jshintrc'},
			all: [
				'*.js',
				'!*.min.js'
			]
		},

		// Minify .js files.
		uglify: {
			options: {
				banner: "/** \n" +
						" * <%= pkg.name %> - v<%= pkg.version %>\n" +
						" * \n" +
						" * @author <%= pkg.author %> / <%= pkg.contributors %>\n" +
						" * @license <%= pkg.license %>\n" +
						" */\n"
			},
			main: {
				files: {'anchorify.min.js': ['anchorify.js']}
			}
		},

		// Watch changes for assets.
		watch: {
			main: {
				files: [
					'*.js',
					'!*.min.js'
				],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Register tasks
	grunt.registerTask( 'default', [
		'jshint',
		'uglify'
	]);

	grunt.registerTask( 'dev', [
		'default',
		'watch'
	]);
};
