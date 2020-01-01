

(function () {
    var btnRojoSombra = "0 0 0px 3px rgba(187, 24, 24, 0.5)";
    
    // Boton Verde
    var btnVerdeSombra = "0 0 0 3px rgba(0, 156, 128, 0.5)"; 
    
    // Boton Azul
    var btnAzulSombra = "0 0 0 3px rgba(0, 108, 255 , 0.5)"; 
    
    // Boton Gris
    var btnGrisSombra = "0 0 0 3px rgba(105, 105, 105, 0.5)"; 
    
    // Boton Negro 
    var btnNegroSombra = "0 0 0 3px rgba(65, 65, 65, 0.5)"; 

    var seleccionado = () => {

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

    var deselccionado = () => {
        $(".btn").css("box-shadow", "none")
        $(".btn-sm").css("box-shadow", "none")
        $(".btn-lg").css("box-shadow", "none")
        $(".btn-cubrir-sm").css("box-shadow", "none")
        $(".btn-cubrir").css("box-shadow", "none")
        
    }

    var Boton = {
        iniciar: function () {
            seleccionado()
        }
    }

    window.Boton = Boton;
})()

export default Boton;