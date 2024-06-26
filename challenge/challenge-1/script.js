// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).


// your task

// Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.




const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn =1.95;

const BMIMark= massMark / heightMark**2;
const BMIJohn = massJohn / (heightJohn*heightJohn);
const markHigherBMI=BMIMark> BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);