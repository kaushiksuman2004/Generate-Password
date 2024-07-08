
let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue")
let passwordBox = document.getElementById("passwordBox")

let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

let getBtn = document.getElementById("getBtn")

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value
})

getBtn.addEventListener('click', ()=>{
    passwordBox.value = generate_password();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numletters = "0123456789"
let symbolsChars = "!@#$%^&*()_+"

function generate_password(){
    
    let genPass = ""
    let allChars = ""
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numletters : "";
    allChars += symbols.checked ? symbolsChars : "";

    let i = 0
    while (i < inputSlider.value) {
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPass;
}

let copyIcon = document.getElementById('copyIcon')
copyIcon.addEventListener('click', function(){
    if (passwordBox.value != "" || passwordBox.value.length >= 1) {
        navigator.clipboard.writeText(passwordBox.value)
        copyIcon.innerText = "check"
        copyIcon.title = "Password copied"

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy"
            copyIcon.title = "Copy password"
        }, 3000);
    }
})