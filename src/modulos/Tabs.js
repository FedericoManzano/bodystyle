

class Tab {

    /**
     * Inicializa el Tab de tipo solapa
     * @param {ID del contenedor padre de todo el tab} contexto 
     */
    inicializar(contexto) {
        $(contexto + " .tab .op-tab label:nth-child(1)").addClass("activo")
        $(contexto + " .contenido-tab").hide()
        var id = $($(contexto + " .tab .op-tab label:nth-child(1)")).data("target")
        $(id).show()
    }


    /**
     * Inicializa el Tab tipo borde
     * @param {Obj Json con la configuración} c 
     */
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
        /** Valores por defecto */
        contexto: "vacio", 
        colorFuente: "c-negro",
        colorFondo: "fd-blanco",
        colorBorde: "fd-negro"
    }){

        var c = {
            contexto,       // ID del contenido
            colorFuente,    // Color de la fuente de los Tabs
            colorFondo,     // Color de Fondo de la barra 
            colorBorde      // Color del borde seleccionado
        }

        // Inicializa el Tab con borde
        this.inicializarBorde(c)

        // Inicializa el Tab con solapa
        this.cambiarBorde(c)
    }

}


export default Tab