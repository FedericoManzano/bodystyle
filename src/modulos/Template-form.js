(function() {
    var contenido = ()=> {
       $(".template input").blur(function(){
            var cont = $($(this)).val();
            if(cont !== ""){
                $(this).siblings("label").addClass("active")
            }else {
                $(this).siblings("label").removeClass("active")
            }
       });
       
    }

    var TamplateForm = {
        iniciar: function(){
            contenido();
        }
    }

    window.TamplateForm = TamplateForm;

})();

export default TamplateForm;