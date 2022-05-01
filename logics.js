
document.addEventListener('DOMContentLoaded', function() {

    // check for carousel
    if (document.querySelector(".carousel")) {
        // add listener for previous
        document.querySelector('#carousel-prev').addEventListener('click', previous_img);
        document.querySelector('#carousel-next').addEventListener('click', next_img);
    }

});

function previous_img() {
    const cur_img = document.querySelectorAll('.carousel-active')
    let new_cur_img = cur_img[0].previousElementSibling
    waiting_imgs = document.querySelectorAll('.carousel-item')
    // check if new img is empty and assign the last waiting img as the next active one
    if (! new_cur_img){
        new_cur_img = waiting_imgs[waiting_imgs.length - 1]
    }
    // update new cur class
    new_cur_img.classList = 'carousel-item carousel-active';
    // update current img to be inactive
    cur_img[0].classList = 'carousel-item'
}

function next_img(){
    const cur_img = document.querySelectorAll('.carousel-active')
    let new_cur_img = cur_img[0].nextElementSibling
    waiting_imgs = document.querySelectorAll('.carousel-item')
    // check if new img is empty and assign the first waiting img as the next active one
    if (! new_cur_img) {
        new_cur_img = waiting_imgs[0]
    }
    // update new cur class
    new_cur_img.classList = 'carousel-item carousel-active';
    // update current img to be inactive
    cur_img[0].classList = 'carousel-item'
}
