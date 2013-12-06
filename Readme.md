# KVS File
[KVS](http://npmjs.org/package/kvs) or   *K*ey *V*alue *S*tore is an abstract KeyValueStore system. The *kvs-** group of node modules, are intended to present a unified interface to key value stores of every persuasion. This allows for substituting them without changing anything but the initializing parameters.

*KVS-file* is a KVS compliant module that uses the file-system as a persitence layer.
## Install
    npm install kvs-file
    
## Use
    var KVS=require('kvs-file');
    var store = new KVS({ 
    	root:'/path/to/storage' // the path where data should be stored
    }); 
    store.set('name', new Buffer('value is a buffer'), function(err) {…});
    store.get('name', function(err, value) { … });
    store.remove('name', function(err) { … });
    store.list('name', function(err, value) { … });

**Beware:** This module does not alter the names of your keys in any way. So if your name contains a path separator (such as /) it will create directories and could cause errors. For a way to utilitze this behaviour look at [kvs-segmentname](http://npmjs.org/package/kvs-segmentname).

## License (MIT)
**Copyright (c) 2013 [Philipp Dunkel](mailto:pip@pipobscure.com)**

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

