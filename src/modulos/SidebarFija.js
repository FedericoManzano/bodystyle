(function(){

    var elementos = new Array($(".sidebarFija .titulo").lenght)
    var abierto = 0
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


    var cerrarTodas = () => {
        $(".sidebarFija  > .lista").slideUp(300)
        $(".sidebarFija  > .titulo").children(".f-derecha").show()
        $(".sidebarFija  > .titulo").children(".f-abajo").hide()
        inicializarElementos()
    }

    var desplegar = (id) => {
        cerrarTodas()
        
        $(".titulo").each(function(){
            
            if($($(this)).data("target") === id){
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                $(id).show()
                abierto = $(this).index()
            }
        })
    }

    var mostarLista = () => {
        $(".sidebarFija a.titulo").click(function() {
            cerrarTodas()
            if($(this).index() !== abierto) {
                $($(this).data("target")).slideDown(300)
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                abierto = $(this).index()
            }else {
                abierto = 0
            }
        })
    }


    var SidebarFija = {

        iniciar: ()=> {
            inicializarElementos()
            inicializarComponentes()
            mostarLista()
        },

        desplegar: (id) => desplegar(id)
    
    }
    window.SidebarFija = SidebarFija
})()

export default SidebarFija