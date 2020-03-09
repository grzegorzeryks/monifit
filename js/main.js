console.log('elo');

// gallery
let galleryDivs = document.querySelectorAll('.gallery-grid div');
console.log(galleryDivs);

let picture = document.querySelector('.picture');

for (let i = 0; i < galleryDivs.length; i++) {
    galleryDivs[i].addEventListener('click', function () {
                console.log('works');
                galleryBox.style.marginLeft = '0px';
                galleryBox.style.transition = '1s ease';
                let elem = galleryDivs[i];
                let elemStyle = window.getComputedStyle(elem, null).getPropertyValue("background-image");
                picture.style.backgroundImage = elemStyle;
            });
}



            //closebox
            let closeBox = document.querySelector('.close-box');
            let galleryBox = document.querySelector('.gallery-box');

            closeBox.addEventListener('click', function (e) {
                galleryBox.style.marginLeft = '-2000px';
            });



            $(document).ready(function () {

            });