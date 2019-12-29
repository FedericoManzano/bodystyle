(function(){
    var mostrarMensaje = ()=> {
        console.log("hola webpack")
    }

    var mje = {
        inicializar: function(){
            mostrarMensaje()
        }
    }

    window.mje = mje;
})()

export default mje

