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

    var menuResp = {
        iniciar: function(){
            cargarComplemento()
            aparecerMenu()
            desaparecerMenu()
        }
    }

    window.menuResp = menuResp;
})()

export default menuResp;