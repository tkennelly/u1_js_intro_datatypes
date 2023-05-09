// Intwo two JS Datatypes owo

// console.log('hewwo wowld!')

// integers - whole numbers (0 1 2 3 4 5)
// floats - decimals (1.23 3.14 4.35234)

//examples of math operators
// addition console.log(4 + 10)
// subtraction console.log(4 - 10)
// division console.log(4 / 10)
// multiplication console.log(4 * 10)
// exponants console.log(3 ** 3)
// modulus (gives us the remainer of a division equation) console.log(10 % 4)

//nesting
//console.log(
//    Math.pow(3,2)
//)

//random number
//console.log (
//    Math.random makes a random number + can be added AFTER () to add to the random number it makes
//)

//rounding
//console.log(
//    Math.round rounds nearest
//    Math.floor rounds down
//    Math.ceil rounds up
//)

//nesting example (this can be done in a single line, or indented like it is here)
//console.log(
//    Math.ceil(
//        Math.sqrt(31)
//        )
//)

// strings can be done 'like this' "like this" or `like this` the third one is the 'backtick' and its under the ~ (tilde)
// you cannot mix them together. you cannot do 'this" or `this' or "this`
// using "this" will make 2 quotes appear because this program understand what "quotes" are and how they are used, similar to how it autofills (these)
// if the sentence in your string uses "quote" or 'single quotes' then you need to use the one it DOESNT use to make it a string. if it has both then you use `backticks`
//example of use of backtick apostrophe and quotes
//console.log(`Jeremey's mom says "I love you" to him.`)

//console.log('hello.'.length) checks the length of the string

// Defining variables with Let and Const
// 'Var' is outdated
//identifiers use camelCase and cannot begin with numbers

//let firstName = "Theresa"
//let lastName = "Kennelly"
//let fullName = firstName + lastName can be written with literals as shown below
//let fullName = `${firstName} ${lastName}`
// now that we are using literals, the space between the two is implied, so the firstName doesnt need a space to make it gramatically correct
// example it does not need to be let firstName = "Theresa " anymore.
//let age = 24

// console.log("Hewwo " + fullName + "!") is outdated and can be done like below. use backticks and literals (${}) to not have to use quotes and + all the time
// console.log(`Hewwo ${fullName}!`) is the cleaner way to do it
// +=1 adds 1 to something

// console.log(`Hewwo ${fullName}! You are currently ${age} and in December you will be ${age +=1}!`)

// console.log(typeof) is used to know what type of thing we are working with (string, number, etc) it helps to figure out why something is going wrong

// console.log(Math.pow(3, "f")) will give u NaN (not a number). you can use isNaN() to see if something is not a number

//let enjoysCoding = true
//let hatesCats = false
// && = and
// || (pipes) = or
// ! (bang) = not


//  AT THIS POINT WE ARE STARTING A NEW LESSON ON ARRAYS, BUT FOR NOW I WILL USE THE SAME SCRIPT.JS FILE TO KEEP NOTES. MAYBE ILL LOVE THEM LATER

// arrays are a list of things that is stored in brakets[]
//let fruits = ['apple', 'orange', 'pear']
//console.log(fruits)
// arrays go from 0 1 2 3 etc. they start with 0

//.pop() removes the final item
//.push(item1, ..., itemN) adds one or more items to the end
//.reverse() reverses the array
//.shift() removes and returns the first item
//.unshift(item) prepends items to the start of the array

//.splice() is complicated. it can add, rename and delete items
//   it takes 3 arguements. where to start, how far to go, and what to do
//   example
//  fruits.splice(0, 1, "banana") will rename pear to banana. fruits.splice(0, 0, banana) will make banana the first this in the array
//   fruits.splice(2, 0, banana) will make banana our 2ith item without overwriting pear.
// this esentially reads as "go to the 2th and then dont move and add something there"
//   fruits.splice(2, 1, banana) will make banana our 2ith item and overwrite pear.
// this reads as "go to the 2ith and then move over one and make it banana"

// STARTING NOTES ON LOOPS AND CONTROL FLOW

