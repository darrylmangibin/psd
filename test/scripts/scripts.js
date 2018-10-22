$(document).ready(function () {
   
  $(document).on('click', '.navigation__item a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.slideshow__item').click(function(e) {
        e.preventDefault();
        $('.slideshow__item').removeClass('active');
        $(this).addClass('active');

        switch(this.textContent.toLowerCase()) {
            case 'video':
            $('.slideshow__content p').fadeOut(function() {
                $(this).text('This is Video').fadeIn()
            });
            break;
            case 'photography':
            $('.slideshow__content p').fadeOut(function() {
                $(this).text('This is Photography').fadeIn()
            });
            break
            case 'social':
            $('.slideshow__content p').fadeOut(function() {
                $(this).text('This is Social').fadeIn()
            });
            break
            case 'pr':
            $('.slideshow__content p').fadeOut(function() {
                $(this).text('This is PR').fadeIn()
            });
            break
            case 'radio':
            $('.slideshow__content p').fadeOut(function() {
                $(this).text('This is Radio').fadeIn()
            });
            break
        }
    });


});


const video = document.querySelector('.home__video');

window.onload = () => {
    document.addEventListener('click', (e) => {
        // console.log(e.target)
        if(e.target.className === 'home__video') {
            video.style.opacity = 1;
            video.style.visibility = 'hidden';
            location.hash = '';
        }
    })
}

