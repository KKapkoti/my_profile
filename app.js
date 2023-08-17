$(document).ready(function () {

    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });
    //   -----------------skills bar------------
    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        // console.log(percentage)
        // console.log(tooltip)
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })
    // ----------COUNTER--------------------
    const counters = document.querySelectorAll('.counter');
    function runcounter() {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;
            let step = target / 100;

            let countit = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countit, 1);
                }
                else {
                    counter.innerText = target
                }
            }
            countit();
        })
    }
    runcounter();


    // ---------Intersection Observer-----------------
    let counterSection = document.querySelector('.counter__section');
    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done == 0) {
            runcounter();
            done = 1;
        }

    }, options)

    sectionObserver.observe(counterSection);


    // ----------Image filter---------------
    var $wrapper = $('.portfolio__wrapper');
    // initialize isotope


    let links = document.querySelectorAll('.tabs a');
    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })
            links.forEach(link=>{
                link.classList.remove('active');
            })
            e.target.classList.add('active');
        })
    })
    // -----magnific POP up-------------
    $('.magnify').magnificPopup({
        type: 'image',
        gallery :{
            enabled:true
        },
        zoom :{
            enabled:true
        }
    })

    // -------------slider------------
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });
});

