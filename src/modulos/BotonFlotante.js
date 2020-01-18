
(function(){
    var presionado = 0;
    var c = {}



    var iniciar =  ({colorMenu, alineacion} = {colorMenu: "fd-rojo", alineacion: "vertical"}) => {
        console.log(alineacion)
        switch(alineacion) {
            case "horizontal": 
                $(".btn-flotante").css({
                    transform: "rotate(-90deg)",
                    right: 150,
                    top: 300
                })
                $(".boton-menu").css("transform",  "rotate(90deg)")
                $(".boton-opciones").css("transform",  "rotate(90deg)")
            break;
            case "horizontalExpandido": 
                $(".btn-flotante").css({
                    transform: "rotate(-90deg)",
                    right: 150,
                    top: 300
                })
                $(".boton-menu").css("transform",  "rotate(90deg)")
                $(".boton-opciones").css("transform",  "rotate(180deg)")
                $(".submenu").css("transform",  "rotate(-90deg)")
            break;
            case "verticalExpandido": 
                $(".boton-opciones").css("transform",  "rotate(90deg)")
                $(".submenu").css("transform",  "rotate(-90deg)")
            break;
        }


        $(".btn-flotante .submenu").hide()
    } 
    var eventoClic = () => {
        $(".btn-flotante .boton-menu").click(function(){
            if(presionado === 0){
                $(".btn-flotante .submenu").slideDown(300);
                presionado = 1;
            } else {
                $(".btn-flotante .submenu").slideUp(300);
                presionado = 0;
            }
        })
    }

    var BotonFlotante = {
        iniciar: function(config){
            iniciar(config);
            eventoClic();
        }
    }

    window.BotonFlotante = BotonFlotante;
    
})()

export default BotonFlotante