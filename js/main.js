// 1. Button is clicked to open or  close nav menu.
let hamburger = document.getElementById(`hamburger`);

// 2. Selecting nav links 
let navlinks = document.querySelector(`.nav-links`);

// 3. Checks if hamburger and navlinks exists or not  
if(hamburger && navlinks){
    // 3.1  Function to create a toggle menu
    function toggleMenu() {
        // 3.1.1 adds "open" class if it doesnt exist
        navlinks.classList.toggle(`open`);
        // 3.1.2 checks if the button works or not 
        console.log("button clicked");
    }

    // 3.2 executing function when hamburger button is clicked
    hamburger.addEventListener("click", toggleMenu);

    // 3.3 selecting all anchor tags 
    let navItems = navlinks.querySelectorAll(`a`);

    // 3.4 Go thru each nav link 
    for(let i = 0; i < navItems.length;i++){
        // 3.4.1 Closes the menu when the link is clicked 
        navItems[i].addEventListener("click",() => {
            navlinks.classList.remove(`open`);
        });
    }
}

// 4. selecting theme toggle button
let themeChange = document.getElementById("theme");

// 5. Setting default theme to dark
let currentTheme = "dark";

// 6. adding an event listener
themeChange.addEventListener("click", () => {
    // 6.1 Switching theme to light if current theme is dark
    if(currentTheme === "dark"){
        currentTheme = "light";
        themeChange.textContent = "☾";
    }
    // 6.2 Switching theme to dark if current theme is light
    else {
        currentTheme = "dark";
        themeChange.textContent = "☀";
    }
    // 6.3 applying the selected theme 
    document.documentElement.setAttribute("data-theme", currentTheme);
})