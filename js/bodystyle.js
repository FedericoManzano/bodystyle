/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_MenuSuperior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/MenuSuperior */ \"./src/modulos/MenuSuperior.js\");\n/* harmony import */ var _modulos_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/Modal */ \"./src/modulos/Modal.js\");\n/* harmony import */ var _modulos_Waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/Waves */ \"./src/modulos/Waves.js\");\n/* harmony import */ var _modulos_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/Dropdown */ \"./src/modulos/Dropdown.js\");\n/* harmony import */ var _modulos_BotonFlotante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/BotonFlotante */ \"./src/modulos/BotonFlotante.js\");\n/* harmony import */ var _modulos_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/Toast */ \"./src/modulos/Toast.js\");\n/* harmony import */ var _modulos_Sidebar_barra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/Sidebar-barra */ \"./src/modulos/Sidebar-barra.js\");\n/* harmony import */ var _modulos_Sidebar_lateral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/Sidebar-lateral */ \"./src/modulos/Sidebar-lateral.js\");\n/* harmony import */ var _modulos_SidebarFija__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/SidebarFija */ \"./src/modulos/SidebarFija.js\");\n/* harmony import */ var _modulos_Menu_colapso__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/Menu-colapso */ \"./src/modulos/Menu-colapso.js\");\n/* harmony import */ var _modulos_ScrollSpy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulos/ScrollSpy */ \"./src/modulos/ScrollSpy.js\");\n/* harmony import */ var _modulos_ToolTips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulos/ToolTips */ \"./src/modulos/ToolTips.js\");\n/* harmony import */ var _modulos_Imagenes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modulos/Imagenes */ \"./src/modulos/Imagenes.js\");\n/* harmony import */ var _modulos_Range__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modulos/Range */ \"./src/modulos/Range.js\");\n/* harmony import */ var _modulos_Slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modulos/Slider */ \"./src/modulos/Slider.js\");\n/* harmony import */ var _modulos_Lista__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modulos/Lista */ \"./src/modulos/Lista.js\");\n/* harmony import */ var _modulos_Descripcion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modulos/Descripcion */ \"./src/modulos/Descripcion.js\");\n/* harmony import */ var _modulos_Paralax__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modulos/Paralax */ \"./src/modulos/Paralax.js\");\n/* harmony import */ var _modulos_InputFile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modulos/InputFile */ \"./src/modulos/InputFile.js\");\n/* harmony import */ var _modulos_BotonInicio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modulos/BotonInicio */ \"./src/modulos/BotonInicio.js\");\n/* harmony import */ var _modulos_Alerta__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modulos/Alerta */ \"./src/modulos/Alerta.js\");\n/* harmony import */ var _modulos_Template__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modulos/Template */ \"./src/modulos/Template.js\");\n/* harmony import */ var _modulos_Tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modulos/Tabs */ \"./src/modulos/Tabs.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function () {\n  _modulos_Waves__WEBPACK_IMPORTED_MODULE_2__[\"default\"].iniciar();\n  _modulos_Menu_colapso__WEBPACK_IMPORTED_MODULE_9__[\"default\"].iniciar();\n  _modulos_ToolTips__WEBPACK_IMPORTED_MODULE_11__[\"default\"].iniciar();\n  _modulos_Range__WEBPACK_IMPORTED_MODULE_13__[\"default\"].iniciar();\n  _modulos_Descripcion__WEBPACK_IMPORTED_MODULE_16__[\"default\"].iniciar();\n  _modulos_InputFile__WEBPACK_IMPORTED_MODULE_18__[\"default\"].iniciar();\n  _modulos_Alerta__WEBPACK_IMPORTED_MODULE_20__[\"default\"].iniciar();\n  _modulos_Template__WEBPACK_IMPORTED_MODULE_21__[\"default\"].iniciar();\n\n  var focusInput = function focusInput() {\n    $(\".input-icon input\").focus(function () {\n      $(this).parent().css(\"border\", \"1px solid rgba(135, 217, 255)\");\n      $(this).parent().children(\".elemento\").css(\"color\", \"#212121\");\n    });\n    $(\".input-icon input\").blur(function () {\n      $(this).parent().css(\"border\", \"1px solid rgb(163, 163, 163)\");\n      if ($(this).val() === \"\") $(this).parent().children(\".elemento\").css(\"color\", \"rgb(131, 131, 131)\");else $(this).parent().children(\".elemento\").css(\"color\", \"#212121\");\n    });\n  };\n\n  var _MenuSuperior = function MenuSuperior(config) {\n    return _modulos_MenuSuperior__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iniciar(config);\n  };\n  /**\n   * Sidebar fija \n   */\n\n\n  var _SidebarFijaInit = function SidebarFijaInit() {\n    return _modulos_SidebarFija__WEBPACK_IMPORTED_MODULE_8__[\"default\"].iniciar();\n  };\n\n  var _ParalaxInit = function ParalaxInit() {\n    return _modulos_Paralax__WEBPACK_IMPORTED_MODULE_17__[\"default\"].iniciar();\n  };\n  /**\n   * Sidebar movil \n   */\n\n\n  var _SidebarInit = function SidebarInit() {\n    _modulos_Sidebar_barra__WEBPACK_IMPORTED_MODULE_6__[\"default\"].iniciar();\n    _modulos_Sidebar_lateral__WEBPACK_IMPORTED_MODULE_7__[\"default\"].iniciar();\n  };\n\n  var _ListaInit = function ListaInit() {\n    _modulos_Lista__WEBPACK_IMPORTED_MODULE_15__[\"default\"].iniciar();\n  };\n\n  var _BotonFlotanteInit = function BotonFlotanteInit(config) {\n    _modulos_BotonFlotante__WEBPACK_IMPORTED_MODULE_4__[\"default\"].iniciar(config);\n  };\n  /**\n   * \n   * ScrollSpy \n   */\n\n\n  var _ScrollSpyInit = function ScrollSpyInit(config) {\n    return _modulos_ScrollSpy__WEBPACK_IMPORTED_MODULE_10__[\"default\"].iniciar(config);\n  };\n\n  var _ModalInit = function ModalInit(conf) {\n    _modulos_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].iniciar(conf);\n  };\n\n  var _ImagenesInit = function ImagenesInit() {\n    _modulos_Imagenes__WEBPACK_IMPORTED_MODULE_12__[\"default\"].iniciar();\n  };\n\n  var _BotonInicioInit = function BotonInicioInit() {\n    _modulos_BotonInicio__WEBPACK_IMPORTED_MODULE_19__[\"default\"].iniciar();\n  };\n\n  var _TabInit = function TabInit() {\n    return new _modulos_Tabs__WEBPACK_IMPORTED_MODULE_22__[\"default\"]();\n  };\n\n  var _AutoInit = function AutoInit() {\n    _MenuSuperior();\n\n    _SidebarInit(); // Sidebar Movil\n\n\n    _ModalInit();\n\n    _DropDownInit({});\n\n    _SidebarFijaInit(); // Sidebar fija\n\n\n    _ScrollSpyInit();\n\n    _BotonFlotanteInit();\n\n    _ImagenesInit();\n\n    _Deshabilitar();\n\n    focusInput();\n\n    _SliderInit();\n\n    _ListaInit();\n\n    _ParalaxInit();\n  };\n\n  var desactivar = function desactivar(clase) {\n    $(clase).removeAttr(\"href\");\n    $(clase).removeAttr(\"onclick\");\n    $(clase).attr(\"readonly\", \"readonly\");\n    $(clase).attr(\"readonly\", \"readonly\");\n    $(clase).click(function (e) {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"hover\", function (e) {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onblur\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onchange\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onfocus\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onreset\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onselect\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onsubmit\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onkeydown\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onkeypress\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onkeyup\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onclick\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"ondblclick\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onmousedown\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onmousemove\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onmouseout\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onmouseover\", function () {\n      e.preventDefault();\n      return;\n    });\n    $(clase).on(\"onmouseup\", function () {\n      e.preventDefault();\n      return;\n    });\n  };\n\n  var _SliderInit = function SliderInit(config) {\n    _modulos_Slider__WEBPACK_IMPORTED_MODULE_14__[\"default\"].iniciar(config);\n  };\n\n  var _Deshabilitar = function Deshabilitar() {\n    desactivar(\".deshabilitado\");\n    desactivar(\".input-cargando\");\n    desactivar(\".input-cargando input\");\n    desactivar(\".b-rojo-cargando\");\n    desactivar(\".b-verde-cargando\");\n    desactivar(\".b-azul-cargando\");\n    desactivar(\".b-gris-cargando\");\n    desactivar(\".b-negro-cargando\");\n    desactivar(\".b-blanco-cargando\");\n  };\n\n  var _DropDownInit = function DropDownInit(config) {\n    _modulos_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"].iniciar(config);\n  };\n\n  var BS = {\n    MenuSuperior: function MenuSuperior(config) {\n      return _MenuSuperior(config);\n    },\n    ModalInit: function ModalInit(config) {\n      return _ModalInit(config);\n    },\n    DropDownInit: function DropDownInit(config) {\n      return _DropDownInit(config);\n    },\n    SidebarFijaInit: function SidebarFijaInit() {\n      return _SidebarFijaInit();\n    },\n    //Sidebar fija\n    AutoInit: function AutoInit() {\n      return _AutoInit();\n    },\n    Toast: function Toast(html, clases, tiempo) {\n      return _modulos_Toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ejecutar(html, clases, tiempo);\n    },\n    SidebarInit: function SidebarInit() {\n      return _SidebarInit();\n    },\n    /// Sidebar movil\n    ScrollSpyInit: function ScrollSpyInit(config) {\n      return _ScrollSpyInit(config);\n    },\n    BotonFlotanteInit: function BotonFlotanteInit(config) {\n      return _BotonFlotanteInit(config);\n    },\n    ImagenesInit: function ImagenesInit() {\n      return _ImagenesInit();\n    },\n    Deshabilitar: function Deshabilitar() {\n      return _Deshabilitar();\n    },\n    FocusInput: function FocusInput() {\n      return focusInput();\n    },\n    SliderInit: function SliderInit(config) {\n      return _SliderInit(config);\n    },\n    ListaInit: function ListaInit() {\n      return _ListaInit();\n    },\n    ParalaxInit: function ParalaxInit() {\n      return _ParalaxInit();\n    },\n    BotonInicioInit: function BotonInicioInit() {\n      return _BotonInicioInit();\n    },\n    TabInit: function TabInit() {\n      return _TabInit();\n    }\n  };\n  window.BS = BS;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BS);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/modulos/Alerta.js":
/*!*******************************!*\
  !*** ./src/modulos/Alerta.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var cerrar = function cerrar() {\n    $(\".alerta-cerrar\").click(function () {\n      $(this).hide(300);\n    });\n  };\n\n  var Alerta = {\n    iniciar: function iniciar() {\n      cerrar();\n    }\n  };\n  window.Alerta = Alerta;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alerta);\n\n//# sourceURL=webpack:///./src/modulos/Alerta.js?");

/***/ }),

