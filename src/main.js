
import MenuResp from "./modulos/MenuSuperior"
import Sidebar from "./modulos/Sidebar"
import Modal from "./modulos/Modal"
import Boton from "./modulos/Boton"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import SidebarDesplegable from "./modulos/SidebarDesplegable"


(function(){
    Boton.iniciar()
    Waves.iniciar()
    SidebarDesplegable.iniciar()
    var MenuSuperior = ()=> MenuResp.iniciar()

    var SidebarInit = () => Sidebar.inicializar()

    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit()
        ModalInit()
        DropDownInit({})
    }

    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var BS = {
        MenuSuperior: () => MenuSuperior(),
        SidebarInit: () => SidebarInit(),
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        AutoInit: () => AutoInit()
    }

    window.BS = BS
})()

export default BS;