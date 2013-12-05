/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/
/*jshint node:true, browser:false*/
'use strict';

var Lab = require('lab');

var FileSystem = require('../');
var kvsF = new FileSystem({ root:__dirname+'/tmp/' });

var testData = new Buffer('testing');

Lab.test('set a value', function(done) {
  kvsF.set('test', testData, function(err) {
    Lab.expect(!err).to.equal(true);
    done();
  });
});

Lab.test('get a value', function(done) {
  kvsF.get('test', function(err, val) {
    Lab.expect(!err).to.equal(true);
    Lab.expect(val).to.be.an('object');
    Lab.expect(val.toString('hex')).to.equal(testData.toString('hex'));
    done();
  });
});



Lab.test('remove a value', function(done) {
  kvsF.remove('test', function(err) {
    Lab.expect(!err).to.equal(true);
    done();
  });
});

Lab.after(function(done) {
  require('fs').rmdir(__dirname+'/tmp', done);
});
