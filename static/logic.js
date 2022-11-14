document.addEventListener('DOMContentLoaded', function() {
    
    // check for hamburger
    if (document.querySelector(".hamburger")) {
        // check for any clicks
        document.addEventListener('click', event => {
            const element = event.target;
            const bottom = document.querySelector(".header-mobile-bottom");
            // display links
            if (bottom.style.display === "none" || bottom.style.display === "") {
                bottom.style.display = "block";
                window.setTimeout(function(){
                    bottom.style.opacity = 1;
                    bottom.style.transform = 'scale(1)';
                },0);
            // hide links
            } else {
                bottom.style.opacity = 0;
                window.setTimeout(function(){
                    bottom.style.display = 'none';
                },700);
            }
            // update hamburger icon
            if (element.classList.value === 'hamburger') {
                element.classList.value = 'change';
            } else if (element.parentElement.classList.value === 'hamburger') {
                element.parentElement.classList.value = 'change';
            } else if (element.classList.value === 'change') {
                element.classList.value = 'hamburger';
            } else if (element.parentElement.classList.value === 'change') {
                element.parentElement.classList.value = 'hamburger';
            }
        });
    }

});