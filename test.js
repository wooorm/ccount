'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var ccount = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('ccount(value, character)', function () {
    it('should coerce to string', function () {
        assert.equal(ccount(true, 't'), 1);
    });

    it('should throw when character is invalid', function () {
        assert.throws(function () {
            ccount(true, 0);
        }, /Expected character/);

        assert.throws(function () {
            ccount(true, 'incorrect');
        }, /Expected character/);
    });

    it('should work', function () {
        assert.equal(ccount('', 'f'), 0);
        assert.equal(ccount('foo', 'o'), 2);
        assert.equal(ccount('fo fooo fo', 'o'), 5);
        assert.equal(ccount('ooo', 'o'), 3);
    });
});
