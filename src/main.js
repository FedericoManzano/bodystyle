
import MenuResp from "./modulos/MenuSuperior"
import Sidebar from "./modulos/Sidebar"
import Modal from "./modulos/Modal"


(function(){
    
    var MenuSuperior = ()=> MenuResp.iniciar()

    var SidebarInit = () => Sidebar.inicializar()

    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit()
        ModalInit()
    }

    var BS = {
        MenuSuperior: () => MenuSuperior(),
        SidebarInit: () => SidebarInit(),
        AutoInit: () => AutoInit(),
        ModalInit: (config) => ModalInit(config)
    }

    window.BS = BS
})()

export default BS;