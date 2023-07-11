// alert(message)
// Alert has one button: (OK)
alert("Click OK to proceed");

// confirm(message)
// Confirm has two buttons: (OK) and (CANCEL)
confirm("Click OK or Cancel");

let msg = ``;
if (confirm("Click OK to continue")){
    msg = "You pressed Ok";
}
else{
    msg = "You pressed Cancel";
}
document.write(msg);