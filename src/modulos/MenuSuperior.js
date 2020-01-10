(function(){


    var estado=0;
    var cargarComplemento = ()=> {
        $("body").append("<div class='complemento'></div>")
        $(".lateral-boton").append("<span></span><span></span><span></span>")
    }

    var aparecerMenu = () => {
        $(".lateral-boton").click(function(){
            if(estado === 0){
                var menuLateral = $($(this).data("target"));
                menuLateral.animate({
                    left: 0,
                }, 500) 
                $(".complemento").show()
                estado = 1
            }else {
                $(".menu-lateral").animate({
                    left: -240,
                }, 500)
                $(".complemento").hide()
                estado = 0
            }
            
        })
    }

    var desaparecerMenu = () => {
        $(".complemento").click(function(){
            $(".menu-lateral").animate({
                left: -240,
            }, 500) 
            $(this).hide()
        })
    }

    var MenuSuperior = {
        iniciar: function(){
            cargarComplemento()
            aparecerMenu()
            desaparecerMenu()
        }
    }

    window.MenuSuperior = MenuSuperior;
})()

export default MenuSuperior;