/***/ "./src/modulos/BotonFlotante.js":
/*!**************************************!*\
  !*** ./src/modulos/BotonFlotante.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var presionado = 0;\n  var c = {};\n\n  var _iniciar = function iniciar() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      colorMenu: \"fd-rojo\",\n      alineacion: \"vertical\",\n      altura: 200\n    },\n        colorMenu = _ref.colorMenu,\n        alineacion = _ref.alineacion,\n        altura = _ref.altura;\n\n    switch (alineacion) {\n      case \"horizontal\":\n        $(\".btn-flotante\").css({\n          transform: \"rotate(-90deg)\",\n          right: 120,\n          top: altura\n        });\n        $(\".boton-menu\").css(\"transform\", \"rotate(90deg)\");\n        $(\".boton-opciones\").css(\"transform\", \"rotate(90deg)\");\n        break;\n\n      case \"horizontalExpandido\":\n        $(\".btn-flotante\").css({\n          transform: \"rotate(-90deg)\",\n          right: 120,\n          top: altura\n        });\n        $(\".boton-menu\").css(\"transform\", \"rotate(90deg)\");\n        $(\".boton-opciones\").css(\"transform\", \"rotate(180deg)\");\n        $(\".submenu\").css(\"transform\", \"rotate(-90deg)\");\n        break;\n\n      case \"verticalExpandido\":\n        $(\".btn-flotante\").css({\n          right: 30,\n          top: altura\n        });\n        $(\".boton-opciones\").css(\"transform\", \"rotate(90deg)\");\n        $(\".submenu\").css(\"transform\", \"rotate(-90deg)\");\n        break;\n\n      case \"vertical\":\n        $(\".btn-flotante\").css({\n          right: 30,\n          top: altura\n        });\n        break;\n    }\n\n    $(\".btn-flotante .submenu\").hide();\n  };\n\n  var eventoClic = function eventoClic() {\n    $(\".btn-flotante .boton-menu\").click(function () {\n      if (presionado === 0) {\n        $(\".btn-flotante .submenu\").slideDown(300);\n        presionado = 1;\n      } else {\n        $(\".btn-flotante .submenu\").slideUp(300);\n        presionado = 0;\n      }\n    });\n  };\n\n  var BotonFlotante = {\n    iniciar: function iniciar(config) {\n      _iniciar(config);\n\n      eventoClic();\n    }\n  };\n  window.BotonFlotante = BotonFlotante;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BotonFlotante);\n\n//# sourceURL=webpack:///./src/modulos/BotonFlotante.js?");

/***/ }),

/***/ "./src/modulos/BotonInicio.js":
/*!************************************!*\
  !*** ./src/modulos/BotonInicio.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var boton = null;\n\n  var inicializar = function inicializar() {\n    boton = $(\"<div class='boton-inicio'></div>\");\n    $(boton).hide();\n    $(\"body\").append(boton);\n  };\n\n  var scroll = function scroll() {\n    $(window).scroll(function () {\n      if ($(this).scrollTop() > 100) {\n        $(boton).show();\n      } else {\n        $(boton).hide();\n      }\n    });\n  };\n\n  var activar = function activar() {\n    $(boton).click(function () {\n      $(window).scrollTop(0);\n    });\n  };\n\n  var BotonInicio = {\n    iniciar: function iniciar() {\n      inicializar();\n      scroll();\n      activar();\n    }\n  };\n  window.BotonInicio = BotonInicio;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BotonInicio);\n\n//# sourceURL=webpack:///./src/modulos/BotonInicio.js?");

/***/ }),

