(function() {

    var cantidad = $(".scroll-item").length;
    var ids = new Array(cantidad)

    var inicializarIds = () => {
        for(var i = 0; i < cantidad; i++){
            ids[i] = $(".scroll-item:nth-child("+ (i + 1) +")").attr("id")
            
        }
        $(".elemento-seleccionado").remove()
        $(".lista-scroll ul li a").css("color", "#666")
        $(".lista-scroll ul li:nth-child(1) a")
            .before("<p class='elemento-seleccionado'></p>");
        $(".lista-scroll ul li:nth-child("+ (i + 1)+ ") a").css("color", "#000")
        

    } 

    var inicializar = () => {
        $(window).scroll( function(e){
            for(var i = 0; i < cantidad; i++){
                console.log($(this).scrollTop() + " " + $("#" + ids[i]).offset().top)
                if($(this).scrollTop() >= $("#" + ids[i]).offset().top){
                    $(".elemento-seleccionado").remove()
                    $(".lista-scroll ul li a").css("color", "#666")
                    $(".lista-scroll ul li:nth-child("+  (i + 1) + ") a")
                    .before("<p class='elemento-seleccionado'></p>");
                    $(".lista-scroll ul li:nth-child("+ (i + 1)+ ") a").css("color", "#000")
                }
            }
        })
    }

    var seleccionar = () => {
        $(".lista-scroll ul li").click(function() {
            $(".lista-scroll ul li a").css("color", "#666")
            $(".elemento-seleccionado").remove()
            $(this).children("a").before("<p class='elemento-seleccionado'></p>")
            $(this).children("a").css("color", "#000")
        })
    }

    var ScrollSpy = {
        iniciar: () => {
            inicializarIds()
            inicializar()
            seleccionar()
            
        }
    }
    window.ScrollSpy = ScrollSpy;
})()

export default ScrollSpy;