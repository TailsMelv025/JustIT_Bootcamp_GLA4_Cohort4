// <br/> works in the browser
document.write("I said hello that's it <br/>");
document.write("I said \"hello\" that's it <br/>");
//? document.write("I said "hello" that's it <br/>");
document.write("I said 'hello' that's it <br/>");
document.write('I said "hello" thats it <br/>');

// \n and \u000a works in the console window and not in the browser
document.write("I said\nhello that's it <br/>");
var quote = "I said\u000ahello that's it";
document.write(quote,"<br/>");
console.log(quote);
console.log("I said said\nhello that's it");
document.write("I said hello that's it <br/>");

// String Functions
document.write("<br/><h1> String Functions </h1>");
let breakfast = "Eggs on Toast";
let lunch = "Chicken Sandwich";
let dinner = "Chicken and Rice";
document.write("The length is: "+ lunch.length, "<br/>");
document.write("BREAKFAST SHOUT! " + breakfast.toLocaleUpperCase(), "!<br/>");
document.write("breakfast whisper. " + breakfast.toLocaleLowerCase(), ".<br/>");
document.write(dinner.replace("Chicken","Lamb"),"<br/>");
document.write(lunch.slice(7,16),"<br/");
// document.write(lunch.slice(7,lunch.length),"<br/");
document.write(lunch.slice(1,-1),"<br/>");
document.write(lunch.substring(0,7),"<br/>");

document.write(breakfast.indexOf("g"),"<br/>");
document.write(breakfast.lastIndexOf(),"<br/>");
document.write(breakfast.lastIndexOf("g"),"<br/>");

// Type Conversion
document.write("<br/><h1> Type Conversion </h1>");
let num1 = 10; // Type coercion: Automatically done by the JS interpreter
let num2 = 11;
let num3 = 12;
document.write("This is a datatype is a: "+typeof num2,"<br/>");
let num2string = String(num2); // Converting a number data type into a string datatype and pass it to a variable called num2string
document.write(typeof num2string,"<br/>");
document.write("This is a datatype is converted from a "+typeof num3+" to a "+typeof String(num3), "<br/>");
let num4 = "500";
let someString = "123456ABCDEF"
let anotherString = "12345678901010101010101"
document.write("This is num4 "+typeof num4,"<br/>");
document.write("This is num4 "+typeof Number(num4),"<br/>");
document.write("This is num4 "+typeof parseInt(num4),"<br/>");

let myFloat = "12345.6789";
document.write(myFloat,"<br/>");
document.write(parseFloat(myFloat),"<br/>");

let myBool = 1
document.write(typeof myBool,"<br/>");
document.write(typeof Boolean(myBool),"<br/>");

// If, Else if, and Else
document.write("<br/><h1> If, Else if, and Else </h1>");
// if(condition){
//     do something
// }
// else if(anotherCondition){
//     do somethingElse
// }
// else{
//     do aThirdThing, because none of the conditions were met
// }
let userName = "A";
if (userName === "TailsMelv025"){
    document.write(`Welcome, Melvin`,"<br/>");
}
else{
    document.write(`Welcome, ${userName}`,"<br/>");
}

let trafficLight = "Green";
if(trafficLight==="Red"){
    document.write("Stop","<br/>");
}
else if(trafficLight==="Amber"){
    document.write("Get Ready","<br/>");
}
else if(trafficLight==="Green"){
    document.write("Go","<br/>");
}
else{
    document.write("Faulty Traffic Light","<br/>");
}

let usernum = 60;
if (usernum>5 && usernum<=10){
    document.write("The number is between 5 and 10","<br/>");
}
else{
    document.write("The number is not between 5 and 10","<br/>");
}

// Switch Case
document.write("<br/><h1> Switch Case </h1>");

let day = "Wednesday";
switch(day){
    case "Monday":
        document.write(`The weekend is over, and it is the first working day of the week`,`<br/>`);
        break;
    case "Tuesday":
        document.write(`Monday is over, and it is the second working day of the week`,`<br/>`);
        break;
    case "Wednesday":
        document.write(`It is the middle of the working day... Happy hump day!`,`<br/>`);
        break;
    case "Thursday":
        document.write(`It is almost Friday!`,`<br/>`);
        break;
    case "Friday":
        document.write(`Seven a.m., waking up in the morning
        Gotta be fresh, gotta go downstairs
        Gotta have my bowl, gotta have cereal
        Seein' everything, the time is goin'
        Tickin' on and on, everybody's rushin'
        Gotta get down to the bus stop
        Gotta catch my bus, I see my friends`,`<br/>`);
        break;
    default:
        document.write(`Happy Weekend!`,`<br/>`);
}

// In-built JavaScript library
document.write(`<br/><h1> In-built JavaScript library </h1><br/>`);

document.write(`<br/><h2>Math</h2>`);

// Use the dot notation on methods, libraries, and functions
document.write(Math.random(),`<br/>`); // Returns a pseudo-random number between 0 and 1

// Generate random number between 1 and 10 (number between 0 and 1 x 10)
document.write(Math.random()*10,`<br/>`);

let roundNum = Math.random() * 10;

// Generate random number between 1 and 10 (number between 0 and 1 x 10) and round it down using the floor method
document.write(`Rounded down using floor method: `, Math.floor(roundNum),`<br/>`);

// Generate random number between 1 and 10 (number between 0 and 1 x 10) and round it using the round method
document.write(`Rounded using round method: `, Math.round(roundNum),`<br/>`);

// Generate random number between 1 and 10 (number between 0 and 1 x 10) and round it up using the ceil method
document.write(`Rounded up using ceil method: `, Math.ceil(roundNum),`<br/>`);

// document.write(`<br/><h1> Heading </h1>`);
// document.write(,`<br/>`);