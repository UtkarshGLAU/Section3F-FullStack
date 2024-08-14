console.log("hi");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello", this.name);
  };
}

let jk = new Person("jk", 29);
jk.greet();

Person.prototype.sayAge = function () {
  console.log("i am", this.age);
};
jk.sayAge();

// let {name,age}=jk
// console.log(name);
// console.log(age);

let personD = { ...jk, occupation: "cs" };
console.log(personD);

let jsonstring = JSON.stringify(jk);
console.log(jsonstring);

let newjson = JSON.parse(jsonstring);
console.log(newjson);
