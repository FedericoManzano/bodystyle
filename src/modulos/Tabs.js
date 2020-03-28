

class Tab {
    inicializar(contexto) {
        $(contexto + " .tab .op-tab label:nth-child(1)").addClass("activo")
        $(contexto + " .contenido-tab").hide()
        var id = $($(contexto + " .tab .op-tab label:nth-child(1)")).data("target")
        $(id).show()
    }

    inicializarBorde(c){
        $(c.contexto + " .tab-borde .op-tab-borde ul").addClass(c.colorFondo)
        $(c.contexto + " .tab-borde .op-tab-borde label").addClass(c.colorFuente)
        $(c.contexto + " .contenido-tab").hide()
        var borde = $("<span class='activo "+ c.colorBorde +"' ></span>")
        $(c.contexto + " .tab-borde .op-tab-borde label:nth-child(1)").append(borde)
        var id = $($(c.contexto + " .tab-borde .op-tab-borde label:nth-child(1)")).data("target")
        $(id).show()
    }

    cambiarBorde(c) {
        $(c.contexto + " .tab-borde .op-tab-borde label").click(function() {
            $(c.contexto + " .tab-borde .op-tab-borde label span").remove()
            var borde = $("<span class='activo "+ c.colorBorde +"' ></span>")
            $(this).append(borde)
            $(c.contexto + " .contenido-tab").hide()
            var id = $($(this)).data("target")
            $(id).show()
        })
    }

    cambiarSolapa(contexto){
        $(contexto + " .tab .op-tab label").click(function() {
            $(contexto + " .tab .op-tab label").removeClass("activo")
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

    iniciarBorde({contexto, colorFuente, colorFondo, colorBorde} = {
        contexto: "vacio", 
        colorFuente: "c-negro",
        colorFondo: "fd-blanco",
        colorBorde: "fd-negro"
    }){

        var c = {
            contexto,
            colorFuente,
            colorFondo,
            colorBorde
        }
        this.inicializarBorde(c)
        this.cambiarBorde(c)
    }

}


export default Tab