var Bucky = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Bucky; //Person is not a new copy but a new reference to the same Bucky object

Person.favFood = "salad";
console.log(Bucky.favFood);

console.log(19 == '19'); //true
console.log(19 === '19'); //false
