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

    clean : {
      js: ['client/app/js/client.js']
    },

    concat: {
      js: {
        src: ['client/app/app.js','client/app/**/*.js' ],
        dest: 'client/app/js/client.js',
      },
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['client/**/*.js'],
        tasks: ['jshint:all', 'concat:js'],
      },
      compass: {
        files: ['client/app/css/*.scss'],
        tasks: ['compass:dist']
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
          'client/app/*.js',
          'service/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc : 'client/.jshintrc'
        },
        src: ['test/spec/**/*.js']
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

    karma: {
      unit: {
        configFile: 'client/test/karma.conf.js',
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['service/test/**/*.js']
      }
    }
  });


  grunt.registerTask('default', [
    'clean:js',
    'jshint:all',
    'servertest',
    'concat:js',
    'compass',
    'clienttest'
  ]);

  grunt.registerTask('clienttest',['default','karma']);
  grunt.registerTask('servertest',['mochaTest']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
};
