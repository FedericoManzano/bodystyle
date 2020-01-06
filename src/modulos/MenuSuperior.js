(function(){
    var estado = 0;
    var cargarComplemento = ()=> {
        $(".menu-lateral").append("<div class='complemento'></div>")
        $(".menu-listado .i-menu").append("<span></span><span></span><span></span>")
    }

    var aparecerMenu = () => {
        $(".toggle").click(function(){
            if(estado === 0){
                $(".menu-lateral").show()
                estado = 1;
            }else {
                $(".menu-lateral").hide()
                estado = 0;
            }
                
        })
    }

    var desaparecerMenu = () => {
        $(".complemento").click(function(){
            $(".menu-lateral").hide()
            estado = 0;
            $("#toggle").prop("checked", false)
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