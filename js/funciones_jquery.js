$(document).ready(function(){
    $("#boton_hamburguesa").click(function(){
    $('#nav_menu').slideToggle(300);;
    });

    
    $('#boton_hamburguesa').on('click',function(){
        $('#nav_bajo').slideToggle(900);
    });
});