

(function(){

    var presionado = 0;

    var configurarDropDown = ({color} = {color: "#fff"}) => {
        console.log(color)
        $(".dropdown-toggle").append("<span class='f-abajo'></span>")
        $(".dropdown-toggle").append("<span class='f-derecha'></span>")

        $(".dropdown-toggle").children(".f-abajo").css("border-top", "solid 5px " + color)
        $(".dropdown-toggle").children(".f-abajo").css("border-left", "solid 5px " + "transparent")
        $(".dropdown-toggle").children(".f-abajo").css("border-right", "solid 5px " + "transparent")

        $(".dropdown-toggle").children(".f-derecha").css("border-top", "solid 5px " + "transparent")
        $(".dropdown-toggle").children(".f-derecha").css("border-botton", "solid 5px " + "transparent")
        $(".dropdown-toggle").children(".f-derecha").css("border-left", "solid 5px " + color)

        $(".dropdown-toggle .f-abajo").hide() 
    }

    var aparecer = () => {
        $(".dropdown-toggle").click(function(){
            var boton = $(this);
            var dropdown = $($(this).data("target"))
            if(presionado === 0 || presionado === undefined){
                dropdown.fadeIn(300).appendTo(boton)
                boton.children(".f-derecha").hide()
                boton.children(".f-abajo").show()
                presionado = 1
            }else {
                dropdown.fadeOut(300)
                boton.remove(dropdown)
                boton.children(".f-derecha").show()
                boton.children(".f-abajo").hide()
                presionado = 0
            }
        })
    }

    var DropDown = {
        iniciar: function(config) {
            configurarDropDown(config)
            aparecer()
        }
    }

    window.DropDown = DropDown
})()

export default DropDown