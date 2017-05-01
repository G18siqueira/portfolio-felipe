jQuery(document).ready(function($){
    $("#light-slider-esquerda").lightSlider({
        //item: 5,//mostra a quantidade de itens no slider
        //slideMove: 5,
        //slideMargin: 10,
        controls: true,
        keyPress: true,
        pause: 3500,
        speed: 1500,
        mode: 'fadeout',
        auto: true,
        //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: true,//ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true,
    });
});


jQuery(document).ready(function($){
    $("#light-slider-direita").lightSlider({
        //item: 5,//mostra a quantidade de itens no slider
        //slideMove: 5,
        //slideMargin: 10,
        controls: true,
        keyPress: true,
        pause: 3000,
        speed: 2000,
        mode: 'fadeout',
        auto: true,
        //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: true,//ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true,
    });
});