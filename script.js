let btn = document.getElementsByTagName("button")[0]; // Access the first button
let emailInput = document.querySelector('input[type="email"]');
let passInput = document.querySelector('input[type="password"]');
let errorMessage = document.querySelector('.error');
function validateInputs() {
    if (emailInput.checkValidity() && passInput.value.length >= 8) {
    

        btn.style.backgroundColor = "#65B946";}
        btn.onclick=function(){
            btn.style.transform = "scale(0.9)";
            if (emailInput.value!=="admin@gmail.com" || passInput.value!=="123456789") {
                errorMessage.textContent = "Incorrect Username or password, please try again.";
                errorMessage.style.display = "block";
            }
            else
            {
            emailInput.value = '';
            passInput.value = '';
            errorMessage.style.display = "none";
            }
            
            // Remove the scale transformation after a short delay
            setTimeout(() => {
                btn.style.background = ""
                btn.style.transform = "scale(1)";
               
            },
             400); // Adjust the delay as needed
        }
        
 }
    


emailInput.addEventListener('input', validateInputs);
passInput.addEventListener('input', validateInputs);