//let ageInYears = 24
// let ageInYears = 12

//if (ageInYears >= 18) {
 // >= means greater than or equal to
 //   console.log('you can vote')
//} else {
//    console.log('you cannot vote')
//}

//const dayOfWeek = 'Tuesday'

//if (dayOfWeek === 'Monday') {
 //   console.log(`It's Monday, better get to class!`)
//} else if (dayOfWeek === 'Saturday') {
 //   console.log(`It's Saturday, party on!`)
//} else {
 //   console.log('Please enter another day!')
//}
// the stuff above looks like this at its base
// if () {}
// else if () {}
// else {}

// PRACTICE

//const yourMoney = 200
//const yourMoney = 100
//const yourMoney = 50
//const catPrice = 100

//if (yourMoney === catPrice) {
//    console.log('You have just enough money to buy a cat!')
//} else if (yourMoney > catPrice) {
//    console.log(`You have more than enough money to buy a cat! You will have ${yourMoney - catPrice} dollars left over!`)
//} else if (yourMoney < catPrice) {
//    console.log(`You don't have enough money to buy a cat. You need ${catPrice - yourMoney} more dollars to get a cat.`)
//}


// WORKING WITH MULTIPLE CONDITIONS

// && is and, || is or, ! is tests opposite

//if (age > 20 && =< 13) DOES NOT WORK 
// if (age > 20 && age =< 13) DOES WORK

// if () {}
// else if () {}
// else if () {}
// else {}

// instead of copying stuff over, just cheack out the readme under multiple conditions. note: for some reason he used == instead of === for most of these times. not entirely sure why.

//Ternary Operators are the modern version of if/else if/else.

//if (age >= 18) {
//    canVote = 'yes'
//} else {
//    canVote = 'no'
//}

//can turn into

//const ageInYears = 12
//ageInYears > 18 ? console.log('can vote') : console.log('can not vote')

//its essentially saying 'hey, is the thing i asked correct? heres what should happen is true, and heres if false. you can only have 2 answers so its very powerful but also limited.

// SWITCH STATEMENTS

//const food = 'fish'

//switch(food) {
//    case 'chicken':
//        console.log('I will have the Chicken Parmesean')
//        break
//    case 'steak':
//        console.log('The steak please, medium rare')
//        break
//    case 'fish':
//        console.log('I think I will try the Salmon')
//        break
//    default:
//        console.log('Please enter a valid entree')
//}

//there can be ; after the lines that dont have : but u dont need to right now

// WHILE LOOPS

//let n = 0
//while (n < 50) {
 //   console.log(n)
//   n++
//}

// FOR LOOPS

// inside our () we are putting 3 sets of instructions. where we begin, where we end, and how much we are incrumenting each time
 //for (let i = 0; i < 10; i ++) {
   // console.log(i)
 //}

//const foods = ['tacos', 'ramen', 'doubles', 'ceviche', 'shakshuka', 'fish and chips', 'birria', 'falafel']

//for (let i = 0; i < foods.length; i++) {
  //  console.log(`let's have ${foods[i]} for dinner tonight`)
//}

             
            
//const wizards = [
//  {name: "Harry Potter", house: "Gryffindor"}, 
//{name: "Lord Voldomort", house: "Slytherin"}, 
 //{name: "Cedric Diggory", house: "Hufflepuff"},
//    {name: "Luna Lovegood", house: "Ravenclaw"},  
//    {name: "Albus Dumbledor", house: "Gryffindor"}, 
//    {name: "Merlin", house: "Slytherin"}, 
//    {name: "Pomona Sprout", house: "Hufflepuff"}, 
//    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
//    {name: "Ron Weasley", house: "Gryffindor"}, 
//    {name: "Severus Snape", house: "Slytherin"}, 
//    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
//    {name: "Padma Patil", house: "Ravenclaw"}, 
//    {name: "Hermoine Granger", house: "Gryffindor"} 
//   ]
//for (let i = 0; i < wizards.length ; i++) {
 //   if (wizards[i].house === 'Slytherin'){
 //   console.log(wizards[i].name)
  //  }
//}
