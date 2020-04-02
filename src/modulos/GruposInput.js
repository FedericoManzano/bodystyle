import DropDown from "./Dropdown"

(function(){

    var inicializar = () => {
        $(".input-g .grupo .dropdown-toggle").append("<span class='f-abajo-grupo'></span>")
        $(".input-g .grupo .dropdown-toggle").each(function(index){
            if( 
                $.trim($(this).text()) !== "" && 
                $.trim($(this).text()) !== undefined 
            ) {
                $(this).addClass("a-ajuste-btn" )
                $(this).addClass("combo-box")
            }
        })
        $(".combo-box").each(function(){
            var idDrop = $($(this)).data("target")
        
            $(idDrop).children().children().children().click(function(){
        
                $(this).parent().parent().parent().parent(".combo-box").children(".c-drop-grupo").text($(this).text())
            })
        })
        
    }

    

    var GruposInput = {
        iniciar: ()=> {
            inicializar()
            
        }
    }

    window.GruposInput = GruposInput
})()

export default GruposInput