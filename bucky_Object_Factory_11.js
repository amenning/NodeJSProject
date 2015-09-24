/**
 * Created by Andrew on 9/24/2015.
 */
var movies = require('./movies_Object_Factory_11');

var buckyMovies = movies();

console.log("Bucky's favorite movie is: " + buckyMovies.favMovie);
