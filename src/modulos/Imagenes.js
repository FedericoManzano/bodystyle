(function() {

   var inicializar = () => {

       $(".img-exp").click(function(){
            $("html").append("<div class='contenedor-imagen'></div>")
            var ruta = $(this).attr("src")
            $(".contenedor-imagen").append(`<img src= ${ruta.toString()}></img>`)
            $(".contenedor-imagen").click(function(){
                $(".contenedor-imagen").hide() 
            })
       })
   }

   var cerrar = () => {
        $("body").bind('keydown',function(e){
            if ( e.which == 27 ) {
                $(".contenedor-imagen").hide()
            };
        });

        $(window).bind('mousewheel', function(e){ 
            $(".contenedor-imagen").hide() 
        });

        
   }


    var Imagenes = {
        iniciar: () => {
            inicializar()
            cerrar()
        }
    }
    window.Imagenes = Imagenes;
})()

export default Imagenes;