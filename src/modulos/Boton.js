

(function () {
    const efecto = () => {
        $(".efecto").click(function(e){
            var boton = $(this)
            var elemento = $("<span class='efecto-waves'></span>")
            var efectoSize = boton.width() * Math.PI;
            elemento.css({
                width: 10,
                height: 10,
                left: e.offsetX,
                top: e.offsetY
            }).appendTo(boton).animate({
                width: efectoSize,
                height: efectoSize,
                opacity: 0
            }, 500, function(){
                $(this).remove()
            })
        })
    }

    // Boton Rojo
    const btnRojoSombra = "0 0 0px 3px rgba(187, 24, 24, 0.5)";
    
    // Boton Verde
    const btnVerdeSombra = "0 0 0 3px rgba(0, 156, 128, 0.5)"; 
    
    // Boton Azul
    const btnAzulSombra = "0 0 0 3px rgba(0, 108, 255 , 0.5)"; 
    
    // Boton Gris
    const btnGrisSombra = "0 0 0 3px rgba(105, 105, 105, 0.5)"; 
    
    // Boton Negro 
    const btnNegroSombra = "0 0 0 3px rgba(65, 65, 65, 0.5)"; 

    const seleccionado = () => {

        $(".btn-rojo").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnRojoSombra)
        })

        $(".btn-verde").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnVerdeSombra)
        })

        $(".btn-azul").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnAzulSombra)
        })

        $(".btn-gris").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnGrisSombra)
        })

        $(".btn-negro").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnNegroSombra)
        })

        $(".btn-rojo-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnRojoSombra)
        })

        $(".btn-verde-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnVerdeSombra)
        })

        $(".btn-azul-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnAzulSombra)
        })

        $(".btn-gris-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnGrisSombra)
        })
        $(".btn-negro-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnNegroSombra)
        })
    }

    const deselccionado = () => {
        $(".btn").css("box-shadow", "none")
        $(".btn-sm").css("box-shadow", "none")
        $(".btn-lg").css("box-shadow", "none")
        $(".btn-cubrir-sm").css("box-shadow", "none")
        $(".btn-cubrir").css("box-shadow", "none")
        
    }

    const Boton = {
        iniciar: function () {
            seleccionado()
            efecto()
        }
    }

    window.Boton = Boton;
})()

export default Boton;