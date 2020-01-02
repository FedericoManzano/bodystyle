

(function(){

    var presionado = 0;

    var aparecer = () => {
        $(".dropdown-toggle").click(function(){
            var boton = $(this);
            var dropdown = $($(this).data("target"))
            if(presionado === 0 || presionado === undefined){
                dropdown.fadeIn(300).appendTo(boton)
                presionado = 1
            }else {
                dropdown.fadeOut(300)
                boton.remove(dropdown)
                presionado = 0
            }
            
           
        })
    }


    var DropDown = {
        iniciar: function() {
            aparecer()
        }
    }

    window.DropDown = DropDown
})()

export default DropDown