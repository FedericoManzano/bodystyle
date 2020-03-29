(function(){

    // Elemento tips
    var elemento = null;

    // Separación del tips respecto al origen
    const margin = 5

    /**
     * Validación del espacio encima del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const arriba = (origen) => {
        const offsetTopOrigen = $(origen).offset().top
        const wScrollTop = $(window).scrollTop() 
        const tipsHeight = $(elemento).outerHeight()
        return offsetTopOrigen - wScrollTop >  tipsHeight + margin
    }


    /**
     * Validación del espacio debajo del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const abajo = (origen) => {
        const windowHeight = $(window).height()
        const wScrollTop = $(window).scrollTop() 
        const origenOffsetTop = $(origen).offset().top
        const origenHeight = $(origen).outerHeight()
        const tipsHeight = $(elemento).outerHeight()
        return windowHeight + wScrollTop - 
                (origenOffsetTop + origenHeight)  
                                > tipsHeight + margin
    }


    /**
     * Validación del espacio derecha del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const derecha = (origen) => {
        const windowWidth = $(window).width()
        const origenOffsetLeft = $(origen).offset().left
        const origenWidth = $(origen).width()
        const tipsWidth = $(".tips").width()
        return windowWidth - origenOffsetLeft - origenWidth - 80 > tipsWidth + 5
    }


    /**
     * Validación del espacio izquierda del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const izquierda = (boton) => {
        return $(boton).offset().left > $(".tips").width() + 5
    }


    /**
     * Validar los datos de entrada posición e información
     * @param {Posición del tips } posicion 
     * @param {Info a mostrar por el tips} info 
     */
    const validarTips = (posicion, info) => {
        if( posicion !== "arriba"       && 
            posicion !== "abajo"        &&
            posicion !== "izquierda"    && 
            posicion !== "derecha" )
                return false
        if(info === "" || info === undefined)
            return false
        return true
    }

    const inicializar = () => {

        /** Efecto hover  */
        $(".tips-ele").hover(function() {
            var posicion = $(this).data("posicion");
            var contenido = $(this).data("tips");

            // Validar campos de entrada
            if(!validarTips(posicion, contenido))
                return 

            // Crear elemento tips de manera dinámica
            elemento = $("<div class='tips'></div>")
            elemento.html(contenido)
            elemento.appendTo($(this))


            /**
             * Selección de la ubicación del tips dentro 
             * del elemento origen
             */
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
            if(elemento === null)
                return
            elemento.remove() // Destrucción del tips
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