// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉


const massmark =95 ;
const heightmark=1.88;
const massjohn=85;
const heightjohn=1.76;

const BMImark=massmark / heightmark**2;
const BMIjhon=massjohn/(heightjohn*heightjohn);
console.log(BMImark , BMIjhon);

if (BMImark >BMIjhon){
    console.log("Mark's BMI is higher than john's ! ")

}
else{
    console.log("john's BMI is higher than Marks's !")
}

