
import MenuResp from "./modulos/MenuSuperior"
import Modal from "./modulos/Modal"
//import Boton from "./modulos/Boton"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import SidebarDesplegable from "./modulos/SidebarDesplegable"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import TemplateForm from "./modulos/Template-form"
import SidebarBarra from "./modulos/Sidebar-barra"
import SidebarLateral from "./modulos/Sidebar-lateral"
import MenuColapso from "./modulos/Menu-colapso"



(function(){
   // Boton.iniciar()
    Waves.iniciar()
    BotonFlotante.iniciar()
    TemplateForm.iniciar()
    MenuColapso.iniciar()


    var MenuSuperior = ()=> MenuResp.iniciar()
    var SidebarFijaInit = () => SidebarDesplegable.iniciar()


    var SidebarInit = () => {
        SidebarBarra.iniciar()
        SidebarLateral.iniciar()
    }


    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit()
        ModalInit()
        DropDownInit({})
        SidebarFijaInit()
    }

    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var BS = {
        MenuSuperior: () => MenuSuperior(),
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        SidebarFijaInit: ()=> SidebarFijaInit(),
        AutoInit: () => AutoInit(),
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),
        SidebarInit: () => SidebarInit()
    }

    window.BS = BS
})()

export default BS;