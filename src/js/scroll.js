/* START smooth scrooll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*END smooth scroll*/

/* START  scroll-top button*/
window.onscroll = () => scrollFunction();
document.getElementById('top-button').addEventListener('click', toTop);

function scrollFunction() {
    let topButton = document.getElementById('top-button');

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}

function toTop() {
    document.querySelector('#header').scrollIntoView({
        behavior: 'smooth'
    });
}
/* END scroll-top button */