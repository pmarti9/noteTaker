let fs = require('fs');
let util = require('util');
// const path = require('path');
let readFileAsync = util.promisify(fs.readFile);
let writeFileAsync = util.promisify(fs.writeFile);


module.exports = function(app) {
 
//get
  app.get("/api/notes", function(req, res) {
    readFileAsync('./db/db.json','utf8')
      .then(function(notesData){
          
          let notes = JSON.parse(data);
          res.json(notes);
          console.log(notes);
      })
      .catch(function(err) {
          console.log(err);
      })
    
  });

//POST

  app.post("/api/notes", function(req, res) {
      readFileAsync('./db/db.json','utf8')
      .then(function(){

      })
      .catch(function(err){
          console.log(err);
      })

  });

 //Delete

  app.delete("/api/notes", function(req, res) {
    readFileAsync('./db/db.json','utf8')
    .then(function(){

    })
    .catch(function(err){
        console.log(err);
    })
 
  });

};

