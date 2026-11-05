// 1. selects all the filter buttons 
let filterbutton = document.querySelectorAll(`.filter-btn`);

// 2. selects all menu cards
let menucard = document.querySelectorAll(`.menu-card`);

// 3. to access every filter button
for(let i = 0; i < filterbutton.length; i++) {
    // 3.1 to identify when button is clicked 
    filterbutton[i].addEventListener("click", () => {
        // 3.1.1 setting default category 
        let selectedCategory = "all";
        // console.log("Clicked button: ", filterbutton[i].textContent);
        
        // 3.1.2 checks category
        if(filterbutton[i].classList.contains(`starters`)){
            selectedCategory = "starters";
            // console.log("selectedCategory: ", selectedCategory);
        } else if(filterbutton[i].classList.contains(`main-course`)){
            selectedCategory = "main-course";
            // console.log("selectedCategory: ", selectedCategory);
        } else if(filterbutton[i].classList.contains(`desserts`)){
            selectedCategory = "desserts";
            // console.log("selectedCategory: ", selectedCategory);
        } else if(filterbutton[i].classList.contains(`drinks`)){
            selectedCategory = "drinks";
            // console.log("selectedCategory: ", selectedCategory);
        }

        // 3.1.3 to access every menu-card
        for(let j = 0; j < menucard.length; j++){
            // 3.1.3.1 Getting all the classes on menu card
            let foodCategory = menucard[j].classList;
            // 3.1.3.2 Checking whether the selected category is all or menu belong to selected category
            if(selectedCategory === "all" || foodCategory.contains(selectedCategory)){
                menucard[j].style.display = "block";
            }
            // 3.1.3.3 Hiding the cards that dont match
            else{
                menucard[j].style.display = "none";
            }
        }

        // 3.1.4 Removing active class from filter buttons
        for(let k = 0; k < filterbutton.length; k++){
            filterbutton[k].classList.remove("active");
        }

        // 3.1.5 Adding active class 
        filterbutton[i].classList.add("active");
    })
}

