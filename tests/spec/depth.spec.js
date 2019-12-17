'use strict';

{

  const equal           = require('../..')
  const equalDeep       = (a, b) => equal(a, b, {shallow: false})
  const equalReference  = (a, b) => equal(a, b, {shallow: true, depth: 0})
  const equalShallow_d1 = (a, b) => equal(a, b, {shallow: true, depth: 1})
  const equalShallow_d2 = (a, b) => equal(a, b, {shallow: true, depth: 2})
  const equalShallow_d3 = (a, b) => equal(a, b, {shallow: true, depth: 3})
  const equalShallow_d4 = (a, b) => equal(a, b, {shallow: true, depth: 4})
  const assert          = require('assert')

  testCases(equalDeep,       'equal - deep equality',              require('./depth_tests').deep)
  testCases(equalReference,  'equal - strict reference equality',  require('./depth_tests').reference)
  testCases(equalShallow_d1, 'equal - shallow equality - depth=1', require('./depth_tests').shallow_d1)
  testCases(equalShallow_d2, 'equal - shallow equality - depth=2', require('./depth_tests').shallow_d2)
  testCases(equalShallow_d3, 'equal - shallow equality - depth=3', require('./depth_tests').shallow_d3)
  testCases(equalShallow_d4, 'equal - shallow equality - depth=4', require('./depth_tests').shallow_d4)

  function testCases(equalFunc, suiteName, suiteTests) {
    describe(suiteName, function() {
      suiteTests.forEach(function (suite) {
        describe(suite.description, function() {
          suite.tests.forEach(function (test) {
            (test.skip ? it.skip : it)(test.description, function() {
              assert.strictEqual(equalFunc(test.value1, test.value2), test.equal);
            });
            (test.skip ? it.skip : it)(test.description + ' (reverse arguments)', function() {
              assert.strictEqual(equalFunc(test.value2, test.value1), test.equal);
            });
          });
        });
      });
    });
  }

}
