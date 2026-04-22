/** @type {import('@stryker-mutator/core').PartialStrykerOptions} */
module.exports = {
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  mutate: ['src/**/*.js'],
  reporters: ['html', 'clear-text', 'progress'],
  htmlReporter: {
    fileName: 'reports/mutation/index.html',
  },
  thresholds: {
    high: 80,
    low: 60,
    break: null,
  },
};
