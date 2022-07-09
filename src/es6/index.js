// Parametros por defecto

function newFunction(name, age, country) {
  var name = name || "Alejo";
  var age = age || 38;
  var country = country || "AR";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "alejo", age = 38, country = "AR") {
  console.log(name, age, country);
}

newFunction("alejo", 22, "ES");
newFunction2();

// template literal

let hello = "hoola";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
