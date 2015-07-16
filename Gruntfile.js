// Gruntfile.js
module.exports = function (grunt) {
	grunt.initConfig({
		// stylus
		stylus: {
			compile: {
				options: {
					// compress: true
				}, files: {
					'css/app.css': 'stylus/app.styl'
				}
			}
		},
		// watch
		watch: {
			scripts: {
				files: ['**/*.styl'],
				tasks: ['stylus']
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ['watch']);
};