'use strict';

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  seleniumServerJar: '/usr/lib/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  chromeDriver: '/usr/lib/node_modules/protractor/selenium/chromedriver',
  specs: ['specs.js'],

  onPrepare: function() {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tests/report'
    }));
  }
};
