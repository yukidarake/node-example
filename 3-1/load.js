var fs = require('fs');

module.exports = function(callback) {
    fs.readFile('./package.json', 'utf8', function(err, content) {
        if (err) {
            return callback(err);
        }

        var json = JSON.parse(content);
        callback(err, json);
    });
};

