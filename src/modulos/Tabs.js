

class Tab {
    inicializar(contexto) {
        $(contexto + " .tab .op-tab ul  li:nth-child(1)").children("a").addClass("activo")
        $(contexto + " .contenido-tab").hide()
        var id = $($(contexto + " .tab .op-tab ul li:nth-child(1)").children("a")).data("target")
        $(id).show()
    }


    cambiarSolapa(contexto){
        $(contexto + " .tab .op-tab ul  li").children("a").click(function() {
            $(contexto + " .tab .op-tab ul  li a").removeClass("activo")
            $(this).addClass("activo")
            var idInfo = $($(this)).data("target")
            $(contexto + " .contenido-tab").hide()
            $(idInfo).show()
        })
    } 

    iniciar(contexto) {
        this.inicializar(contexto)
        this.cambiarSolapa(contexto)
    }

}


export default Tab