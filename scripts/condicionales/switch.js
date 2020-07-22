var menu = 3;
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["album"] = 2] = "album";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
;
switch (menu) {
    case tipoMenu.canciones:
        console.log("canciones seleccionadas");
        break;
    case tipoMenu.album:
        console.log("albumnes seleccionados");
        break;
    case tipoMenu.perfil:
        console.log("perfil seleccionado");
        break;
    default:
        console.log("No seleccionó ninguna opción.");
        break;
}