/***/ "./src/modulos/Descripcion.js":
/*!************************************!*\
  !*** ./src/modulos/Descripcion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var descripcionElemento = null;\n\n  var hover = function hover() {\n    $(\".descripcion\").hover(function (e) {\n      var info = $($(this)).data(\"info\");\n      var posicion = $($(this)).data(\"posicion\");\n      var cabecera = $($(this)).data(\"cabecera\");\n      descripcionElemento = $(\"<div class='descripcion-contenido'></div>\");\n      var cabeceraCont = $(\"<div class='descripcion-cabecera'></div>\");\n      var cuerpo = $(\"<div class='descripcion-cuerpo'></div>\");\n      $(cabeceraCont).append(cabecera);\n      $(cuerpo).append(info);\n      $(descripcionElemento).append(cabeceraCont);\n      $(descripcionElemento).append(cuerpo);\n      $(this).append(descripcionElemento);\n      var mueca = $(\"<div class='mueca'></div>\");\n\n      switch (posicion) {\n        case \"top\":\n          if ($(descripcionElemento).offset().top - $(window).scrollTop() > $(descripcionElemento).height()) {\n            $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n            $(mueca).css(\"bottom\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          } else {\n            $(descripcionElemento).css(\"top\", \"calc(100% + 15px)\");\n            $(mueca).css(\"top\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          }\n\n          break;\n\n        case \"bottom\":\n          if ($(window).height() - $(window).scrollTop() > $(descripcionElemento).height()) {\n            $(descripcionElemento).css(\"top\", \"calc(100% + 15px)\");\n            $(mueca).css(\"top\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          } else {\n            $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n            $(mueca).css(\"bottom\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          }\n\n          break;\n\n        case \"left\":\n          var offsetDerecha = $(window).width() - $(descripcionElemento).offset().left - $(descripcionElemento).width();\n\n          if ($(descripcionElemento).offset().left > $(descripcionElemento).width()) {\n            if ($(descripcionElemento).offset().top > $(descripcionElemento).height() / 2) {\n              $(descripcionElemento).css(\"right\", \"calc(100% + 15px)\");\n              $(mueca).css(\"right\", -7);\n              $(mueca).css(\"top\", \"calc(50% - 7.5px)\");\n            } else if ($(descripcionElemento).offset().top - $(descripcionElemento).scrollTop() > $(descripcionElemento).height() / 2) {\n              $(descripcionElemento).css(\"top\", \"calc(100% + 15px)\");\n              $(mueca).css(\"top\", -7);\n              $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n            } else {\n              $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n              $(mueca).css(\"bottom\", -7);\n              $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n            }\n          } else if (offsetDerecha > $(descripcionElemento).width()) {\n            $(descripcionElemento).css(\"left\", \"calc(100% + 15px)\");\n            $(mueca).css(\"left\", -7);\n            $(mueca).css(\"top\", \"calc(50% - 7.5px)\");\n          } else if ($(descripcionElemento).offset().top > $(descripcionElemento).height()) {\n            $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n            $(mueca).css(\"bottom\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          } else {\n            $(descripcionElemento).css(\"top\", \"calc(100% + 15px)\");\n            $(mueca).css(\"top\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          }\n\n          break;\n\n        case \"right\":\n          var offsetDerecha = $(window).width() - $(descripcionElemento).offset().left - $(descripcionElemento).width();\n\n          if (offsetDerecha > $(descripcionElemento).width()) {\n            if ($(descripcionElemento).offset().top - $(descripcionElemento).scrollTop() > $(descripcionElemento).height() / 2) {\n              $(descripcionElemento).css(\"left\", \"calc(100% + 15px)\");\n              $(mueca).css(\"left\", -7);\n              $(mueca).css(\"top\", \"calc(50% - 7.5px)\");\n            } else {\n              $(descripcionElemento).css(\"top\", \"calc(100% + 15px)\");\n              $(mueca).css(\"top\", -7);\n              $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n            }\n          } else if ($(descripcionElemento).offset().left > $(descripcionElemento).width()) {\n            $(descripcionElemento).css(\"right\", \"calc(100% + 15px)\");\n            $(mueca).css(\"right\", -7);\n            $(mueca).css(\"top\", \"calc(50% - 7.5px)\");\n          } else if ($(descripcionElemento).offset().top > $(descripcionElemento).height()) {\n            $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n            $(mueca).css(\"bottom\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          } else {\n            $(descripcionElemento).css(\"bottom\", \"calc(100% + 15px)\");\n            $(mueca).css(\"bottom\", -7);\n            $(mueca).css(\"left\", \"calc(50% - 7.5px)\");\n          }\n\n          break;\n      }\n\n      $(cabeceraCont).before(mueca);\n    }, function () {\n      descripcionElemento.remove();\n    });\n  };\n\n  var Descripcion = {\n    iniciar: function iniciar() {\n      return hover();\n    }\n  };\n  window.Descripcion = Descripcion;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Descripcion);\n\n//# sourceURL=webpack:///./src/modulos/Descripcion.js?");

/***/ }),

/***/ "./src/modulos/Dropdown.js":
/*!*********************************!*\
  !*** ./src/modulos/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var presionado = 0;\n\n  var configurarDropDown = function configurarDropDown() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      color: \"#fff\"\n    },\n        color = _ref.color;\n\n    $(\".dropdown ul li a\").addClass(\"dd-a\");\n    $(\".dropdown-toggle\").append(\"<span class='f-abajo'></span>\");\n    $(\".dropdown-toggle\").append(\"<span class='f-derecha'></span>\");\n    $(\".dropdown-toggle\").children(\".f-abajo\").css({\n      borderTop: \"solid 5px \" + color,\n      borderRight: \"solid 5px transparent\",\n      borderLeft: \"solid 5px transparent\"\n    });\n    $(\".dropdown-toggle\").children(\".f-derecha\").css({\n      borderTop: \"solid 5px transparent\",\n      borderBotton: \"solid 5px transparent\",\n      borderLeft: \"solid 5px \" + color\n    });\n    $(\".dropdown-toggle .f-abajo\").hide();\n    $(\"body\").append(\"<div class='drop'></div>\");\n    $(\".drop\").hide();\n  };\n\n  var dropDown = function dropDown() {\n    $(\".dropdown-toggle\").click(function () {\n      var boton = $(this);\n      var dropdown = $($(this).data(\"target\"));\n\n      if (presionado === 0 || presionado === undefined) {\n        dropdown.fadeIn(300).appendTo(boton);\n        boton.children(\".f-derecha\").hide();\n        boton.children(\".f-abajo\").show();\n        $(\".drop\").show();\n        presionado = 1;\n      } else {\n        dropdown.fadeOut(300);\n        boton.remove(dropdown);\n        boton.children(\".f-derecha\").show();\n        boton.children(\".f-abajo\").hide();\n        $(\".drop\").hide();\n        presionado = 0;\n      }\n\n      $(\".drop\").click(function () {\n        dropdown.fadeOut(300);\n        boton.remove(dropdown);\n        boton.children(\".f-derecha\").show();\n        boton.children(\".f-abajo\").hide();\n        $(\".drop\").hide();\n        presionado = 0;\n      });\n    });\n  };\n\n  var DropDown = {\n    iniciar: function iniciar(config) {\n      configurarDropDown(config);\n      dropDown();\n    }\n  };\n  window.DropDown = DropDown;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\n\n//# sourceURL=webpack:///./src/modulos/Dropdown.js?");

/***/ }),

