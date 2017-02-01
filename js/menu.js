/*FUNÇÃO PARA ATIVAR MENU E DESATIVA O MENU TOGGLE*/
$(function(){
    $('.toggle').click(function(){
        $('.menu-responsivo').toggleClass('ativo');
        $(this).toggleClass('ativo');
    });

    $('.link-toggle').click(function(){
        $('.menu-responsivo').removeClass('ativo');    
        $(this).removeClass('ativo'); 
        $('.toggle').removeClass('ativo')     
        $(this).removeClass('ativo')
    });       
}); 