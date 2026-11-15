// 1. selecting fields
let name_ = document.getElementById(`name`);
let email = document.getElementById(`email`);
let phone = document.getElementById(`phone`);
let date = document.getElementById(`bookingDate`);
let time = document.getElementById(`bookingTime`);
let guests = document.getElementById(`guests`);
let sendbutton = document.getElementById(`sendMsg`);
let response = document.getElementById(`formResponse`);

// 2. execution of the function for when the button is clicked
sendbutton.addEventListener("click", () => {
    // 2.1 checks if the fields are empty
    if(name_.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "" || date.value.trim() === "" || time.value.trim() === "" || guests.value.trim() === ""){
        response.textContent = "Please fill all the fields";
        return;
    }
    // 2.2 checks the validity of an email
    if(!email.checkValidity()){
        response.textContent = "Please enter a valid email";
        return;
    }
    // 2.3 checks the validity of phone number 
    if(!/^[0-9]{10}$/.test(phone.value.trim())){
        response.textContent = "Please enter a valid 10-digit phone number";
        return;
    }
    // 2.4 Tells if booking request is successfully sent 
    response.textContent = "Thank You " + name_.value() + " ! Your table is booked!";

    // 2.5 clear the fields
    name_.value = "";
    email.value = "";
    phone.value = "";
    date.value = "";
    time.value = "";
    guests.value = "";
})