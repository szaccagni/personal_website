
document.addEventListener('DOMContentLoaded', function() {
    
    // check for carousel
    if (document.querySelector(".carousel")) {
        // check for any clicks
        document.addEventListener('click', event => {
        const element = event.target;
            // check if it was on previous
            if (element.classList.value === 'carousel-prev') {
                previous_img(element)
            }

            // check if it was on next
            if (element.classList.value ==='carousel-next') {
                next_img(element)
            }
        });
    }

});

function previous_img(element) {
    const cur_img = element.parentElement.querySelectorAll('.carousel-active')
    let new_cur_img = cur_img[0].previousElementSibling
    waiting_imgs = element.parentElement.querySelectorAll('.carousel-item')
    // check if new img is empty and assign the last waiting img as the next active one
    if (! new_cur_img){
        new_cur_img = waiting_imgs[waiting_imgs.length - 1]
    }
    // update new cur class
    new_cur_img.classList = 'carousel-item carousel-active';
    // update current img to be inactive
    cur_img[0].classList = 'carousel-item'
}

function next_img(element){
    const cur_img = element.parentElement.querySelectorAll('.carousel-active')
    let new_cur_img = cur_img[0].nextElementSibling
    waiting_imgs = element.parentElement.querySelectorAll('.carousel-item')
    // check if new img is empty and assign the first waiting img as the next active one
    if (! new_cur_img) {
        new_cur_img = waiting_imgs[0]
    }
    // update new cur class
    new_cur_img.classList = 'carousel-item carousel-active';
    // update current img to be inactive
    cur_img[0].classList = 'carousel-item'
}