basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

// test results reporter to use
// possible values: dots || progress
reporter = 'progress';

// enable/disable colors in the output (reporters and logs)
colors = true;
// level of logging
logLevel = LOG_DEBUG;

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

// Continuous Integration mode
// if true, it captures browsers, runs tests, and exits
singleRun = false;