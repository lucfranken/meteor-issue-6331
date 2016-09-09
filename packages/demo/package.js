Package.describe({
  name: 'demo',
  version: '0.0.1',
});

Package.onUse(function(api) {

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('demo');
  api.addFiles('demo-tests.js');

});
