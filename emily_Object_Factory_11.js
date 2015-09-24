/**
 * Created by Andrew on 9/24/2015.
 */
var movies = require('./movies_Object_Factory_11');

var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilyMovies.favMovie);
