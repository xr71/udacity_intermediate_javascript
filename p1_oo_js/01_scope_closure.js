function one() {
    let n = 10;

    function two() {
        console.log(n);
        n = n+1;
        console.log(n);
    }

    two();
    console.log(n);
}

one();


// closures
function introduceMyself() {
    let myName = "XR";

    function greet(you) {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }

    return greet;
}

const greet1 = introduceMyself();
greet1('alien')
