// 1. selecting fields
let name_ = document.getElementById(`name`);
let email = document.getElementById(`email`);
let message = document.getElementById(`message`);
let sendbutton = document.getElementById(`sendMsg`);
let response = document.getElementById(`formResponse`);

// 2. execution of the function for when the button is clicked
sendbutton.addEventListener("click", () => {
    // 2.1 checks if the fields are empty
    if(name_.value.trim() === "" || email.value.trim() === "" || message.value.trim() === ""){
        response.textContent = "Please fill all the fields";
    }
    // 2.2 checks the validity of an email
    else if(!email.checkValidity()){
        response.textContent = "Please enter a valid email";
    }
    else {
        response.textContent = "Thank You!";

        // 2.3 clear the fields
        name_.value = "";
        email.value = "";
        message.value = "";
    }
})