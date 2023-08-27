let genPassword = document.getElementById("genPassword");
let slider = document.getElementById("slider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");
slidervalue.textContent = slider.value;                     // To Initially Display the default value i.e 8
slider.addEventListener("input", () => {                    // It Will Change the Password length value according to user
    slidervalue.textContent = slider.value;
})

genbtn.addEventListener("click", () => {                    // This Event will start generating password
    generatePassword();
})


let AllUpChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";               // Variable storing all Capital Letters
let AllLowChar = "abcdefghijklmnopqrstuvwxyz";              // Variable storing all Small Letters
let AllNumbers = "0123456789";                              // Variable storing all Numbers
let AllSymbols = "!@#$%^&*";                                // Variable storing all Symbols


function generatePassword() {                               // Function to create Password
    genPassword.value = "";                                 // To clear any value that is already existing
    let AllChar = "";                                       // Variable to store All letters, Symbols and Numbers or other depending on which checkboxes user has checked
    if (lowercase.checked) {                                // Values of all lowercase alphabets to be added if user checks for lowercase alphabets
        AllChar += AllLowChar;
    }
    if (uppercase.checked) {                                // Values of all Uppercase alphabets to be added if user checks for uppercase alphabets
        AllChar += AllUpChar;
    }
    if (numbers.checked) {                                  // Values of all Numbers  to be added if user checks for Number
        AllChar += AllNumbers;
    }
    if (symbols.checked) {                                  // Values of all symbols  to be added if user checks for symbols
        AllChar += AllSymbols;  
    }
    genPassword.value = AllChar.charAt(Math.floor(Math.random() * AllChar.length));  // Equation to give one character from "AllChar"


    for (let i = 1; i < slider.value; i++) {
        genPassword.value += AllChar.charAt(Math.floor(Math.random() * AllChar.length));  // It will repeat as many times the password length is required
    }
    copyicon.title = "Click to Copy";                                 // Reset these Values to default
    copyicon.innerHTML = "content_copy"
}

copyicon.addEventListener("click", () => {            // To copy the Content
    if (genPassword.value != "") {
        navigator.clipboard.writeText(genPassword.value);
        copyicon.innerHTML = "check"
        copyicon.title = "Copied";
    }
})


copyicon.title = "Click to Copy";                       // Default Value
setInterval(() => {                                     // It will redefine values to default after every 6 seconds
    copyicon.title = "Click to Copy";
    copyicon.innerHTML = "content_copy"
}, 6000);