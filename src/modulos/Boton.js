

(function () {
    

    const comp = $("<div class='btn-complemento'></div>")
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

    // Boton Negro 
    const btnBlancoSombra = "0 0 0 3px rgba(999, 999, 999, 0.5)"; 


    var inicializar = () => {
        $("body").append(comp)
        $(comp).hide()
    }


    var salir = ()=> {
        $(comp).click(function() {
            deselccionado()
            $(".btn-complemento").hide()
        })
    }

    const seleccionado = () => {
       
            $(".btn-rojo.activo").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnRojoSombra)
            })
    
            $(".activo.btn-verde").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnVerdeSombra)
            })
    
            $(".activo.btn-azul").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnAzulSombra)
                
            })
    
            $(".activo.btn-gris").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnGrisSombra)
                
            })
    
            $(".activo.btn-negro").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnNegroSombra)
                
            })
    
            $(".activo.btn-rojo-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnRojoSombra)
                
            })
    
            $(".activo.btn-verde-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnVerdeSombra)
               
            })
    
            $(".activo.btn-azul-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnAzulSombra)
                
            })
    
            $(".activo.btn-gris-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnGrisSombra)
                
            })
            $(".activo.btn-negro-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnNegroSombra)
              
            })
    
            $(".activo.btn-blanco-o").click(function () {
                deselccionado()
                $(comp).show()
                $($(this)).css("box-shadow", btnBlancoSombra)
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
            inicializar()
            seleccionado()
            salir()
        }
    }

    window.Boton = Boton;
})()

export default Boton;