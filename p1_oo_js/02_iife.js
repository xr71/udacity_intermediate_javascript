(function sayHi() {
    console.log("hello");
})();


let x = (function(x,y) {
    return x*y;
})(4,6);
console.log(x);
