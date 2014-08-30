module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    clean: ['build'],

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', '*.css'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/**/*.js'],
        dest: 'build/bundle.js'
      }
    }
  });
  grunt.registerTask('default', ['clean', 'browserify', 'copy']);
};
