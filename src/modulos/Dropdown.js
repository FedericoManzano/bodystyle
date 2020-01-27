

(function(){

    var presionado = 0;

    var configurarDropDown = ({color} = {color: "#fff"}) => {
        
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

    var dropDown = () => {
        $(".dropdown-toggle").click(function(){
            var boton = $(this);
            var dropdown = $($(this).data("target"))
            if(presionado === 0 || presionado === undefined){
                dropdown.fadeIn(300).appendTo(boton)
                boton.children(".f-derecha").hide()
                boton.children(".f-abajo").show()
                $(".drop").show()
                presionado = 1
            }else {
                dropdown.fadeOut(300)
                boton.remove(dropdown)
                boton.children(".f-derecha").show()
                boton.children(".f-abajo").hide()
                $(".drop").hide()
                presionado = 0
            }

            $(".drop").click(function(){
                dropdown.fadeOut(300)
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
        }
    }

    window.DropDown = DropDown
})()

export default DropDown