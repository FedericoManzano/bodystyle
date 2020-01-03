(function(){
    var estado = false;
    var cantidad = $(".item").lenght
    var elementos = new Array(cantidad)

    var inicializarElementos = ()=> {
        for(var i = 0; i < cantidad; i ++ ){
            elementos[i] = false
        }

        $(".f-abajo-s").hide()
    }

    var controlSubmenu = ()=>{
        $(".sidebar-menu > .item").click(function(){
            var tocado = $(this).index()
            if(elementos[tocado - 1] === false || elementos[tocado - 1] === undefined){
                $("#" + (tocado)).fadeIn(150)
                $(".sidebar-menu .item:nth-child("+ (tocado + 1) +") .f-arriba-s").hide()
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-abajo-s").show()
                elementos[tocado - 1] = true
            }else{
                $("#" + (tocado)).fadeOut(150)
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-arriba-s").show()
                $(".sidebar-menu  .item:nth-child("+ (tocado + 1) +") .f-abajo-s").hide()
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