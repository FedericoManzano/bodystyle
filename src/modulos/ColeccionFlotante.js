/**
 * 
 * 
 * <div id="contexto">
        <div class="lista-float-der">
            <span class="cerrar icon-cross"></span>
            <span class="abrir icon-arrow-left"></span>
            <div class="lista-item fd-gris-az-o">
                <a href="" class="c-blanco">Elemento</a>
                <span class="borde fd-rojo"></span>
            </div>
            <div class="lista-item fd-gris-az-o">
                <a href="" class="c-blanco">Elemento</a>
                <span class="borde fd-verde"></span>
            </div>
            <div class="lista-item fd-gris-az-o">
                <a href="" class="c-blanco">Elemento</a>
                <span class="borde fd-naranja"></span>
            </div>
        </div>
    </div>
 */


class ColeccionFlotante {

    inicializarElemento(c){

        $(c.contexto + " .lista-float-der").css("top", c.altura)
        $(c.contexto + " .lista-float-izq").css("top", c.altura)

        $(c.contexto + " .lista-float-der .cerrar").show()
        $(c.contexto + " .lista-float-der .abrir").hide()

        $(c.contexto + " .lista-float-izq .cerrar").show()
        $(c.contexto + " .lista-float-izq .abrir").hide()


        $(c.contexto + " .lista-float-der .lista-item").addClass(c.fondoItem)
        $(c.contexto + " .lista-float-izq .lista-item").addClass(c.fondoItem)

        $(c.contexto + " .lista-float-der .lista-item *").addClass(c.colorTexto)
        $(c.contexto + " .lista-float-izq .lista-item *").addClass(c.colorTexto)


        $(c.contexto + " .lista-float-der .cerrar").click(function(){
            $(this).parent().css("right", "-230px")
            $(this).hide()
            $(c.contexto + " .lista-float-der .abrir").show()
        })

        $(c.contexto + " .lista-float-der .abrir").click(function(){
            $(this).parent().css("right", 0)
            $(this).hide()
            $(c.contexto + " .lista-float-der .cerrar").show()
        })


        $(c.contexto + " .lista-float-izq .cerrar").click(function(){
            $(this).parent().css("left", "-230px")
            $(this).hide()
            $(c.contexto + " .lista-float-izq .abrir").show()
        })

        $(c.contexto + " .lista-float-izq .abrir").click(function(){
            $(this).parent().css("left", 0)
            $(this).hide()
            $(c.contexto + " .lista-float-izq .cerrar").show()
        })


    }



    iniciar({contexto="vacio", fondoItem="fd-gris-az-o", colorTexto="c-blanco", altura = 100}) {

        var c = {
            contexto,
            fondoItem,
            colorTexto,
            altura
        }

        this.inicializarElemento(c)
    }
}

export default ColeccionFlotante