(function(){
    var descripcionElemento = null
    var hover = () => {
        $(".descripcion").hover(function(e) {
            var info = $($(this)).data("info")
            var posicion = $($(this)).data("posicion")
            var cabecera = $($(this)).data("cabecera")
            descripcionElemento = $("<div class='descripcion-contenido'></div>")
            var cabeceraCont = $("<div class='descripcion-cabecera'></div>")
            var cuerpo = $("<div class='descripcion-cuerpo'></div>")
            
            $(cabeceraCont).append(cabecera)
            $(cuerpo).append(info)
            $(descripcionElemento).append(cabeceraCont)
            $(descripcionElemento).append(cuerpo)
            
            
            $(this).append(descripcionElemento)

            var mueca = $("<div class='mueca'></div>")
            switch(posicion){
                
                case "top": 
                    if($(descripcionElemento).offset().top - $(window).scrollTop() > $(descripcionElemento).height()){
                        $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                        $(mueca).css("bottom", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }else {
                        $(descripcionElemento).css("top", "calc(100% + 15px)")   
                        $(mueca).css("top", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }
                    

                break;
                case "bottom": 
                   
                    if($(window).height() - $(window).scrollTop() > $(descripcionElemento).height()){ 
                        
                        $(descripcionElemento).css("top", "calc(100% + 15px)")   
                        $(mueca).css("top", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }else {
                        $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                        $(mueca).css("bottom", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }

                
                break;
                case "left":  
                var offsetDerecha =$(window).width() -  $(descripcionElemento).offset().left - $(descripcionElemento).width()
                if($(descripcionElemento).offset().left > $(descripcionElemento).width()){
                    if($(descripcionElemento).offset().top > $(descripcionElemento).height() / 2) {
                        $(descripcionElemento).css("right", "calc(100% + 15px)")   
                        $(mueca).css("right", -7)
                        $(mueca).css("top", "calc(50% - 7.5px)")
                    }else if($(descripcionElemento).offset().top -$(descripcionElemento).scrollTop() > $(descripcionElemento).height() / 2){
                        $(descripcionElemento).css("top", "calc(100% + 15px)")   
                        $(mueca).css("top", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }else {
                        $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                        $(mueca).css("bottom", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }
                    
                }else if(offsetDerecha > $(descripcionElemento).width()){
                    $(descripcionElemento).css("left", "calc(100% + 15px)")   
                    $(mueca).css("left", -7)
                    $(mueca).css("top", "calc(50% - 7.5px)")
                   
                }else if($(descripcionElemento).offset().top > $(descripcionElemento).height()) {
                    $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                    $(mueca).css("bottom", -7)
                    $(mueca).css("left", "calc(50% - 7.5px)")
                }else {
                    $(descripcionElemento).css("top", "calc(100% + 15px)")   
                    $(mueca).css("top", -7)
                    $(mueca).css("left", "calc(50% - 7.5px)")
                }  

                break;

                case "right":
                    var offsetDerecha =$(window).width() -  $(descripcionElemento).offset().left - $(descripcionElemento).width()
                    if(offsetDerecha  > $(descripcionElemento).width()){ 
                        if($(descripcionElemento).offset().top -$(descripcionElemento).scrollTop() > $(descripcionElemento).height() / 2) {
                            $(descripcionElemento).css("left", "calc(100% + 15px)")   
                            $(mueca).css("left", -7)
                            $(mueca).css("top", "calc(50% - 7.5px)")
                        }else {
                            $(descripcionElemento).css("top", "calc(100% + 15px)")   
                            $(mueca).css("top", -7)
                            $(mueca).css("left", "calc(50% - 7.5px)")
                        }
                        
                    }else if($(descripcionElemento).offset().left > $(descripcionElemento).width()){
                        $(descripcionElemento).css("right", "calc(100% + 15px)")   
                        $(mueca).css("right", -7)
                        $(mueca).css("top", "calc(50% - 7.5px)")
                    }else if($(descripcionElemento).offset().top > $(descripcionElemento).height()){
                        $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                        $(mueca).css("bottom", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }else {
                        $(descripcionElemento).css("bottom", "calc(100% + 15px)")   
                        $(mueca).css("bottom", -7)
                        $(mueca).css("left", "calc(50% - 7.5px)")
                    }
                    break;
            }
            $(cabeceraCont).before(mueca)
        }, function() {
           descripcionElemento.remove()
        })
    }


    var Descripcion = {
        iniciar: () => hover()
    }

    window.Descripcion = Descripcion
})()

export default Descripcion