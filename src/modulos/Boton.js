

(function () {
    
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



    const menejador = ()=> {
        $("body").append("<div class='manejador-botones'></div>");
        $(".manejador-botones").hide()
    }

    const cortar = ()=> {
        $(".manejador-botones").click(function(){
            deselccionado()
            $(this).hide()
        })
    }

    const seleccionado = () => {

        $(".btn-rojo").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnRojoSombra)
            $(".manejador-botones").show()
        })

        $(".btn-verde").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnVerdeSombra)
            $(".manejador-botones").show()
        })

        $(".btn-azul").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnAzulSombra)
            $(".manejador-botones").show()
        })

        $(".btn-gris").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnGrisSombra)
            $(".manejador-botones").show()
        })

        $(".btn-negro").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnNegroSombra)
            $(".manejador-botones").show()
        })

        $(".btn-rojo-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnRojoSombra)
            $(".manejador-botones").show()
        })

        $(".btn-verde-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnVerdeSombra)
            $(".manejador-botones").show()
        })

        $(".btn-azul-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnAzulSombra)
            $(".manejador-botones").show()
        })

        $(".btn-gris-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnGrisSombra)
            $(".manejador-botones").show()
        })
        $(".btn-negro-o").click(function () {
            deselccionado()
            $($(this)).css("box-shadow", btnNegroSombra)
            $(".manejador-botones").show()
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
            menejador()
            cortar()
            seleccionado()
        }
    }

    window.Boton = Boton;
})()

export default Boton;