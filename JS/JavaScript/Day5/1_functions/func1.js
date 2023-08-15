// a function is an identifiable named block of code, that when called, will be executed to perform operations as specified in the function body

/* syntax : function functionName(){
    function body;
}

functionName() - call function
*/

greetings() // Hoisting: calling a function before it is declared
function greetings(){
    // function: code goes here
    document.write(`Hello`,`<br/>`);
};
// invoke/call the function
greetings() 

// Create a function to add two numbers
function addNums(){
    // total variable has a function scope, which is local only to the function
    // 
    let total = 2+8;
    document.write(`The answer is: `, total,`<br/>`)
};
addNums();