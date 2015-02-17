var assert = require('power-assert');
var load = require('../3-1/load');

describe('load', function () {
    describe('#load()', function () {
        it('should load package.json collectly', function (done) {
            load(function(err, json) {
                assert(json.name === 'node-example');
                done();
            });
        });
    });
});
