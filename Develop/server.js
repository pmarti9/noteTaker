let express = require('express');
let path = require('path');
let fs = require('fs');

let app = express();
let PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/public'));



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});