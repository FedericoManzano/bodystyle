
import MenuResp from "./modulos/MenuSuperior"
import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import TemplateForm from "./modulos/Template-form"
import SidebarBarra from "./modulos/Sidebar-barra"
import SidebarLateral from "./modulos/Sidebar-lateral"
import SidebarFija from "./modulos/SidebarFija"
import MenuColapso from "./modulos/Menu-colapso"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"



(function(){
    Waves.iniciar()
    BotonFlotante.iniciar()
    TemplateForm.iniciar()
    MenuColapso.iniciar()
    ToolTips.iniciar()




    var MenuSuperior = ()=> MenuResp.iniciar()


    /**
     * Sidebar fija 
     */
    var SidebarFijaInit = () => SidebarFija.iniciar()


    /**
     * Sidebar movil 
     */
    var SidebarInit = () => {
        SidebarBarra.iniciar()
        SidebarLateral.iniciar()
    }


    /**
     * 
     * ScrollSpy 
     */
    var ScrollSpyInit = (config) => ScrollSpy.iniciar(config)



    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit() // Sidebar Movil
        ModalInit()
        DropDownInit({})
        SidebarFijaInit() // Sidebar fija
        ScrollSpyInit()
    }

    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var BS = {
        MenuSuperior: () => MenuSuperior(),
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        SidebarFijaInit: ()=> SidebarFijaInit() , //Sidebar fija
        AutoInit: () => AutoInit(),
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),
        SidebarInit: () => SidebarInit(), /// Sidebar movil
        ScrollSpyInit: (config) => ScrollSpyInit(config)
    }

    window.BS = BS
})()

export default BS;