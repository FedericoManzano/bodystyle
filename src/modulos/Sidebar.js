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
        $(".sidebar-cabecera .i-menu").append("<span></span><span></span><span></span>")


        $(".item .titulo").children(".f-abajo").css({
            borderTop: "solid 5px #fff",
            borderRight: "solid 5px transparent",
            borderLeft: "solid 5px transparent",
            top: 12,
            botton: 0,
            rigth: 10
        })
        $(".item .titulo").children(".f-derecha").css({
            borderTop: "solid 5px transparent",
            borderBotton: "solid 5px transparent",
            borderLeft: "solid 5px #fff",
            top: 12,
            botton: 0,
            rigth: 10
        })

        $(".f-abajo").hide() 

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