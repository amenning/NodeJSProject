var Bucky = {
  printFirstName: function(){
    console.log("My name is Bucky");
    console.log(this === Bucky);
    console.log(this === global);
  }

};
Bucky.printFirstName();

//The default calling context is global for this
function doSomethingWorthless(){
  console.log("\ndoSomethingWorthless Function");
  console.log(this === Bucky);
  console.log(this === global);
}
doSomethingWorthless();
