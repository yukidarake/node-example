var load = require('./load');

load(function(err, json) {
   if (err) {
       console.log(err);
       return;
   }

   console.log(json.description);
});