/***/ "./src/modulos/Imagenes.js":
/*!*********************************!*\
  !*** ./src/modulos/Imagenes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    $(\".img-exp\").click(function () {\n      $(\"html\").append(\"<div class='contenedor-imagen'></div>\");\n      var ruta = $(this).attr(\"src\");\n      $(\".contenedor-imagen\").append(\"<img src= \".concat(ruta.toString(), \"></img>\"));\n      $(\".contenedor-imagen\").animate({\n        opacity: 1\n      }, 500);\n      $(\".contenedor-imagen\").click(function () {\n        $(\".contenedor-imagen\").fadeOut(300);\n      });\n    });\n  };\n\n  var cerrar = function cerrar() {\n    $(\"body\").bind('keydown', function (e) {\n      if (e.which == 27) {\n        $(\".contenedor-imagen\").hide();\n      }\n\n      ;\n    });\n    $(window).bind('mousewheel', function (e) {\n      $(\".contenedor-imagen\").hide();\n    });\n  };\n\n  var Imagenes = {\n    iniciar: function iniciar() {\n      inicializar();\n      cerrar();\n    }\n  };\n  window.Imagenes = Imagenes;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Imagenes);\n\n//# sourceURL=webpack:///./src/modulos/Imagenes.js?");

/***/ }),

/***/ "./src/modulos/InputFile.js":
/*!**********************************!*\
  !*** ./src/modulos/InputFile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    var elemento = $(\"<span class='archivo-seleccionado'>Seleccionar un archivo ...</span>\");\n    $(\".f-label\").append(elemento);\n  };\n\n  var archivoSeleccionado = function archivoSeleccionado() {\n    $(\".input-file\").change(function () {\n      var texto = $(this).val();\n\n      if (texto === \"\") {\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").text(\"Seleccionar un archivo ...\");\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").css(\"color\", \"rgb(56, 56, 56)\");\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").css(\"border-bottom\", \"1px solid rgb(136, 136, 136)\");\n      } else {\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").text(texto);\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").css(\"color\", \"rgb(22, 112, 60)\");\n        $(this).siblings(\".f-label\").children(\".archivo-seleccionado\").css(\"border-bottom\", \"1px solid rgb(22, 112, 60)\");\n      }\n    });\n  };\n\n  var InputFile = {\n    iniciar: function iniciar() {\n      inicializar();\n      archivoSeleccionado();\n    }\n  };\n  window.InputFile = InputFile;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputFile);\n\n//# sourceURL=webpack:///./src/modulos/InputFile.js?");

/***/ }),

/***/ "./src/modulos/Lista.js":
/*!******************************!*\
  !*** ./src/modulos/Lista.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    $(\".l-colapso > .lista-item\").append(\"<i class='f-derecha'></i>\");\n    $(\".l-colapso > .lista-item\").append(\"<i class='f-abajo'></i>\");\n    $(\".l-colapso > .lista-item .f-derecha\").css(\"top\", 13);\n    $(\".l-colapso > .lista-item .f-abajo\").css(\"top\", 13);\n    $(\".l-colapso > .lista-item .f-derecha\").css(\"border-left\", \"5px solid #000\");\n    $(\".l-colapso > .lista-item .f-abajo\").css(\"border-top\", \"5px solid #000\");\n    $(\".l-colapso > .lista-item .f-abajo\").hide();\n    $(\".l-colapso > .desplegable\").hide();\n  };\n\n  var desplegable = function desplegable() {\n    $(\".l-colapso .lista-item\").click(function () {\n      var desplegable = $($(this).data(\"target\"));\n\n      if ($(desplegable).is(\":visible\")) {\n        $(this).children(\".f-abajo\").hide();\n        $(this).children(\".f-derecha\").show();\n        $(desplegable).slideUp(300);\n      } else {\n        $(this).children(\".f-derecha\").hide();\n        $(this).children(\".f-abajo\").show();\n        $(desplegable).slideDown(300);\n      }\n    });\n  };\n\n  var activo = function activo() {\n    $(\".activo .lista-item\").click(function () {\n      $(\".activo .lista-item\").css(\"background-color\", \"rgb(255, 255, 255)\");\n      $(this).css(\"background-color\", \"rgb(240, 240, 240)\");\n    });\n  };\n\n  var Lista = {\n    iniciar: function iniciar() {\n      inicializar();\n      desplegable();\n      activo();\n    }\n  };\n  window.Lista = Lista;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lista);\n\n//# sourceURL=webpack:///./src/modulos/Lista.js?");

/***/ }),

/***/ "./src/modulos/Menu-colapso.js":
/*!*************************************!*\
  !*** ./src/modulos/Menu-colapso.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var visible = false;\n\n  var cargarMenu = function cargarMenu() {\n    $(\".menu-colapso .menu-boton\").append(\"<span></span><span></span><span></span>\");\n    $(\".menu-colapso-contenedor\").hide();\n    $(\".menu-colapso-contenedor\").css(\"opacity\", 1);\n  };\n\n  var correrMenu = function correrMenu() {\n    $(\".menu-colapso .menu-boton\").click(function () {\n      if (!visible) {\n        $(\".menu-colapso-contenedor\").slideDown(300);\n        visible = true;\n      } else {\n        $(\".menu-colapso-contenedor\").slideUp(300);\n        visible = false;\n      }\n    });\n  };\n\n  var MenuColapso = {\n    iniciar: function iniciar() {\n      cargarMenu();\n      correrMenu();\n    }\n  };\n  window.MenuColapso = MenuColapso;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuColapso);\n\n//# sourceURL=webpack:///./src/modulos/Menu-colapso.js?");

/***/ }),

