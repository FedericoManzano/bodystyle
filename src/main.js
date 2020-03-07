
import MenuResp from "./modulos/MenuSuperior"
import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import SidebarBarra from "./modulos/Sidebar-barra"
import SidebarLateral from "./modulos/Sidebar-lateral"
import SidebarFija from "./modulos/SidebarFija"
import MenuColapso from "./modulos/Menu-colapso"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"
import Imagenes from "./modulos/Imagenes"
import Range from "./modulos/Range"
import Slider from "./modulos/Slider"
import Lista from "./modulos/Lista"
import Descripcion from "./modulos/Descripcion"
import Paralax from "./modulos/Paralax"
import InputFile from "./modulos/InputFile"
import Boton from "./modulos/Boton"
import BotonInicio from "./modulos/BotonInicio"

(function(){
    Waves.iniciar()
    MenuColapso.iniciar()
    ToolTips.iniciar()
    Range.iniciar()
    Descripcion.iniciar()
    InputFile.iniciar()
    Boton.iniciar()
    

    var focusInput = () => {
        $(".input-icon input").focus(function() {
            $(this).parent().css("border", "1px solid rgba(135, 217, 255)")
            $(this).parent().children(".elemento").css("color", "#212121")
        })

        $(".input-icon input").blur(function() {
            $(this).parent().css("border", "1px solid rgb(163, 163, 163)")
            if($(this).val() === "")
                $(this).parent().children(".elemento").css("color", "rgb(131, 131, 131)")
            else 
                $(this).parent().children(".elemento").css("color", "#212121")
        })



    }
    var MenuSuperior = (config)=> MenuResp.iniciar(config)


    /**
     * Sidebar fija 
     */
    var SidebarFijaInit = () => SidebarFija.iniciar()
    var ParalaxInit = () => Paralax.iniciar()

    /**
     * Sidebar movil 
     */
    var SidebarInit = () => {
        SidebarBarra.iniciar()
        SidebarLateral.iniciar()
    }

    var ListaInit = () => {
        Lista.iniciar()
    }


    var BotonFlotanteInit = (config) => {
        BotonFlotante.iniciar(config)
    }

    /**
     * 
     * ScrollSpy 
     */
    var ScrollSpyInit = (config) => ScrollSpy.iniciar(config)



    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var ImagenesInit = ()=> {
        Imagenes.iniciar()
    }


    var BotonInicioInit = () => {
        BotonInicio.iniciar()
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit() // Sidebar Movil
        ModalInit()
        DropDownInit({})
        SidebarFijaInit() // Sidebar fija
        ScrollSpyInit()
        BotonFlotanteInit()
        ImagenesInit()
        Deshabilitar()
        focusInput()
        SliderInit()
        ListaInit()
        ParalaxInit()
    }


    var desactivar = (clase) => {
        $(clase).removeAttr("href")
        $(clase).removeAttr("onclick")
        $(clase).attr("readonly","readonly")
        $(clase).attr("readonly","readonly")
        $(clase).click(function(e){
            e.preventDefault()
            return
        })
        $(clase).on("hover" , function(e){e.preventDefault(); return})
        $(clase).on("onblur",()=>{e.preventDefault(); return})
        $(clase).on("onchange",()=>{e.preventDefault(); return})
        $(clase).on("onfocus",()=>{e.preventDefault(); return})
        $(clase).on("onreset",()=>{e.preventDefault(); return})
        $(clase).on("onselect",()=>{e.preventDefault(); return})
        $(clase).on("onsubmit",()=>{e.preventDefault(); return})
        $(clase).on("onkeydown",()=>{e.preventDefault(); return})
        $(clase).on("onkeypress",()=>{e.preventDefault(); return})
        $(clase).on("onkeyup",()=>{e.preventDefault(); return})
        $(clase).on("onclick",()=>{e.preventDefault(); return})
        $(clase).on("ondblclick",()=>{e.preventDefault(); return})
        $(clase).on("onmousedown",()=>{e.preventDefault(); return})
        $(clase).on("onmousemove",()=>{e.preventDefault(); return})
        $(clase).on("onmouseout",()=>{e.preventDefault(); return})
        $(clase).on("onmouseover",()=>{e.preventDefault(); return})
        $(clase).on("onmouseup",()=>{e.preventDefault(); return})
    }

    var SliderInit = (config) => {
        Slider.iniciar(config)
    }

    var Deshabilitar = () => {
        desactivar(".deshabilitado")
        desactivar(".input-cargando")
        desactivar(".input-cargando input")
        desactivar(".b-rojo-cargando")
        desactivar(".b-verde-cargando")
        desactivar(".b-azul-cargando")
        desactivar(".b-gris-cargando")
        desactivar(".b-negro-cargando")
        desactivar(".b-blanco-cargando")
    }
    
    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var BS = {
        MenuSuperior: (config) => MenuSuperior(config),
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        SidebarFijaInit: ()=> SidebarFijaInit() , //Sidebar fija
        AutoInit: () => AutoInit(),
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),
        SidebarInit: () => SidebarInit(), /// Sidebar movil
        ScrollSpyInit: (config) => ScrollSpyInit(config),
        BotonFlotanteInit: (config)=> BotonFlotanteInit(config),
        ImagenesInit: () => ImagenesInit(),
        Deshabilitar: () => Deshabilitar(),
        FocusInput: () => focusInput(),
        SliderInit: (config) => SliderInit(config),
        ListaInit: () => ListaInit(),
        ParalaxInit: () => ParalaxInit(),
        BotonInicioInit: () => BotonInicioInit()
    }

    window.BS = BS
})()

export default BS;