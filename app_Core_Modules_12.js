//common practice to name import variable the same as the name of the module name
var fs = require('fs'); //filesystem core module; note that you do not include './'
var path = require('path'); //path core module

fs.writeFileSync("corn_Core_Modules_12.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn_Core_Modules_12.txt").toString());

var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";
//path core module will normalize all path names across all operating systems
console.log(path.normalize(websiteHome)); //note that the double slash is gone
console.log(path.dirname(websiteAbout)); //gives the name of the directory without the filename
console.log(path.basename(websiteAbout)); //gives the name of the file without the extension
console.log(path.extname(websiteAbout)); //gives the extension of the file without the name

console.log(__dirname); //This will give the directory name of the file calling this function
console.log(__filename); //This will give the filename, path and extension of the file calling this function

setTimeout(function(){
  console.log("beef");
}, 2000);  //This will run once after 2000 milliseconds

setInterval(function(){
  console.log("beef");
}, 2000); //This will run multiple times; once each time after 2000 milliseconds
