let btn = document.getElementsByTagName("button")[0]; // Access the first button
let emailInput = document.querySelector('input[type="email"]');
let passInput = document.querySelector('input[type="password"]');

function validateInputs() {
    if (emailInput.checkValidity() && passInput.value.length >= 8) {
        btn.style.backgroundColor = "#65B946";}
        btn.onclick=function(){
            btn.style.transform = "scale(0.9)";
            emailInput.value = '';
            passInput.value = '';
            // Remove the scale transformation after a short delay
            setTimeout(() => {
                btn.style.background = ""
                btn.style.transform = "scale(1)";
            }, 400); // Adjust the delay as needed
        }
 }
    


emailInput.addEventListener('input', validateInputs);
passInput.addEventListener('input', validateInputs);