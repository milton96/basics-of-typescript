var menu: number = 3;

enum tipoMenu {
    canciones = 1,
    album = 2,
    perfil = 3
};

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