(function(){
    var elemento;
    var inicializar = () => {
        $(".tips-ele").hover(function() {
            var posicion = $(this).data("posicion");
            var contenido = $(this).data("tips");
            elemento = $("<div class='tips'></div>")
            
            switch (posicion) {
                case "arriba":
                    elemento.css("bottom", "calc(100% + 5px)")
                  break;
                case "abajo":
                    elemento.css("top", "calc(100% + 5px)")
                  break;
                case "izquierda":
                    elemento.css("right", "calc(100% + 5px)")
                  break;
                case "derecha":
                    elemento.css("left", "calc(100% + 5px)")
                  break;
            }

            elemento.html(contenido)
            elemento.appendTo($($(this))).fadeIn(200);
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