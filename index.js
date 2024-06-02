let generatePasswordBtn = document.getElementById("generate-password")

let firstPassword = document.getElementById("passwordDisplay1")
let secondPassword = document.getElementById("passwordDisplay2")
let hrElement = document.querySelector("hr");
let fieldElement = document.getElementById("field");

generatePasswordBtn.addEventListener("click", function(){
    const length = document.getElementById('password-length').value
    const includeSymbols = document.getElementById('include-symbols').checked
    const includeNumbers = document.getElementById('include-numbers').checked

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "~`!@#$%^&*()_-+=|}{[]:;<>,.?/"

    let charset = letters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let password1 = ""
    let password2 = ""

    for(let i = 0; i < length; i++){
        password1 += charset[Math.floor(Math.random() * charset.length)]
        password2 += charset[Math.floor(Math.random() * charset.length)]
    }

    firstPassword.textContent = password1
    secondPassword.textContent = password2


    // Show the hidden elements
    hrElement.classList.add("show-hr");
    fieldElement.classList.add("show");




})
    
firstPassword.addEventListener("click", copyPassword);
secondPassword.addEventListener("click", copyPassword);

function copyPassword(event) {
    const password = event.target.textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard');
    }).catch(err => {
        alert('Failed to copy password');
    });
}
