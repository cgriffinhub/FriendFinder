// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var fs = require('fs');
// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/friends", function(request, response) {

    fs.readFile('app/data/friends.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var obj = JSON.parse(data);
        return response.json(obj);
      });
  });


  app.post("/api/friends", (request, response) => {

    fs.readFile('app/data/friends.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var userAdd = request.body;
        var obj = JSON.parse(data);
        obj.push(userAdd); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('app/data/friends.js', json, function(err) {
            if (err) {
                console.log(err);
            }
        }); // write it back 
      });

  });

};
