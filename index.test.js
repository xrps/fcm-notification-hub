const test = require('ava');
const isExpress = require('is-express-app');
const isFunction = require('is-function');

const createWebService = require('.');

test('returns an express factory', (t) => {
  t.true(isFunction(createWebService));
  t.true(isExpress(createWebService()));
});
