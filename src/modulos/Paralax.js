(function(){

    var inicializar = () => {
        $(".paralax-contenedor img").css("opacity", 0)
        var cantidad = $(".paralax-contenedor").length
        for(var i = 0; i < cantidad; i ++){
            var ruta = $(".paralax-contenedor:nth-child(+ " + (i+1) + ")").children(".paralax").attr("src")
            $(".paralax-contenedor:nth-child(+ " + (i+1) + ")").css("background-image", "url("+ ruta +")")
            $(".paralax-contenedor:nth-child(+ " + (i+1) + ")").css("background-attachment", "fixed")

        }
    }

    var Paralax = {
        iniciar: () => inicializar()
    }

    window.Paralax = Paralax
})()


export default Paralax