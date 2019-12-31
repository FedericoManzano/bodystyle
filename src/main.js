

import MenuResp from "./modulos/MenuSuperior"
import Sidebar from "./modulos/Sidebar"



//Sidebar.inicializar();


(function(){
    
    var MenuSuperior = ()=> {
        MenuResp.iniciar()
    }

    var SidebarInit = () => {
        Sidebar.inicializar()
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit()
    }

    var BS = {
        MenuSuperior: () => MenuSuperior(),
        SidebarInit: () => SidebarInit(),
        AutoInit: () => AutoInit()
    }

    window.BS = BS
})()