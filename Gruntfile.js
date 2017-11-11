module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	watch: {
		sass: {
			files: ['sass/*.scss'],
			tasks: ['sass','imagemin'],
		}
	},
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'main.css': 'main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	}


  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin']);
};