(function(){

    var elementos = new Array($(".sidebarFija .titulo").lenght)

    var inicializarElementos = () => {
        for(var i = 0; i < elementos.length; i ++){
            elementos[i] = false;
        }
    }


    var inicializarComponentes = () => {
        $(".sidebarFija .titulo").append("<i class='f-derecha'></i>");
        $(".sidebarFija .titulo").append("<i class='f-abajo'></i>");
        $(".sidebarFija .titulo .f-abajo").hide();
        $(".sidebarFija .lista").hide();
    }

    var mostarLista = () => {
        $(".sidebarFija > .titulo").click(function() {

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


    var SidebarFija = {

        iniciar: ()=> {
            inicializarElementos()
            inicializarComponentes()
            mostarLista()
        }
    
    }
    window.SidebarFija = SidebarFija
})()

export default SidebarFija