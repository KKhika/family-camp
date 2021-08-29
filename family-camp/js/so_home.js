const welcome = document.querySelector('.welcome');
const mountain = document.querySelector('.img__mountain');
const design = document.querySelector('.img__design');


const cb = function (entries,observe){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('hidden');
        }else {
            entry.target.classList.remove('hidden');
        }
    });    
}

const so = new IntersectionObserver(cb);

so.observe(welcome);
so.observe(mountain)
so.observe(design)

