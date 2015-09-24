/**
 * Created by Andrew on 9/24/2015.
 */
function printAvatar(){
  console.log("Avatar: PG-13");
}

//this will be set as private since it is not included below in exports
function printChappie(){
  console.log("Chappie: R");
}

module.exports.avatar = printAvatar; //this allows Avatar to be public
