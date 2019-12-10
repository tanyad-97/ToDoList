const fs = require('fs');
const UglifyJS = require('uglify-js');
const result = UglifyJS.minify(["main.js"]);

console.log(result.code);

fs.writeFile("main.min.js", result.code, function (err) {
    if(err){
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});