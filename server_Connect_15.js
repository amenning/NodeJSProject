//install connect framework by typing the following in the code "npm install connect" in the terminal
var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
  console.log("Bacon");
  next();
}

function doSecond(request, response, next){
  console.log("Tuna");
  next();
}

function profile(request, response){
  console.log("User requested profile");
}

function forum(request, response){
  console.log("User requested forum");
}

app.use(doFirst);
app.use(doSecond);

app.use('/profile', profile);
app.use('/forum', forum);


http.createServer(app).listen(8888);
console.log("Server is running...");
