var assert = require('power-assert');
var count = 0;

describe('describe0', function () {
    before(function() {
        count++;
        console.log(count + ' before');
    });

    after(function() {
        count++;
        console.log(count + ' after');
    });

    beforeEach(function() {
        count++;
        console.log(count + ' beforeEach');
    });

    afterEach(function() {
        count++;
        console.log(count + ' afterEach');
    });

    describe('describe1', function () {
        it('it1', function () {
        });
    });

    describe('describe2', function () {
        it('it2', function () {
        });
    });
});
