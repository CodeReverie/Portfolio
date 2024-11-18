
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            if (entry.target.classList.contains('sec1')) {
            entry.target.classList.add('show');
            }
            else if (entry.target.classList.contains('sec2')) {
                entry.target.classList.add('moveright');
            }
            else if (entry.target.classList.contains('sec3')) {
                entry.target.classList.add('show');
            }
            else if (entry.target.classList.contains('rocket')) {
                entry.target.classList.add('moveleft');
            }
        }
        else{
            entry.target.classList.remove('show');
            entry.target.classList.remove('moveright');
            entry.target.classList.remove('moveleft');
          
            
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const leftElements = document.querySelectorAll('.left');
leftElements.forEach((el) => observer.observe(el));
const rightElements = document.querySelectorAll('.right');
rightElements.forEach((el) => observer.observe(el));



particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded!');
});






  