let hello:string = "hello world";

console.log(hello);


class Person
{
    private name: string;
    private age: number;

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }
}

const p = new Person("test", 12);
console.log(p.getName());
console.log(p.getAge());

