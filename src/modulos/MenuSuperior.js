(function(){

    var cargarComplemento = ()=> {
        $(".menu-lateral").append("<div class='complemento'></div>")
    }

    var aparecerMenu = () => {
        $(".toggle").click(function(){
            $(".menu-lateral").show()
        })
    }

    var desaparecerMenu = () => {
        $(".complemento").click(function(){
            $(".menu-lateral").hide()
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