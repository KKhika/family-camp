$(function(){
    let img__mountain = $('.img__mountain');
    let img__design = $('.img__design');
   
    let campStyle_btn = function(){
        img__mountain.removeClass('hidden');
        i = i + 1;
        if(i%3 == 0) {
            $('.camp-style').html('<span>Solo</span>（ソロキャンプ）');
            img__mountain.html('<img src="images/image_07_solo.jpg" alt=""></img>');
        }else if(i%3 ==1) {
            $('.camp-style').html('<span>Duo</span>（デュオキャンプ）');
            img__mountain.html('<img src="images/image_03_couple.png" alt=""></img>');
        }else if(i%3 ==2)  {
            $('.camp-style').html('<span>Family</span>（ファミリーキャンプ）');
            img__mountain.html('<img src="images/image_06_family.jpg" alt=""></img>');
        }
        
    
        setTimeout(function(){
            img__mountain.toggleClass('hidden');
       },100);    
        
    } 
    let campField_btn = function(){
        img__design.removeClass('hidden');
        j = j + 1;
        if(j%3 == 0) {
            $('.camp-field').html('<span>熊本</span>');
            img__design.html('<img src="images/image_01_kumamoto.jpg" alt=""></img>');
        }else if(j%3 == 1) {
            $('.camp-field').html('<span>佐賀</span>');
            img__design.html('<img src="images/image_04_saga.jpg" alt=""></img>');
        }else if(j%3 == 2) {
            $('.camp-field').html('<span>長崎</span>');
            img__design.html('<img src="images/image_05_nagasaki.jpg" alt=""></img>');
        }
        
    
        setTimeout(function(){
            img__design.toggleClass('hidden');
       },100);    
        
    } 
    let i = 0;
    let j = 0;
    $('.camp-style').click(function(){
        campStyle_btn();
     })

     $('.camp-field').click(function(){
        campField_btn();
     })
})