$(document).ready(function(){
    
    $('video', this).get(0).pause(); 
    
var figure = $(".tile").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
    });