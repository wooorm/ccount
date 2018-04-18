'use strict';

var test = require('tape');
var ccount = require('.');

test('ccount(value, character)', function (t) {
  t.equal(ccount(true, 't'), 1, 'should coerce to string');

  t.throws(
    function () {
      ccount(true, 0);
    },
    /Expected character/,
    'should throw when character is invalid (#1)'
  );

  t.throws(
    function () {
      ccount(true, 'incorrect');
    },
    /Expected character/,
    'should throw when character is invalid (#2)'
  );

  t.test('should work', function (st) {
    st.equal(ccount('', 'f'), 0);
    st.equal(ccount('foo', 'o'), 2);
    st.equal(ccount('fo fooo fo', 'o'), 5);
    st.equal(ccount('ooo', 'o'), 3);
    st.end();
  });

  t.end();
});
