/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/
/*jshint node:true, browser:false*/
'use strict';

module.exports = FileSystem;

var Abstract = require('kvs-abstract');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

Abstract.bequeath(FileSystem);
function FileSystem(options) {
  Abstract.instantiate(this);
  options = options || {};
  if (!options.root) throw(new Error('missing root folder'));
  this.root = options.root;
}

FileSystem.prototype._get = function(name, callback) {
  fs.readFile(path.resolve(this.root, name), function(err, val) {
    if (err && (err.errno === 34) && (err.code === 'ENOENT')) return callback(null, null);
    callback(err || null, val);
  });
};

FileSystem.prototype._set = function(name, value, callback) {
  var dest = path.resolve(this.root, name);
  value = Buffer.isBuffer(value) ? value : new Buffer(String(value), 'utf-8');
  mkdirp(path.dirname(dest), function(err) {
    if (err) return callback(err);
    fs.writeFile(dest, value, callback);
  });
};

FileSystem.prototype._remove = function(name, callback) {
  var dest = path.resolve(this.root, name);
  fs.unlink(dest, function(err) {
    if (err && (err.errno === 34) && (err.code === 'ENOENT')) return callback(null, null);
    callback(err || null);
  });
};

FileSystem.prototype._list = function(name, callback) {
  var dest = path.resolve(this.root, name);
  name = path.basename(dest);
  dest = path.dirname(dest);
  fs.readdir(dest, function(err, files) {
    if (err && (err.errno === 34) && (err.code === 'ENOENT')) return callback(null, { count:0, values:[] });
    files = files.map(function(file) { return path.relative(dest, path.join(dest, file)); });
    callback(null, {
      count: files.length,
      values: files.map(function(file) { return path.relative(dest, path.join(dest, file)); })
    });
  });
};
