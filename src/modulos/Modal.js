(function(){

    var estadoInicial = ({fondo,texto, ancho, radio, justificacion} = {
        fondo: "fd-gris-c",
        texto: "c-negro",
        ancho: 350,
        radio: 4,
        justificacion: "a-centrado"
    })=> {
        $(".modal").css("opacity", 1)
        $(".modal .modal-ventana").addClass(fondo)
        $(".modal .modal-ventana").addClass(texto)
        $(".modal .modal-ventana").addClass(justificacion)
        $(".modal .modal-ventana").css("max-width", ancho + "px")
        $(".modal .modal-ventana").css("border-radius", radio + "px")
        $(".modal").append("<div class='complemento'></div>")
        $(".modal").hide()


        $(".modal1").css("opacity", 1)
        $(".modal1").hide()

        $(".modal-registro").css("opacity", 1)
        $(".modal-registro").hide()
    }

    var aparecerModal = ()=> {
        $(".activar-modal").click(function(){
            $($(this).data("target")).fadeIn()
        })
    }

    var desaparecerModal = ()=> {
        $(".complemento").click(function(){
            $(".modal").fadeOut(200)
        })
    }

    var desaparecerModal_x = ()=> {
        $(".desactivar-modal").click(function(){
            $($(this).data("target")).fadeOut(200)
        })
    }

    var Modal = {
        iniciar: function(conf){
            estadoInicial(conf)
            aparecerModal()
            desaparecerModal()
            desaparecerModal_x()
        }
    }

    window.Modal = Modal

})()

export default Modal;