/***/ "./src/modulos/MenuSuperior.js":
/*!*************************************!*\
  !*** ./src/modulos/MenuSuperior.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var estado = 0;\n  var c = \"\";\n\n  var inicializarColapso = function inicializarColapso() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      color: \"fd-azul-c\"\n    },\n        color = _ref.color;\n\n    $(\".colapso\").hide();\n    $(\".colapso\").css(\"opacity\", 1);\n    c = color;\n    aparecerElemento();\n  };\n\n  var aparecerElemento = function aparecerElemento() {\n    var borde = $(\"<div class='borde-seleccionado'></div>\");\n    var men = $(\".selector-colapso:first\");\n    borde.css(\"background-color\", c);\n    men.append(borde);\n    $(men.data(\"target\")).show();\n  };\n\n  var selectorSeleccionado = function selectorSeleccionado() {\n    $(\".selector-colapso\").click(function () {\n      $(\".borde-seleccionado\").remove();\n      var borde = $(\"<div class='borde-seleccionado'></div>\");\n      $(\".colapso\").hide();\n      borde.css({\n        left: \"-100%\",\n        backgroundColor: c\n      }).appendTo($(this)).animate({\n        left: 0\n      }, 300);\n      $($(this).data(\"target\")).slideDown(500);\n    });\n  };\n\n  var cargarComplemento = function cargarComplemento() {\n    $(\"body\").append(\"<div class='complemento'></div>\");\n    $(\".lateral-boton\").append(\"<span></span><span></span><span></span>\");\n    $(\".complemento\").hide();\n  };\n\n  var aparecerMenu = function aparecerMenu() {\n    $(\".lateral-boton\").click(function () {\n      if (estado === 0 || estado === undefined) {\n        var menuLateral = $($(this).data(\"target\"));\n        menuLateral.animate({\n          left: 0\n        }, 500);\n        $(\".complemento\").show();\n        estado = 1;\n      } else {\n        $(\".menu-lateral\").animate({\n          left: -240\n        }, 500);\n        $(\".complemento\").hide();\n        estado = 0;\n      }\n    });\n  };\n\n  var desaparecerMenu = function desaparecerMenu() {\n    $(\".complemento\").click(function () {\n      $(\".menu-lateral\").animate({\n        left: -240\n      }, 500);\n      $(this).hide();\n      estado = 0;\n    });\n  };\n\n  var MenuSuperior = {\n    iniciar: function iniciar(config) {\n      cargarComplemento();\n      aparecerMenu();\n      desaparecerMenu();\n      selectorSeleccionado();\n      inicializarColapso(config);\n    }\n  };\n  window.MenuSuperior = MenuSuperior;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuSuperior);\n\n//# sourceURL=webpack:///./src/modulos/MenuSuperior.js?");

/***/ }),

/***/ "./src/modulos/Modal.js":
/*!******************************!*\
  !*** ./src/modulos/Modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var estadoInicial = function estadoInicial() {\n    $(\".modal-fondo\").css(\"opacity\", 1);\n    $(\".modal-fondo\").append(\"<div class='complemento'></div>\");\n    $(\".modal-fondo\").hide();\n  };\n\n  var aparecerModal = function aparecerModal() {\n    $(\".activar-modal\").click(function () {\n      $($(this).data(\"target\")).fadeIn();\n    });\n  };\n\n  var desaparecerModal = function desaparecerModal() {\n    $(\".complemento\").click(function () {\n      $(\".modal-fondo\").fadeOut(200);\n    });\n  };\n\n  var Modal = {\n    iniciar: function iniciar(conf) {\n      estadoInicial(conf);\n      aparecerModal();\n      desaparecerModal();\n    }\n  };\n  window.Modal = Modal;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/modulos/Modal.js?");

/***/ }),

/***/ "./src/modulos/Paralax.js":
/*!********************************!*\
  !*** ./src/modulos/Paralax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    $(\".paralax-contenedor img\").css(\"opacity\", 0);\n    var cantidad = $(\".paralax-contenedor\").length;\n\n    for (var i = 0; i < cantidad; i++) {\n      var ruta = $(\".paralax-contenedor:nth-child(+ \" + (i + 1) + \")\").children(\".paralax\").attr(\"src\");\n      $(\".paralax-contenedor:nth-child(+ \" + (i + 1) + \")\").css(\"background-image\", \"url(\" + ruta + \")\");\n      $(\".paralax-contenedor:nth-child(+ \" + (i + 1) + \")\").css(\"background-attachment\", \"fixed\");\n    }\n  };\n\n  var Paralax = {\n    iniciar: function iniciar() {\n      return inicializar();\n    }\n  };\n  window.Paralax = Paralax;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paralax);\n\n//# sourceURL=webpack:///./src/modulos/Paralax.js?");

/***/ }),

/***/ "./src/modulos/Range.js":
/*!******************************!*\
  !*** ./src/modulos/Range.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    $(\".input-range input\").on(\"mousemove\", function (e) {\n      var val = $(this).val();\n      $(this).parent().children(\"span\").text(val);\n      var gradiente = \"linear-gradient(90deg, rgb(0, 187, 156) \" + $(this).val() + \"%, rgb(0, 0, 0)\" + $(this).val() + \"%)\";\n      $(this).css(\"background\", gradiente);\n    });\n  };\n\n  var Range = {\n    iniciar: function iniciar() {\n      return inicializar();\n    }\n  };\n  window.Range = Range;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\n\n//# sourceURL=webpack:///./src/modulos/Range.js?");

/***/ }),

/***/ "./src/modulos/ScrollSpy.js":
/*!**********************************!*\
  !*** ./src/modulos/ScrollSpy.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var c = {};\n  var cantidad = $(\".scroll-item\").length;\n  var ids = new Array(cantidad);\n\n  var inicializarIds = function inicializarIds() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      ancho: \"15%\",\n      tamFuente: 18,\n      colorBorde: \"fd-azul-c\",\n      alturaBorde: 30,\n      separacion: 120,\n      colorSeleccionado: \"#000\",\n      colorNoSeleccionado: \"#666\"\n    },\n        ancho = _ref.ancho,\n        tamFuente = _ref.tamFuente,\n        colorBorde = _ref.colorBorde,\n        alturaBorde = _ref.alturaBorde,\n        separacion = _ref.separacion,\n        colorSeleccionado = _ref.colorSeleccionado,\n        colorNoSeleccionado = _ref.colorNoSeleccionado;\n\n    for (var i = 0; i < cantidad; i++) {\n      ids[i] = $(\".scroll-item:nth-child(\" + (i + 1) + \")\").attr(\"id\");\n    }\n\n    c.ancho = ancho;\n    c.tamFuente = tamFuente;\n    c.colorBorde = colorBorde;\n    c.alturaBorde = alturaBorde;\n    c.separacion = separacion;\n    c.colorSeleccionado = colorSeleccionado;\n    c.colorNoSeleccionado = colorNoSeleccionado;\n    $(\".lista-scroll\").css(\"width\", c.ancho);\n    $(\".lista-scroll ul li a\").css(\"font-size\", c.tamFuente);\n    $(\".elemento-seleccionado\").addClass(c.colorBorde);\n    $(\".lista-scroll\").css(\"top\", c.separacion);\n    seleccionarIndice(1);\n  };\n\n  var seleccionarIndice = function seleccionarIndice(indice) {\n    $(\".elemento-seleccionado\").remove();\n    $(\".lista-scroll ul li a\").css(\"color\", c.colorNoSeleccionado);\n    var elem = $(\"<p class='elemento-seleccionado \" + c.colorBorde + \"'></p>\");\n    elem.css(\"height\", c.alturaBorde);\n    $(\".lista-scroll ul li:nth-child(\" + indice + \") a\").before(elem);\n    $(\".lista-scroll ul li:nth-child(\" + indice + \") a\").css(\"color\", c.colorSeleccionado);\n  };\n\n  var inicializar = function inicializar() {\n    $(window).scroll(function (e) {\n      for (var i = 0; i < cantidad; i++) {\n        if ($(this).scrollTop() >= $(\"#\" + ids[i]).offset().top - 200) {\n          seleccionarIndice(i + 1);\n        }\n      }\n    });\n  };\n\n  var seleccionar = function seleccionar() {\n    $(\".lista-scroll ul li\").click(function () {\n      $(\".lista-scroll ul li a\").css(\"color\", c.colorNoSeleccionado);\n      $(\".elemento-seleccionado\").remove();\n      var elem = $(\"<p class='elemento-seleccionado \" + c.colorBorde + \"'></p>\");\n      elem.css(\"height\", c.alturaBorde);\n      $(this).children(\"a\").before(elem);\n      $(this).children(\"a\").css(\"color\", c.colorSeleccionado);\n    });\n  };\n\n  var ScrollSpy = {\n    iniciar: function iniciar(config) {\n      inicializarIds(config);\n      inicializar();\n      seleccionar();\n    }\n  };\n  window.ScrollSpy = ScrollSpy;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollSpy);\n\n//# sourceURL=webpack:///./src/modulos/ScrollSpy.js?");

/***/ }),

