# CARBONO APP

## Sobre la APP

Este proyecto fue realizado como entrega final del Curso React JS de Coderhouse. Se trata de una tienda online de insumos para impresion 3D, desarrollada en React JS. Se utilizaron para su desarrollo:

* React: hooks (useState, useEffect, useContext)
* Bootstrap
* Firebase


Actualmente la APP permite realizar las siguientes tareas:

* Visualizar catalogo de productos
* Ingresar al detalle de cada producto individual haciendo click
* Seleccionar una cantidad y agregar al carrito. No se permite añadir 2 veces el mismo producto al carrito.  
* Ingreso al carrito de compras. Se muestra detalle de los items agregados, con calculo de subtotales y total de la compra.
* Dentro del carrito, es posible modificar cantidades, eliminar items individualmente (se actualizan los subtotales y total), vaciar carrito y realizar checkout.
* Checkout: antes de finalizar el checkout se solicitaran datos del comprador y luego se enviaran los datos personales y del pedido a la base de datos de pedidos, en Firebase.
* Login: es posible realizar login, pero solo esta desarrollado para interactuar visualmente con el Navbar. Queda pendiente realizar base de dato de usuarios y autenticación.

Puntos a desarrollar:

* Login: autenticación. Creación de cuentas admin para gestionar productos y stocks, como también realizar bajadas de datos y estadísticas de ser necesario. 
* Buscador: aprovechar la clasificación de cada producto para organizarlo en paneles o búsquedas/filtros.

## License

Sin licencia hasta que se termine el curso!


