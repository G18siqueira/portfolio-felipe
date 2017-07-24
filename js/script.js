$(document).ready(function() {
    $("#lightgallery-retratos").lightGallery({
        thumbnail: true,
        download: false
    });  
    
    $("#lightgallery-graphics").lightGallery({
        thumbnail: true,
        download: false
    });  
    
    $("#lightgallery-autoral1").lightGallery({
        thumbnail: true,
        download: false
    }); 
    
    $("#lightgallery-autoral2").lightGallery({
        thumbnail: true,
        download: false
    }); 
    
    $("#lightgallery-autoral3").lightGallery({
        thumbnail: true,
        download: false
    }); 
    
    $("#lightgallery-autoral4").lightGallery({
        thumbnail: true,
        download: false
    }); 
    
    $("#lightgallery-modelo1").lightGallery({
        thumbnail: true,
        download: false
    }); 
    
    $("#lightgallery-modelo2").lightGallery({
        thumbnail: true,
        download: false
    });
    
    $("#lightgallery-modelo3").lightGallery({
        thumbnail: true,
        download: false
    });
    
    $("#lightgallery-modelo4").lightGallery({
        thumbnail: true,
        download: false
    });
});

jQuery(document).ready(function ($) {
    $("#light-slider-esquerda").lightSlider({
        //item: 5,//mostra a quantidade de itens no slider
        //slideMove: 5,
        //slideMargin: 10,
        controls: true
        , keyPress: true
        , pause: 3500
        , speed: 1500
        , mode: 'fadeout'
        , auto: true
        , //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: true, //ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true 
    });
});

jQuery(document).ready(function ($) {
    $("#light-slider-direita").lightSlider({
        //item: 5,//mostra a quantidade de itens no slider
        //slideMove: 5,
        //slideMargin: 10,
        controls: true
        , keyPress: true
        , pause: 3000
        , speed: 2000
        , mode: 'fadeout'
        , auto: true
        , //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: true, //ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true
    , });
});

/*FORMULÁRIO*/

$(function ($) {
    $('#form').submit(function (event) {
        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/fcarnevale.fotografia@gmail.com", 
        method: "POST",
        data: {
            email: $("#email").val(),
            nome: $("#name").val(),
            assunto: $("#subject").val(),
            menssagem: $("#message").val()
        },
        dataType: "json"
        }).done(function(){
            $("#email").val("");
            $("#name").val("");            
            $("#subject").val("");
            $("#message").val("");
            alert("Email enviado com sucesso!");
            
        }).fail(function(){
            alert("Erro ao enviar o email!");
        });
    });
});
