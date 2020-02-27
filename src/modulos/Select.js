(function(){
    var cantidadSelect = $(".select-modificado").length;
    var cantidadOpciones = $(".select-modificado select option").length;
    var opciones = new Array(cantidadOpciones);
    var selects = new Array(cantidadSelect);


    var inicializar = () => {



        var opciones = $("body .select-modificado select option")
        var lista = $("<ul class='listado'></ul>")
       
        for(var i = 0; i < $(opciones).length; i ++){
           var elementos = $("<li>" + $(opciones[i]).text() + "</li>")   
           $(lista).append($(elementos))
        }
        $(".select-modificado").append(lista)
    }

    var sleccionado = () => {
        $(".select-modificado").click(function(){
            var opciones
        })
    }


    var Select = {
        iniciar: ()=> inicializar()
    }

    window.Select = Select

})()


export default Select