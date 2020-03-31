

(function(){

    var presionado = 0;
    const margin = 10

    var configurarDropDown = ({color} = {color: "#fff"}) => {
        
        $(".dropdown ul li a").addClass("dd-a")
        $(".dropdown-toggle").append("<span class='f-abajo'></span>")
        $(".dropdown-toggle").append("<span class='f-derecha'></span>")


        $(".dropdown-toggle").children(".f-abajo").css({
            borderTop: "solid 5px " + color,
            borderRight: "solid 5px transparent",
            borderLeft: "solid 5px transparent"
        })
        $(".dropdown-toggle").children(".f-derecha").css({
            borderTop: "solid 5px transparent",
            borderBotton: "solid 5px transparent",
            borderLeft: "solid 5px " + color
        })


        $(".dropdown-toggle .f-abajo").hide() 

        $("body").append("<div class='drop'></div>");
        $(".drop").hide()
    }

    var disabled = () => {
        $(".dropdown ul li .disabled").removeAttr("href")
    }

    var effsetIzquierda = (dropdown) => {
        var offSet = $(dropdown).offset().left ;
        return offSet <= 0 ? Math.round(offSet * -1 + margin) : 0
    }

    var offsetDerecha = (dropdown) => {
        var offSet = $(window).width() - $(dropdown).offset().left - $(dropdown).outerWidth() ;
        return offSet <= 0 ? Math.round(offSet - margin) : 0
    }

    var posicionamientoDropDown = (origen, dropdown)=> {
        var oi = effsetIzquierda(dropdown)
        var od = offsetDerecha(dropdown)
        if(oi !== 0)
            $(dropdown).css("left", oi);
        if(od !== 0)
            $(dropdown).css("left", od);
    }
    
    var reiniciarPosicion = (dopdown) => {
        $(dopdown).css("left", 0)
    }
    var dropDown = () => {
        $(".dropdown-toggle").click(function(){
            var boton = $(this);
            var dropdown = $($(this).data("target"))
            if(presionado === 0 || presionado === undefined){
                dropdown.fadeIn(300).appendTo(boton)
                posicionamientoDropDown(this, dropdown)
                boton.children(".f-derecha").hide()
                boton.children(".f-abajo").show()
                $(".drop").show()
                presionado = 1
            }else {
                dropdown.hide()
                reiniciarPosicion(dropdown)
                boton.remove(dropdown)
                boton.children(".f-derecha").show()
                boton.children(".f-abajo").hide()
                $(".drop").hide()
                presionado = 0
            }

            $(".drop").click(function(){
                dropdown.hide()
                reiniciarPosicion(dropdown)
                boton.remove(dropdown)
                boton.children(".f-derecha").show()
                boton.children(".f-abajo").hide()
                $(".drop").hide()
                presionado = 0 
            })
        })
    }

    var DropDown = {
        iniciar: function(config) {
            configurarDropDown(config)
            dropDown()
            disabled()
        }
    }

    window.DropDown = DropDown
})()

export default DropDown