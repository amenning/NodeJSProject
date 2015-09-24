/**
 * Created by Andrew on 9/24/2015.
 */
//module.exports = {}; //every file has this object added automatically in the background

//any code inside this object will be exportable
module.exports = {

  printAvatar: function() {
    console.log("Avatar: PG-13");
  },

  printChappie: function() {
    console.log("Chappie: R");
  },

  favMovie: "The Matrix"

};

/*
function printAvatar() {
  console.log("Avatar: PG-13");
}

function printChappie() {
  console.log("Chappie: R");
}*/


//module.exports.avatar = printAvatar; //this allows Avatar to be public
//module.exports.chappie = printChappie;
