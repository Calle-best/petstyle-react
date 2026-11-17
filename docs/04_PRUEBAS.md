# Verificación de la versión corregida

Fecha: 17 de noviembre de 2026. Pruebas locales con Node.js 24.18.0 y Google Chrome en Windows. No se ha probado todavía un dominio publicado ni dispositivos físicos.

## Comprobaciones de código

| Comando / comprobación | Resultado |
|---|---|
| Instalación de dependencias de package-lock | Correcta |
| `npm run lint` | Sin errores |
| `npm test` | 3 pruebas aprobadas: catálogo válido con fotos; consistencia de los dos adaptadores GET; rechazo de POST con 405. |
| `npm run build` | Compilación de producción correcta. |

## Pruebas funcionales de navegador

Se ejecutaron **16 comprobaciones funcionales automatizadas**, sin errores JavaScript no controlados:

1. JSON Server entrega 52 productos y el catálogo renderiza 52 tarjetas.
2. Las rutas de categorías, subcategoría, colección, ofertas, detalle, tallas, contacto y 404 muestran contenido con Header y Footer compartidos.
3. El buscador actualiza la URL y los resultados al escribir «polo».
4. Los filtros de ofertas, disponibilidad y precio se combinan; limpiar restaura el listado y ordenar muestra precios ascendentes.
5. Seleccionar talla S, elegir dos unidades y agregar al carrito produce el total esperado; aumentar a tres unidades actualiza total y mensaje preparado para WhatsApp.
6. El carrito conserva sus productos tras recargar.
7. Disminuir y eliminar actualizan el carrito y su estado vacío.
8. Un valor de localStorage con estructura inválida no rompe la aplicación.
9. Contacto rechaza campos vacíos, correo y celular inválidos; acepta datos válidos y explica que no se han enviado correos.
10. El CTA de suscripción valida correo y confirma el carácter de demostración.
11. «Quiénes somos» navega a una sección existente del Home.
12. El menú móvil abre categorías, navega y se cierra.
13. Una respuesta HTTP 503 muestra error; Reintentar recupera el catálogo al restablecer la API.
14. Una respuesta retrasada muestra el estado de carga antes del catálogo.
15. La compilación consume `/api/products` y abre directamente una ruta de producto en un servidor HTTP local que ejecuta el adaptador de Netlify.
16. La navegación anterior no genera excepciones de JavaScript en la página.

No se enviaron mensajes por WhatsApp ni formularios a servicios externos. Solo se verificó la dirección preparada por la aplicación.

## Responsive

Se verificaron **24 combinaciones**: seis páginas (`/`, `/tienda`, `/producto/1`, `/guia-de-tallas`, `/contacto`, `/no-existe`) a cuatro anchos (320, 390, 768 y 1440 px). En todas, `document.documentElement.scrollWidth` coincidió con el ancho de la ventana. La tabla de tallas conserva su desplazamiento interno para que se puedan consultar todas las columnas.

Las capturas de Inicio a 390, 768 y 1440 px incluyen imágenes cargadas. Se revisó visualmente el diseño. Esto acredita la emulación de esos tamaños en Chrome, no una prueba en todos los teléfonos ni en todos los navegadores.

## Evidencias incluidas

Carpeta `evidencias/`:

- `home-390.png`, `home-768.png`, `home-1440.png`: capturas completas del Home.
- `contacto-validaciones.png`: errores de formulario visibles.
- `api-error-mobile.png`: estado de error recuperable en móvil.
- `responsive-resultados.json`: medidas de las 24 combinaciones.
- `funcionales-resultados.json`: registro de las 16 comprobaciones.

## Alcance pendiente

Los adaptadores de Vercel y Netlify se probaron directamente en Node; el build se probó con un arnés HTTP local. Esto no valida todavía el empaquetado, las reglas de enrutamiento ni la ejecución en una cuenta remota. Una vez publicado, comprobar `/api/products` y recargar las rutas internas según `03_FIGMA_Y_PUBLICACION.md`.

Los formularios son de demostración; no existe servicio de correo ni base de suscriptores. No hay pasarela de pago ni autenticación. La rúbrica fotografiada pide interactividad y validación, y no exige esas integraciones adicionales.
