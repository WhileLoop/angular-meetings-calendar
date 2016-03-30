'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    //TODO: watch, istanbul, usemin

    wiredep: {
      task: {
        src: [
          'public/index.html'
        ]
      }
    },

    jshint: {
      server: {
        src: ['Gruntfile.js', 'app.js', 'models/*.js', 'routes/*.js'],
        options: {
          strict: "global",
          node: true
        }
      },
      tests: {
        src: ['tests/*.js'],
        options: {
          strict: "global",
          jasmine: true,
          mocha: true,
          node: true,
          globals: {
            it: false,
            browser: false,
            element: false,
            by: false
          }
        }
      },
      web: {
        src: ['public/javascripts/*.js'],
        options: {
          strict: false
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'public/bower_components'
        }
      }
    },

    clean: {
      bower: ["public/bower_components"]
    },

    express: {
      dev: {
        options: {
          script: 'bin/www',
          delay: 5
        }
      }
    },

    wait: {
      options: {
        delay: 10000
      }
    },

    protractor: {
      options: {
        keepAlive: true,
        configFile: "tests/local-conf.js"
      },
      run: {}
    },

    shell: {
      xvfb: {
        command: 'Xvfb :99 -ac -screen 0 1600x1200x24',
        options: {
          stdout: false,
          stderr: false,
          async: true
        }
      },
      dropdb: {
        command: 'mongo meetings --eval "db.dropDatabase()"'
      }
    },

    env: {
      xvfb: {
        DISPLAY: ':99'
      }
    }

  });

  grunt.registerTask('protractor-xvfb', [
    'shell:dropdb',
    'express:dev',
    'shell:xvfb',
    'env:xvfb',
    'protractor:run',
    'shell:xvfb:kill'
  ]);

  grunt.registerTask('bower-install', [
    'bower:install',
    'wiredep'
  ]);

};
