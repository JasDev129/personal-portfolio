const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

let navStatus = true;
    navToggle.addEventListener('click', () => {
        
        if(navStatus == true){
            navList.style.opacity = "1";
            navToggle.style.transform = "rotate(180deg)";
            navStatus = false;
        }else if(navStatus == false){
            navList.style.opacity = "0";
            navToggle.style.transform = "rotate(0deg)";
            navStatus = true;
        }
    });