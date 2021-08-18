const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

/*Functions are a process that runs; this one runs on each portfolio item */
/*Every time this page loads, this process will run*/ 
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => { /* functions with no parameters in javascript are anonymous functions */
        portfolioItem.childNodes[1].classList.add('img-darken');
        portfolioItem.childNodes[1].classList.remove('img-brighten');
    })
    portfolioItem.addEventListener('mouseout', () => { /* functions with no parameters in javascript are anonymous functions */
        portfolioItem.childNodes[1].classList.add('img-brighten');
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

