$(document).ready(function(){

        new Vivus('logosvg', {
            
            duration: 200,
            start: 'autostart',
            type: 'sync',
            animTimingFunction: Vivus.EASE,
            reverseStack:'false'

        }, function() {
         
            $('#logosvg path').attr('stroke-width','0')
            $('#logosvg path').attr('fill','black')
          
            

        });

});