/*function employees(Bob, Mark, John);*/
var employees = []
/*function Animal(sound, name){
    this.sound = sound
    this.name = name
    employees.push(this)
}
var cat = new Animal("meow", "cheif");
console.log(cat);
var dog = new Animal("woof woof", "hank");
console.log(dog.sound);
console.log(employees);*/
function Employee(name, jobTitle, salary, status = "full time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    employees.push(this)
    this.printemployeeform = function(){console.log("name: " + name)}
}
var worker = new Employee("bob", "teacher", "$30 / hour", "part time");

console.log(worker);

var worker1 = new Employee("mark", "driver",  "$20 / hour",);

var worker2 = new Employee("john",  "janitor",  "$10 / hour", "part time");

worker1.printemployeeform();
worker2.printemployeeform();
console.log(employees);