window.addEventListener("DOMContentLoaded", function() {
    let options = {
        root: null, 
        rootMargin: '50px',
        threshold: 0
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let iframe = entry.target;
                iframe.src = iframe.getAttribute('data-src');
                observer.unobserve(iframe);
            }
        });
    }, options);

    observer.observe(document.querySelector('#iframe'));
}, false);

function loadIframe() {
    let iframe = document.getElementById('iframe');
    let loadingImage = document.getElementById('loading-image');
    if(iframe.src !== '') {
        loadingImage.style.display = 'none';
        iframe.style.visibility = 'visible';
    }
}
