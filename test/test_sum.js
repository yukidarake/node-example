var assert = require('power-assert');
var sum = require('../2-1/sum');

describe('calc', function () {
    describe('#sum()', function () {
        it('should return sum', function () {
            assert(sum(1, 2) === 3);
        });
    });
});
