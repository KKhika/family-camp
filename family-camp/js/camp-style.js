$(function(){
    let img__mountain = $('.img__mountain');
    let img__design = $('.img__design');
   
    let campStyle_btn = function(){
        img__mountain.removeClass('hidden');
        i = i + 1;
        if(i%3 == 0) {
            $('.camp-style').text('キャンプスタイル-Solo');
            img__mountain.html('<img src="images/image_02_solo.jpg" alt=""></img>');
        }else if(i%3 ==1) {
            $('.camp-style').text('キャンプスタイル-Duo');
            img__mountain.html('<img src="images/image_03_couple.png" alt=""></img>');
        }else if(i%3 ==2)  {
            $('.camp-style').text('キャンプスタイル-Family');
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
            $('.camp-field').text('キャンプ場-熊本');
            img__design.html('<img src="images/image_01_kumamoto.jpg" alt=""></img>');
        }else if(j%3 == 1) {
            $('.camp-field').text('キャンプ場-佐賀');
            img__design.html('<img src="images/image_04_saga.jpg" alt=""></img>');
        }else if(j%3 == 2) {
            $('.camp-field').text('キャンプ場-長崎');
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