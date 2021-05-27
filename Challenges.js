/////////////////////////////////////////////////////////////////////////// Part I - #1 - p.5

// //1 Store Mark's and John's mass and height in variables
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// //2 Calculate both their BMIs using the formula (you can even implement both versions)
// const BMIMark = massMark /heightMark ** 2;
// const BMIJohn = massJohn /(heightJohn * heightJohn);


// //3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI); 

//------------------------------------------------------------------------ JOHN'S SOLUTION #1
// const people = { john: { mass: 85, height: 1.76 }, mark: { mass: 95, height: 1.88 } }
// const calculateBmi = (person) => {
//   return person.mass / person.height ** 2;
// }
// const bmis = Object.keys(people).map((name) => {
//   return calculateBmi(people(name]);
// });
// const markIsHigher = bmis["mark"] > bmis["john"]
// console.log({ markIsHigher });

/////////////////////////////////////////////////////////////////////////// Part I - #2 - p.6

// //1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// const BMIMark = massMark /heightMark ** 2;
// const BMIJohn = massJohn /(heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn); 


// // if (BMIMark > BMIJohn) {
// //   console.log("Mark's BMI is higher than John's!")
// // } else {
// //   console.log("John's BMI is higher than Mark's!")
// // }

// //2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is (${BMIMark}) higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

/////////////////////////////////////////////////////////////////////////// Part I - #3 - p.7

// //1. Calculate the average score for each team, using the test data below

// // const dolphinsScores = (96 + 108 + 89) / 3;
// // const koalasScores = (88 + 91 + 110) / 3;
// // console.log(dolphinsScores, koalasScores);

// //2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// // if (dolphinsScores > koalasScores) {
// //     console.log("Dolphins with the trophy 🏆");
// // } else if (koalasScores > dolphinsScores) {
// //     console.log("Koalas win the trophy 🏆");
// // } else if (dolphinsScores === koalasScores) {
// //     console.log("Both win the trophy!");
// // }
// //Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �

// //4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// const dolphinsScores = (97 + 112 + 103) / 3;
// const koalasScores = (109 + 95 + 106) / 3;
// console.log(dolphinsScores, koalasScores);

// if (dolphinsScores > koalasScores && dolphinsScores >= 100) {
//     console.log("Dolphins with the trophy 🏆");
// } else if (koalasScores > dolphinsScores && dolphinsScores >= 100) {
//     console.log("Koalas win the trophy 🏆");
// } else if (dolphinsScores === koalasScores && dolphinsScores >= 100 && koalasScores >= 100) {
//     console.log("Both win the trophy!");
// } else {
//     console.log("No one wins the trophy! 😥");
// }
//------------------------------------------------------------------------ JOHN'S SOLUTION #3

// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];
// const calculateAverageScore = (scoresArray) => {
//   const totalScore = scoresArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   const avgScore = totalScore / scoresArray.length;
//   return avgScore;
// }
// //#1
// const dolphinsAvgScore = calculateAverageScore(dolphinsScores);
// const koalasAvgScore = calculateAverageScore(koalasScores);
// console.log({ dolphinsAvgScore, koalasAvgScore });
// //#2
// const result = dolphinsAvgScore === koalasAvgScore
//   ? "draw"
//   : dolphinsAvgScore > koalasAvgScore
//     ? "dolphins win"
//     : "koalas win";
// console.log(result);
// //#3
// const scoreIsValid = (score) => {
//   return score >= 100;
// }
// // returns 1, 0 , or -1.
// // 1 means score 1 wins.
// // -1 means draw.
// // 0 means score 2 wins.
// const validatedOutcome = (score1, score2) => {
//   const score1IsValid = scoreIsValid(score1);
//   const score2IsValid = scoreIsValid(score2);
//   if (score1IsValid && score2IsValid) {
//     const outcome = score1 === score2 ? -1 : score1 > score2 ? 1 : 0;
//     console.log(outcome);
//     return outcome;
//   } else {
//     if (!score1IsValid && !score2IsValid) {
//       return -1;
//     }
//     return score1IsValid ? 1 : 0;
//   }
// }
// const chickenDinnerWinner = validatedOutcome(koalasAvgScore, dolphinsAvgScore);
// if (chickenDinnerWinner === 1) {
//   console.log("Koalas WIN!!!");
// } else if (chickenDinnerWinner === 0) {
//   console.log("Dolphins WIN!!!");
// } else {
//   console.log("Draw");
// }

/////////////////////////////////////////////////////////////////////////// Part I - #4 - p.8

// //1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;


// //2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/////////////////////////////////////////////////////////////////////////// Part II - #1 - p.9

// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // 2. Use the function to calculate the average for both teams
// // TEST 1
// let dolphinsScore = calcAverage(44, 23, 71);
// let koalasScore = calcAverage(65, 54, 49);
// console.log(dolphinsScore, koalasScore);

// // 3. Create a function 'checkWinner' that takes the average score of each team 
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// // to the console, together with the victory points, according to the rule above. 
// // Example: "Koalas win (30 vs. 13)"
// const checkWinner = function(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win! (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log('No team wins...')
//     }
// }

// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// // Data 2
// checkWinner(dolphinsScore, koalasScore);

// checkWinner(576, 111); 

// // TEST 2
// dolphinsScore = calcAverage(85, 54, 41);
// koalasScore = calcAverage(23, 34, 27);
// console.log(dolphinsScore, koalasScore);
// checkWinner(dolphinsScore, koalasScore);

/////////////////////////////////////////////////////////////////////////// Part II - #2 - p.10

// // 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// const calcTip = function(bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

// //2. And now let's use arrays! So create an array 'bills' containing the test data below
// const bills = [125, 555, 44];

// //3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// //4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
// console.log(bills, tips, totals);

/////////////////////////////////////////////////////////////////////////// Part II - #3 - p.11

// // 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     height: 1.69,
//     mass: 78,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2;
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     height: 1.95,
//     mass: 92,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2;
//     }
// };

// // 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

// mark.calcBMI();
// john.calcBMI();

// console.log(`Mark's BMI is ${mark.bmi} & John's BMI is ${john.bmi}`);

// console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`)
// }

/////////////////////////////////////////////////////////////////////////// Part II - #4 - p.12