// Generated on 2014-11-03 using generator-angular 0.9.8

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
"use strict";

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['client/**/*.js'],
        tasks: ['newer:jshint:all'],
      },
      compass: {
        files: ['client/styles/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      all: {
        src: [
          'Gruntfile.js',
          'client/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'client/app/css',
          cssDir: 'client/app/css',
          environment: 'production'
        }
      },
    },

  });

  grunt.registerTask('build', [
    'compass'
  ]);

  grunt.registerTask('default', [
    'jshint:all',
    'compass',
    'build'
  ]);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
};
