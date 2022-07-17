// Objects and functions practical task 


//-        Create a car object, add a color property to it with the value equals 'black'
const car = {
    colour: "black"
}
console.log(car)
console.log("---------------------------------------")

//-        Change the color property of the car object to 'green'
car.colour = "green"
console.log(car)
console.log("---------------------------------------")

//-        Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function () {
    console.log('power is 170kw');
}
car.power()
console.log("---------------------------------------")

//-        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const warehouse = function(pears, apples) {
    return pears + apples
}
console.log("result is: ", warehouse(20,50))
console.log("---------------------------------------")

//-       Your name is saved in the payment terminal, write a function to define the name in the terminal 
//        (if you entered your name, then hello + name, if not, then there is no such name)
const terminal_name = ["Yevhen", "Alex", "Jonh"]
const myName = "Yevhen"

if (terminal_name.includes(myName)) {
    console.log("Hello, " + myName)
} else {
    console.log("there is no such name")
}
console.log("---------------------------------------")

//-        Write a function for calculating the type of argument and type output to the console
const person = {
    name: "Yevhen",
    age: 27,
    isHuman : true,
}
function type() {
    console.log(typeof person.age); 
}
type()
console.log("---------------------------------------")

//-        Write a function that determines whether a number is prime or not

function isPrime(n){
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    };
    return n > 1;
}
console.log(isPrime(0))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(10))