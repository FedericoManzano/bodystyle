(function(){
    var estado = false;
    var cantidad = $(".item").lenght
    var elementos = new Array(cantidad)

    var inicializarElementos = ()=> {
        for(var i = 0; i < cantidad; i ++ ){
            elementos[i] = false
        }

        $(".item .titulo").append("<i class='f-abajo'></i>")
        $(".item .titulo").append("<i class='f-derecha'></i>")

        $(".item .titulo").children(".f-abajo").css("border-top", "solid 5px #fff" )
        $(".item .titulo").children(".f-abajo").css("border-left", "solid 5px " + "transparent")
        $(".item .titulo").children(".f-abajo").css("border-right", "solid 5px " + "transparent")
        $(".item .titulo").children(".f-abajo").css("top", 12)
        $(".item .titulo").children(".f-abajo").css("botton", 0)
        $(".item .titulo").children(".f-abajo").css("rigth", 10)


        $(".item .titulo").children(".f-derecha").css("border-top", "solid 5px " + "transparent")
        $(".item .titulo").children(".f-derecha").css("border-botton", "solid 5px " + "transparent")
        $(".item .titulo").children(".f-derecha").css("border-left", "solid 5px #fff" )
        $(".item .titulo").children(".f-derecha").css("top", 12)
        $(".item .titulo").children(".f-derecha").css("botton", 0)
        $(".item .titulo").children(".f-derecha").css("rigth", 10)

        $(".item .titulo .f-abajo").hide() 

        $(".f-abajo-s").hide()
    }

    var controlSubmenu = ()=>{
        $(".sidebar-menu > .item").click(function(){
            var tocado = $(this).index()
            if(elementos[tocado - 1] === false || elementos[tocado - 1] === undefined){
                $("#" + (tocado)).fadeIn(150)
                $(".sidebar-menu .item:nth-child("+ (tocado + 1) +") .f-derecha").hide()
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-abajo").show()
                elementos[tocado - 1] = true
            }else{
                $("#" + (tocado)).fadeOut(150)
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-derecha").show()
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-abajo").hide()
                elementos[tocado - 1] = false
            }
        })
    }

    var presionaBarra = ()=>{
        $(".label").click(function(){
            if(!estado || estado === undefined){
                $(".cerrado").hide()
                $(".abierto").show()
                estado = true
            }else {
                $(".cerrado").show()
                $(".abierto").hide()
                estado = false
            }
        })
    }

    var Sidebar = {
        inicializar: function(){
            presionaBarra()
            inicializarElementos()
            controlSubmenu()
        } 
    }
    window.Sidebar = Sidebar
})()

export default Sidebar