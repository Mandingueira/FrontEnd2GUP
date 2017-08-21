$(document).ready(function(){
    
    $('input[type="submit"]').click(function(){
        
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#content').animate({width: '100%', padding: 30, minHeight: 100}); 
        }
       
        else {
           $(this).addClass('active');
           $('#content').animate({width: 0, padding: 0, minHeight: 0}); 
        }
        
        });
    
    