/***/ "./src/modulos/Sidebar-barra.js":
/*!**************************************!*\
  !*** ./src/modulos/Sidebar-barra.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var corrido = 0;\n\n  var cargarMenu = function cargarMenu() {\n    $(\".sidebar-barra .sidebar-menu\").append(\"<span></span><span></span><span></span>\");\n  };\n\n  var correrMenu = function correrMenu() {\n    $(\".sidebar-barra .sidebar-menu\").click(function () {\n      if (corrido === 0) {\n        $(\".sidebar-barra\").css({\n          width: \"calc(100% - 240px)\",\n          left: 240\n        });\n        corrido = 1;\n      } else {\n        $(\".sidebar-barra\").css({\n          width: \"100%\",\n          left: 0\n        });\n        corrido = 0;\n      }\n    });\n  };\n\n  var SidebarBarra = {\n    iniciar: function iniciar() {\n      cargarMenu();\n      correrMenu();\n    }\n  };\n  window.SidebarBarra = SidebarBarra;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarBarra);\n\n//# sourceURL=webpack:///./src/modulos/Sidebar-barra.js?");

/***/ }),

/***/ "./src/modulos/Sidebar-lateral.js":
/*!****************************************!*\
  !*** ./src/modulos/Sidebar-lateral.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var visible = 0;\n  var elementos = new Array($(\".sidebar-lateral .titulo\").lenght);\n\n  var inicializarElementos = function inicializarElementos() {\n    for (var i = 0; i < elementos.length; i++) {\n      elementos[i] = false;\n    }\n  };\n\n  var inicializarColumna = function inicializarColumna() {\n    $(\".sidebar-lateral .titulo\").append(\"<i class='f-derecha'></i>\");\n    $(\".sidebar-lateral .titulo\").append(\"<i class='f-abajo'></i>\");\n    $(\".sidebar-lateral .titulo .f-derecha\").css(\"top\", 13);\n    $(\".sidebar-lateral .titulo .f-abajo\").css(\"top\", 13);\n    $(\".sidebar-lateral .titulo .f-abajo\").hide();\n    $(\".sidebar-lateral .lista\").hide();\n  };\n\n  var desplazar = function desplazar() {\n    $(\".sidebar-barra .sidebar-menu\").click(function () {\n      if (visible === 0) {\n        $(\".sidebar-lateral\").css(\"left\", 0);\n        visible = 1;\n      } else {\n        $(\".sidebar-lateral\").css(\"left\", -240);\n        visible = 0;\n      }\n    });\n  };\n\n  var desplegar = function desplegar() {\n    $(\".sidebar-lateral > .titulo\").click(function () {\n      if (elementos[$(this).index() - 1] === false || elementos[$(this).index() - 1] === undefined) {\n        $($(this).data(\"target\")).slideDown(300);\n        $(this).children(\".f-derecha\").hide();\n        $(this).children(\".f-abajo\").show();\n        elementos[$(this).index() - 1] = true;\n      } else {\n        $($(this).data(\"target\")).slideUp(300);\n        $(this).children(\".f-derecha\").show();\n        $(this).children(\".f-abajo\").hide();\n        elementos[$(this).index() - 1] = false;\n      }\n    });\n  };\n\n  var SidebarLateral = {\n    iniciar: function iniciar() {\n      inicializarElementos();\n      inicializarColumna();\n      desplazar();\n      desplegar();\n    }\n  };\n  window.SidebarLateral = SidebarLateral;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarLateral);\n\n//# sourceURL=webpack:///./src/modulos/Sidebar-lateral.js?");

/***/ }),

/***/ "./src/modulos/SidebarFija.js":
/*!************************************!*\
  !*** ./src/modulos/SidebarFija.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var elementos = new Array($(\".sidebarFija .titulo\").lenght);\n\n  var inicializarElementos = function inicializarElementos() {\n    for (var i = 0; i < elementos.length; i++) {\n      elementos[i] = false;\n    }\n  };\n\n  var inicializarComponentes = function inicializarComponentes() {\n    $(\".sidebarFija .titulo\").append(\"<i class='f-derecha'></i>\");\n    $(\".sidebarFija .titulo\").append(\"<i class='f-abajo'></i>\");\n    $(\".sidebarFija .titulo .f-abajo\").hide();\n    $(\".sidebarFija .lista\").hide();\n  };\n\n  var mostarLista = function mostarLista() {\n    $(\".sidebarFija > .titulo\").click(function () {\n      if (elementos[$(this).index() - 1] === false || elementos[$(this).index() - 1] === undefined) {\n        $($(this).data(\"target\")).slideDown(300);\n        $(this).children(\".f-derecha\").hide();\n        $(this).children(\".f-abajo\").show();\n        elementos[$(this).index() - 1] = true;\n      } else {\n        $($(this).data(\"target\")).slideUp(300);\n        $(this).children(\".f-derecha\").show();\n        $(this).children(\".f-abajo\").hide();\n        elementos[$(this).index() - 1] = false;\n      }\n    });\n  };\n\n  var SidebarFija = {\n    iniciar: function iniciar() {\n      inicializarElementos();\n      inicializarComponentes();\n      mostarLista();\n    }\n  };\n  window.SidebarFija = SidebarFija;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarFija);\n\n//# sourceURL=webpack:///./src/modulos/SidebarFija.js?");

/***/ }),

