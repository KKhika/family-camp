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


so.observe(mountain)
so.observe(design)
// so.observe(main_sv_kv);
// main_sv_kv.forEach(function(val){
//     so.observe(val);
// });

