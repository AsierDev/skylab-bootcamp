/* Person

a) Write a constructor function called Person and that has the following arguments: */

function Person(firstName,lastName,age,gender,interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
} 

/* b) Write the following three methods for Person. */

Person.prototype.greeting = function() {
    return "Hi, I'm "+ this.firstName;
}
Person.prototype.farewell = function () {
    return this.firstName + " has left the building. Bye for now!";
}
Person.prototype.bio = function () {

    if (this.gender == "male" || this.gender == "m") {
        return this.firstName +" "+ this.lastName + " is "+ this.age +" years old " + "he likes " + this.interests;
    } else if (this.gender == "female" || this.gender == "f") {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old " + "she likes " + this.interests;
    }
}
var f = new Person("Maria", "Lopez", 29, "f", ["internet", "travel", "singing", "reading"]);
var m = new Person("Pedro", "Gomez", 19, "m", ["games", "futbol", "beer", "films"]);

/* Student

a) Write a constructor function called Student that inherit from Person and that has the following arguments:
b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:
 */

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests)
}
Student.prototype = new Person();

Student.prototype.greeting = function() {
    return "Yo! I'm " +  this.firstName;
}

var z = new Student("Paco", "Gomez", 119, "m", ["games", "futbol", "beer", "films"])