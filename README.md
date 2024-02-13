# JavaScript-q6

What is a higher-order function? 
A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

**Example Program:-**

const greet = function (name) {
    return function (m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('ABC');
greet_message("Welcome To Java Sript programming world")
