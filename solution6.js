const greet = function (name) {
    return function (m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('ABC');
greet_message("Welcome To Java Sript programming world")