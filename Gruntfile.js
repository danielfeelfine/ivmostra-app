// Gruntfile.js
//
//

module.exports = function (grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({

    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    /************************************
     * grunt-contrib-less
     * LESS Task, compile and minify stylesheets
     ************************************/
    less: {
      compile: {
        files: {
          'www/dist/css/styles.css': 'www/src/stylesheets/build.less'
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'www/dist/css/styles.min.css': 'www/dist/css/styles.css'
        }
      }
    },

    /************************************
     * grunt-contrib-concat
     * Concat javascripts and other files
     ************************************/
    concat: {
      javascripts: {
        src: [
          // Controllers

          // Libraries
          'www/bower_components/zeptojs/src/zepto.js',
          'www/bower_components/fastclick/lib/fastclick.js',
          'www/bower_components/iscroll/build/iscroll.js',
          'www/bower_components/hammerjs/hammer.min.js',

          // App
          
        ],
        dest: 'www/dist/js/main.js'
      }
    },

    /************************************
     * grunt-contrib-watch
     * Watch some files and tasks
     ************************************/
    watch: {
      html: {
        files: 'www/**/*.html',
        options: {
          livereload: true
        }
      },
      stylesheets: {
        files: 'www/src/stylesheets/**/*.less',
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    },

    /************************************
     * grunt-bump
     * Bump package version, create tag, commit, push...
     ************************************/
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json', 'bower.json'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'v%VERSION%',
        push: true,
        pushTo: 'master',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    }

  });


  // Load multiple grunt tasks using globbing patterns
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // CSS dist task
  grunt.registerTask('dist-stylesheets', ['less']);

  // JS dist task
  grunt.registerTask('dist-javascripts', ['concat']);

  // Use grunt-bump for changing version number
  grunt.loadNpmTasks('grunt-bump');

  // Default task
  grunt.registerTask('default', ['dist-stylesheets', 'dist-javascripts', 'watch']);

};
