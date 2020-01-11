
(function(){
    var presionado = 0;

    var iniciar =  () => {
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
        iniciar: function(){
            iniciar();
            eventoClic();
        }
    }

    window.BotonFlotante = BotonFlotante;
    
})()

export default BotonFlotante