/***/ "./src/modulos/Slider.js":
/*!*******************************!*\
  !*** ./src/modulos/Slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var cantidadElementos = $(\".slider li\").length;\n  var elementos = new Array(cantidadElementos);\n\n  var _selectores = new Array(cantidadElementos);\n\n  var seleccionado = 0;\n  var config = {};\n  var timer = null;\n\n  var Inicializar = function Inicializar() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      efecto: \"lateral\",\n      automatico: false,\n      tiempo: 3000,\n      select: true\n    },\n        efecto = _ref.efecto,\n        automatico = _ref.automatico,\n        tiempo = _ref.tiempo,\n        select = _ref.select;\n\n    if (cantidadElementos === 0) return;\n    config.efecto = efecto === undefined ? \"lateral\" : efecto;\n    config.automatico = automatico === undefined ? false : automatico;\n    config.tiempo = tiempo === undefined ? 3000 : tiempo;\n    config.select = select === undefined ? true : select;\n\n    for (var i = 0; i < cantidadElementos; i++) {\n      if (config.select === true) {\n        _selectores[i] = $(\"<span class='selectores'></span>\");\n        $(\".selectores-contenedor\").append(_selectores[i]);\n      }\n\n      elementos[i] = $(\".slider li:nth-child(\" + (i + 1) + \")\");\n      elementos[i].hide();\n    }\n\n    elementos[0].show();\n\n    if (config.select === true) {\n      _selectores[0].css(\"background-color\", \"orangered\");\n    }\n\n    if (config.automatico) {\n      arrancarCronometro();\n    }\n  };\n\n  var salida = function salida() {\n    $(window).blur(function () {\n      if (config.automatico) pararCronometro();\n    });\n    $(window).focus(function () {\n      if (config.automatico) arrancarCronometro();\n    });\n  };\n\n  var siguiente = function siguiente(seleccionado) {\n    return seleccionado + 1 >= cantidadElementos ? 0 : seleccionado + 1;\n  };\n\n  var atras = function atras(seleccionado) {\n    return seleccionado - 1 <= -1 ? cantidadElementos - 1 : seleccionado - 1;\n  };\n\n  var efectoFade = function efectoFade(direccion) {\n    if (config.automatico) pararCronometro();\n\n    if (direccion === \"derecha\") {\n      $(elementos[seleccionado]).fadeOut(300);\n      $(elementos[siguiente(seleccionado)]).fadeIn(300);\n      $(_selectores[seleccionado]).css(\"background-color\", \"grey\");\n      $(_selectores[siguiente(seleccionado)]).css(\"background-color\", \"orangered\");\n      seleccionado = siguiente(seleccionado);\n    } else {\n      $(elementos[seleccionado]).fadeOut(300);\n      $(elementos[atras(seleccionado)]).fadeIn(300);\n      $(_selectores[seleccionado]).css(\"background-color\", \"grey\");\n      $(_selectores[atras(seleccionado)]).css(\"background-color\", \"orangered\");\n      seleccionado = atras(seleccionado);\n    }\n\n    if (config.automatico) arrancarCronometro();\n  };\n\n  var efectoLateral = function efectoLateral(sel, direccion) {\n    if (config.automatico) pararCronometro();\n\n    if (direccion === \"izquierda\") {\n      $(elementos[sel]).animate({\n        left: \"-100%\"\n      }, 500, function () {\n        $(elementos[sel]).hide();\n        $(elementos[sel]).css(\"left\", 0);\n        $(elementos[siguiente(sel)]).fadeIn();\n        $(_selectores[sel]).css(\"background-color\", \"grey\");\n        $(_selectores[siguiente(sel)]).css(\"background-color\", \"orangered\");\n        seleccionado = siguiente(sel);\n      });\n    } else {\n      $(elementos[sel]).animate({\n        left: \"100%\"\n      }, 500, function () {\n        $(elementos[sel]).hide();\n        $(elementos[sel]).css(\"left\", 0);\n        $(elementos[atras(sel)]).fadeIn();\n        $(_selectores[sel]).css(\"background-color\", \"grey\");\n        $(_selectores[atras(sel)]).css(\"background-color\", \"orangered\");\n        seleccionado = atras(sel);\n      });\n    }\n\n    if (config.automatico) arrancarCronometro();\n  };\n\n  var pararCronometro = function pararCronometro() {\n    clearInterval(timer);\n    timer = null;\n  };\n\n  var arrancarCronometro = function arrancarCronometro() {\n    if (!timer) timer = setInterval(efectoCronometro, config.tiempo);\n  };\n\n  var efectoCronometro = function efectoCronometro() {\n    $(elementos[seleccionado]).fadeOut(500);\n    $(elementos[siguiente(seleccionado)]).fadeIn(500);\n    $(_selectores[seleccionado]).css(\"background-color\", \"grey\");\n    $(_selectores[siguiente(seleccionado)]).css(\"background-color\", \"orangered\");\n    seleccionado = siguiente(seleccionado);\n  };\n\n  var _selectores = function selectores() {\n    $(\".selectores\").click(function () {\n      if (config.automatico) pararCronometro();\n      var ind = $(this).index();\n      $(elementos[seleccionado]).fadeOut(300);\n      $(elementos[ind]).fadeIn(300);\n      $(_selectores[seleccionado]).css(\"background-color\", \"grey\");\n      $(_selectores[ind]).css(\"background-color\", \"orangered\");\n      seleccionado = ind;\n      if (config.automatico) arrancarCronometro();\n    });\n  };\n\n  var botones = function botones() {\n    if (config.efecto === \"lateral\") {\n      $(\".botones span:first-child\").click(function () {\n        efectoLateral(seleccionado, \"izquierda\");\n      });\n      $(\".botones span:last-child\").click(function () {\n        efectoLateral(seleccionado, \"derecha\");\n      });\n    } else {\n      $(\".botones span:first-child\").click(function () {\n        efectoFade(\"izquierda\");\n      });\n      $(\".botones span:last-child\").click(function () {\n        efectoFade(\"derecha\");\n      });\n    }\n  };\n\n  var Slider = {\n    iniciar: function iniciar(config) {\n      Inicializar(config);\n      botones();\n\n      _selectores();\n\n      salida();\n    }\n  };\n  window.Slider = Slider;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./src/modulos/Slider.js?");

/***/ }),

