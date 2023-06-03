function loadIframe() {
    document.getElementById('loading-image').style.display = 'none';
    document.getElementById('iframe').style.visibility = 'visible';
}

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

console.log("hello");

observer.observe(document.querySelector('#iframe'));


