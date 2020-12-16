var hello = "hello world";
console.log(hello);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p = new Person("test", 12);
console.log(p.getName());
console.log(p.getAge());