/***/ "./src/modulos/Tabs.js":
/*!*****************************!*\
  !*** ./src/modulos/Tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tab =\n/*#__PURE__*/\nfunction () {\n  function Tab() {\n    _classCallCheck(this, Tab);\n  }\n\n  _createClass(Tab, [{\n    key: \"inicializar\",\n    value: function inicializar(contexto) {\n      $(contexto + \" .tab .op-tab label:nth-child(1)\").addClass(\"activo\");\n      $(contexto + \" .contenido-tab\").hide();\n      var id = $($(contexto + \" .tab .op-tab label:nth-child(1)\")).data(\"target\");\n      $(id).show();\n    }\n  }, {\n    key: \"inicializarBorde\",\n    value: function inicializarBorde(c) {\n      $(c.contexto + \" .tab-borde .op-tab-borde ul\").addClass(c.colorFondo);\n      $(c.contexto + \" .tab-borde .op-tab-borde label\").addClass(c.colorFuente);\n      $(c.contexto + \" .contenido-tab\").hide();\n      var borde = $(\"<span class='activo \" + c.colorBorde + \"' ></span>\");\n      $(c.contexto + \" .tab-borde .op-tab-borde label:nth-child(1)\").append(borde);\n      var id = $($(c.contexto + \" .tab-borde .op-tab-borde label:nth-child(1)\")).data(\"target\");\n      $(id).show();\n    }\n  }, {\n    key: \"cambiarBorde\",\n    value: function cambiarBorde(c) {\n      $(c.contexto + \" .tab-borde .op-tab-borde label\").click(function () {\n        $(c.contexto + \" .tab-borde .op-tab-borde label span\").remove();\n        var borde = $(\"<span class='activo \" + c.colorBorde + \"' ></span>\");\n        $(this).append(borde);\n        $(c.contexto + \" .contenido-tab\").hide();\n        var id = $($(this)).data(\"target\");\n        $(id).show();\n      });\n    }\n  }, {\n    key: \"cambiarSolapa\",\n    value: function cambiarSolapa(contexto) {\n      $(contexto + \" .tab .op-tab label\").click(function () {\n        $(contexto + \" .tab .op-tab label\").removeClass(\"activo\");\n        $(this).addClass(\"activo\");\n        var idInfo = $($(this)).data(\"target\");\n        $(contexto + \" .contenido-tab\").hide();\n        $(idInfo).show();\n      });\n    }\n  }, {\n    key: \"iniciar\",\n    value: function iniciar(contexto) {\n      this.inicializar(contexto);\n      this.cambiarSolapa(contexto);\n    }\n  }, {\n    key: \"iniciarBorde\",\n    value: function iniciarBorde() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n        contexto: \"vacio\",\n        colorFuente: \"c-negro\",\n        colorFondo: \"fd-blanco\",\n        colorBorde: \"fd-negro\"\n      },\n          contexto = _ref.contexto,\n          colorFuente = _ref.colorFuente,\n          colorFondo = _ref.colorFondo,\n          colorBorde = _ref.colorBorde;\n\n      var c = {\n        contexto: contexto,\n        colorFuente: colorFuente,\n        colorFondo: colorFondo,\n        colorBorde: colorBorde\n      };\n      this.inicializarBorde(c);\n      this.cambiarBorde(c);\n    }\n  }]);\n\n  return Tab;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tab);\n\n//# sourceURL=webpack:///./src/modulos/Tabs.js?");

/***/ }),

/***/ "./src/modulos/Template.js":
/*!*********************************!*\
  !*** ./src/modulos/Template.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var inicializar = function inicializar() {\n    $(\".tem-input select\").parent().children(\"label\").css(\"top\", 5);\n    $(\".tem-input select\").parent().children(\"label\").css(\"font-size\", 10);\n    $(\".tem-input select\").parent().append(\"<span class='flechas'></span>\");\n  };\n\n  var focus = function focus() {\n    $(\".tem-input input\").focus(function () {\n      $(this).parent().css(\"border\", \"2px solid #1B94FF \");\n      $(this).parent().children(\"label\").css(\"top\", 5);\n      $(this).parent().children(\"label\").css(\"font-size\", 10);\n      $(this).css(\"top\", \"calc(50% - 10px)\");\n    });\n    $(\".tem-input select\").focus(function () {\n      $(this).parent().css(\"border\", \"2px solid #1B94FF \");\n    });\n    $(\".tem-input input\").blur(function () {\n      $(this).parent().css(\"border\", \"1px solid rgba(0, 0, 0, 0.171)\");\n\n      if ($(this).val() === \"\") {\n        $(this).parent().children(\"label\").css(\"top\", \"calc(50% - 9px)\");\n        $(this).parent().children(\"label\").css(\"font-size\", 15);\n        $(this).css(\"top\", \"calc(50% - 10px)\");\n      }\n    });\n    $(\".tem-input select\").blur(function () {\n      $(this).parent().css(\"border\", \"1px solid rgba(0, 0, 0, 0.171)\");\n    });\n  };\n\n  var Template = {\n    iniciar: function iniciar() {\n      inicializar();\n      focus();\n    }\n  };\n  window.Template = Template;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Template);\n\n//# sourceURL=webpack:///./src/modulos/Template.js?");

/***/ }),

/***/ "./src/modulos/Toast.js":
/*!******************************!*\
  !*** ./src/modulos/Toast.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var toast = function toast() {\n    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Hola soy un toast !\";\n    var clases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n      color: \"fd-gris-az-c\",\n      radio: \"bor-rad-3\",\n      colorTexto: \"c-blanco\"\n    };\n    var tiempo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n    $(\".toast\").remove();\n    $(\"body\").append(\"<div class='toast'></div>\");\n    var t = $(\"body .toast:last-child\");\n    t.html(html);\n    t.addClass(clases.color);\n    t.addClass(clases.radio);\n    t.addClass(clases.colorTexto);\n    setInterval(function () {\n      t.remove();\n    }, tiempo);\n  };\n\n  var Toast = {\n    ejecutar: function ejecutar(html, clases, tiempo) {\n      return toast(html, clases, tiempo);\n    }\n  };\n  window.Toast = Toast;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toast);\n\n//# sourceURL=webpack:///./src/modulos/Toast.js?");

/***/ }),

/***/ "./src/modulos/ToolTips.js":
/*!*********************************!*\
  !*** ./src/modulos/ToolTips.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var elemento;\n\n  var inicializar = function inicializar() {\n    $(\".tips-ele\").hover(function () {\n      var posicion = $(this).data(\"posicion\");\n      var contenido = $(this).data(\"tips\");\n      elemento = $(\"<div class='tips'></div>\");\n\n      switch (posicion) {\n        case \"arriba\":\n          elemento.css(\"bottom\", \"calc(100% + 5px)\");\n          break;\n\n        case \"abajo\":\n          elemento.css(\"top\", \"calc(100% + 5px)\");\n          break;\n\n        case \"izquierda\":\n          elemento.css(\"right\", \"calc(100% + 5px)\");\n          break;\n\n        case \"derecha\":\n          elemento.css(\"left\", \"calc(100% + 5px)\");\n          break;\n      }\n\n      elemento.html(contenido);\n      elemento.appendTo($($(this))).fadeIn(200);\n    }, function () {\n      elemento.fadeOut(200);\n      elemento.remove();\n      elemento = null;\n    });\n  };\n\n  var ToolTips = {\n    iniciar: function iniciar() {\n      inicializar();\n    }\n  };\n  window.ToolTips = ToolTips;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToolTips);\n\n//# sourceURL=webpack:///./src/modulos/ToolTips.js?");

/***/ }),

/***/ "./src/modulos/Waves.js":
/*!******************************!*\
  !*** ./src/modulos/Waves.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n  var efecto = function efecto() {\n    $(\".waves\").click(function (e) {\n      var boton = $(this);\n      var elemento = $(\"<span class='efecto-waves'></span>\");\n      elemento.css({\n        width: 10,\n        height: 10,\n        left: e.offsetX,\n        top: e.offsetY\n      }).appendTo(boton).animate({\n        width: 200,\n        height: 200,\n        opacity: 0\n      }, 500, function () {\n        $(this).remove();\n      });\n    });\n  };\n\n  var Waves = {\n    iniciar: function iniciar() {\n      efecto();\n    }\n  };\n  window.Waves = Waves;\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waves);\n\n//# sourceURL=webpack:///./src/modulos/Waves.js?");

/***/ })

/******/ });