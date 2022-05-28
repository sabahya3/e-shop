console.log(typeof 5);
const obj = {
  name: "Ahmed",
  title: { name: "doctor", job: { po: "dentest" } },
  age: 25,
  job: "developer",
};

console.log(obj.title.job.po);

let str = "Ahmed";
console.log(str.indexOf("m"));
let x = 4;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

print(numbers.join("a"));

function print(num) {
  console.log(num);
}

class Car {
  constructor(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
  }
}

let car = new Car("ford", 20, 1995);
print(car.year);
