(function() {

    var visible = 0;
    var elementos = new Array($(".sidebar-lateral .titulo").lenght)

    var inicializarElementos = () => {
        for(var i = 0; i < elementos.length; i ++){
            elementos[i] = false;
        }
    }

    var inicializarColumna = () => {
        $(".sidebar-lateral .titulo").append("<i class='f-derecha'></i>");
        $(".sidebar-lateral .titulo").append("<i class='f-abajo'></i>");
        $(".sidebar-lateral .titulo .f-derecha").css("top", 13);
        $(".sidebar-lateral .titulo .f-abajo").css("top", 13);
        $(".sidebar-lateral .titulo .f-abajo").hide();
        $(".sidebar-lateral .lista").hide();

    }

    var desplazar = () => {
        $(".sidebar-barra .sidebar-menu").click(function() {
            if(visible === 0){
                $(".sidebar-lateral").css("left", 0);
                visible = 1
            } else {
                $(".sidebar-lateral").css("left", -240);
                visible = 0
            }
        })
    }

    var desplegar = () => {
        $(".sidebar-lateral > .titulo").click(function() {

            if(elementos[$(this).index()- 1] === false          || 
                elementos[$(this).index()- 1]  === undefined
            )
            {
                $($(this).data("target")).slideDown(300)
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                elementos[$(this).index()- 1] = true
            }else {
                $($(this).data("target")).slideUp(300)
                $(this).children(".f-derecha").show()
                $(this).children(".f-abajo").hide()
                elementos[$(this).index()- 1] = false
            }
        })
    }

    var SidebarLateral = {
        iniciar: () => {
            inicializarElementos()
            inicializarColumna()
            desplazar()
            desplegar()
        }
    }
    window.SidebarLateral = SidebarLateral;
})()

export default SidebarLateral;