// Anonymous function is a function without a name
let helloFunc = function(){
    return `Hello`;
};
let helloUser = helloFunc();
document.getElementById(`anon1`).innerHTML+=helloUser;
document.getElementById(`anon1`).innerHTML+=helloFunc; //call the function directly
