(function(){
    var aparecerModal1 = ()=> {
        $(".activar-modal1").click(function(){
            $(".modal-1").fadeIn(200)
        })
    }

    var desaparecerModal = ()=> {
        $(".complemento").click(function(){
            $(".modal-1").fadeOut(200)
        })
    }

    var Modal = {
        iniciar: function(){
            aparecerModal1()
            desaparecerModal()
        }
    }

    window.Modal = Modal

})()

export default Modal;