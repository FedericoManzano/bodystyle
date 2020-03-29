(function(){
    var elemento;


    var arriba = (boton) => {
        return $(boton).offset().top - $(window).scrollTop() >  $(elemento).outerHeight() + 5
    }

    var abajo = (boton) => {
        return $(window).height()+$(window).scrollTop() - 
            ($(boton).offset().top + $(boton).outerHeight())  
                > $(elemento).outerHeight() + 5
    }

    var derecha = (boton) => {
        return ($(window).width() - $(boton).offset().left) - $(boton).width() > $(".tips").width() + 5
    }

    var izquierda = (boton) => {
        return $(boton).offset().left > $(".tips").width() + 5
    }


    var inicializar = () => {
        $(".tips-ele").hover(function() {
            var posicion = $(this).data("posicion");
            var contenido = $(this).data("tips");
            elemento = $("<div class='tips'></div>")
            elemento.html(contenido)
            elemento.appendTo($(this))
            switch (posicion) {
                case "arriba":
                    if(arriba(this)){
                        elemento.css("bottom", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(-10px)'})
                    }else if(abajo(this)){
                        elemento.css("top", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(10px)'})
                    }else if(izquierda(this)){
                        elemento.css("right", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(-10px)'})
                    }else if(derecha(this)){
                        elemento.css("left", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(10px)'})
                    }
                  break;
                case "abajo":
                    if(abajo(this)){
                        elemento.css("top", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(10px)'})
                    }else if(arriba(this)){
                        elemento.css("bottom", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(-10px)'})
                    }else if(izquierda(this)){
                        elemento.css("right", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(-10px)'})
                    }else if(derecha(this)){
                        elemento.css("left", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(10px)'})
                    }
                  break;
                case "izquierda":
                    if(izquierda(this)){
                        elemento.css("right", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(-10px)'})
                    }else if(derecha(this)){
                        elemento.css("left", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(10px)'})
                    }else if(arriba(this)){
                        elemento.css("bottom", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(-10px)'})
                    }else if(abajo(this)){
                        elemento.css("top", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(10px)'})
                    }
                  break;
                case "derecha":
                    if(derecha(this)){
                        elemento.css("left", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(10px)'})
                    }else if(izquierda(this)){
                        elemento.css("right", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateX(-10px)'})
                    }else if(arriba(this)){
                        elemento.css("bottom", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(-10px)'})
                    }else if(abajo(this)){
                        elemento.css("top", "calc(100% - 5px)")
                        $(".tips").css({transform: 'translateY(10px)'})
                    }
                  break;
            }

            
        }, function() {
            elemento.fadeOut(200)
            elemento.remove()
            elemento = null;
        })
    }

    var ToolTips = {
        iniciar: () => {
            inicializar()
        }
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;