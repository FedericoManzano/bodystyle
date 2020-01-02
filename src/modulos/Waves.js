(function(){
    const efecto = () => {
        $(".waves").click(function(e){
            var boton = $(this)
            var elemento = $("<span class='efecto-waves'></span>")
            var efectoSize = boton.width() * Math.PI;
            elemento.css({
                width: 10,
                height: 10,
                left: e.offsetX,
                top: e.offsetY
            }).appendTo(boton).animate({
                width: efectoSize,
                height: efectoSize,
                opacity: 0
            }, 500, function(){
                $(this).remove()
            })
        })
    }

    var Waves = {
        iniciar: function(){
            efecto()
        }
    }
    window.Waves = Waves
})()

export default Waves