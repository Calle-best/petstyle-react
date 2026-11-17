# PetStyle · Planificación del proyecto

Avance del proyecto web con React y Tailwind CSS. Documento elaborado a partir del proyecto entregado y de los requisitos de las dos fotografías. Los objetivos y requisitos siguientes formalizan el alcance que ya implementa la aplicación; el equipo puede adaptar los datos académicos de portada.

## Pregunta 1. Definición y objetivos

**Nombre:** PetStyle – Moda para Mascotas.

**Descripción y propósito:** catálogo web de ropa y accesorios para perros y gatos. Permite explorar colecciones, comparar precios, consultar tallas y preparar un pedido que se coordina por WhatsApp. Es un prototipo académico; el carrito no cobra y los formularios no envían correos.

**Público objetivo:** personas responsables de perros y gatos, principalmente compradores en Perú, que consultan productos desde el teléfono o una computadora y necesitan orientación para elegir una talla.

**Necesidad:** reunir productos, precios, disponibilidad y medidas en una interfaz organizada, para reducir la búsqueda dispersa y facilitar la consulta antes de pedir.

**Objetivo general:** desarrollar una aplicación web responsive con React, Vite y Tailwind CSS que facilite la consulta de moda y accesorios para mascotas y la preparación de pedidos por WhatsApp.

**Objetivos específicos:**

1. Organizar un catálogo dinámico de al menos 10 productos mediante una API, con categorías, buscador, filtros y ordenamiento.
2. Ofrecer navegación consistente entre inicio, catálogo, detalle, tallas y contacto, usando rutas y componentes reutilizables.
3. Implementar carrito con persistencia local y formularios validados, con una interfaz usable en móvil, tablet y escritorio.

## Pregunta 2. Requisitos funcionales y no funcionales

### Requisitos funcionales

| Código | Descripción | Prioridad |
|---|---|---|
| RF-01 | Consultar el catálogo obtenido por HTTP desde una API y mostrar nombre, fotografía y precio de cada producto. | Alta |
| RF-02 | Explorar productos de perros y gatos, subcategorías, colecciones y ofertas. | Alta |
| RF-03 | Buscar por texto con actualización de resultados y tratamiento de tildes y mayúsculas. | Alta |
| RF-04 | Filtrar por ofertas, disponibilidad y precio máximo; ordenar por precio y limpiar filtros. | Alta |
| RF-05 | Abrir el detalle de un producto y seleccionar talla y cantidad cuando corresponda. | Alta |
| RF-06 | Agregar, incrementar, disminuir, eliminar y vaciar productos del carrito; conservarlo tras recargar. | Alta |
| RF-07 | Preparar un enlace de WhatsApp con productos, tallas, cantidades y total, sin enviarlo automáticamente. | Alta |
| RF-08 | Validar nombre, correo, celular opcional, asunto y mensaje antes de confirmar la demostración del formulario. | Alta |
| RF-09 | Consultar una tabla de medidas y recomendaciones para elegir talla. | Media |
| RF-10 | Mostrar carga, error con reintento, resultados vacíos y página 404. | Alta |

### Requisitos no funcionales

Estos son criterios verificables del proyecto, no certificaciones generales de calidad.

| Código | Descripción y criterio de aceptación | Prioridad |
|---|---|---|
| RNF-01 | Diseño responsive: las páginas principales no deben desbordar horizontalmente a 320, 390, 768 y 1440 px; la tabla de tallas puede desplazarse dentro de su propio contenedor. | Alta |
| RNF-02 | Mantenibilidad: organizar componentes por función y reutilizar al menos dos componentes en secciones diferentes; separar páginas, contexto, servicios y validaciones. | Alta |
| RNF-03 | Accesibilidad básica: campos con etiquetas, errores asociados mediante ARIA, botones con nombre accesible y navegación por teclado; no se afirma una certificación WCAG. | Alta |
| RNF-04 | Fiabilidad: una API caída debe mostrar un error recuperable y un botón de reintento; un carrito guardado con formato inválido no debe romper la aplicación. | Alta |
| RNF-05 | Consistencia visual: usar la paleta y las dos familias tipográficas definidas en la guía, con variantes compartidas de botones y tarjetas. | Media |
| RNF-06 | Reproducibilidad: instalar con el archivo de bloqueo y superar `npm run lint`, `npm test` y `npm run build` en Node compatible. | Alta |
| RNF-07 | Despliegue: las rutas internas deben funcionar al recargar; los productos deben responder por `/api/products` en la plataforma elegida. La validación remota queda pendiente hasta publicar. | Alta |

## Pregunta 3. Arquitectura de información y navegación

**Menú principal:** Perros, Gatos, Colecciones, Ofertas, Guía de tallas y Contacto. El logo vuelve a Inicio. El encabezado incluye buscador y acceso al carrito. En móvil se utiliza menú hamburguesa con categorías desplegables. Header y Footer son compartidos por todas las rutas.

**Jerarquía y sitemap:** disponible también como gráfico editable en `diseno/sitemap.svg`.

```text
PetStyle
├── Inicio (/)
│   ├── Hero: Cozy, Rain y Ofertas
│   ├── Colecciones y productos destacados
│   ├── Beneficios y Quiénes somos (#nosotros)
│   ├── Guía de tallas
│   └── CTA: formulario de demostración y WhatsApp
├── Tienda (/tienda)
│   ├── Perros (/categoria/perros)
│   │   ├── Ropa: bandanas, botas, casacas, pijamas, polos, sudaderas y abrigos
│   │   ├── Paseo: collares, correas, pecheras y arneses, placas
│   │   └── Más: juguetes, camas, cuidado e higiene, bowls y bandejas
│   ├── Gatos (/categoria/gatos)
│   │   ├── Ropa: polos, pijamas, casacas
│   │   ├── Accesorios: collares, arnés + correa, placas
│   │   └── Hogar: camas, rascadores, transportadores
│   ├── Subcategoría (/categoria/:pet/:sub)
│   ├── Cozy (/tienda/coleccion/cozy)
│   ├── Rain (/tienda/coleccion/rain)
│   └── Paseo (/tienda/coleccion/paseo)
├── Ofertas (/ofertas)
├── Búsqueda (/buscar?q=texto)
├── Detalle (/producto/:id)
│   └── Productos relacionados
├── Guía de tallas (/guia-de-tallas)
├── Contacto (/contacto)
└── Página no encontrada (*)

Acceso transversal: carrito lateral → enlace para coordinar por WhatsApp.
```

**Flujo principal:** Inicio → categoría o búsqueda → detalle → talla/cantidad → carrito → revisar total → abrir WhatsApp. La aplicación prepara el mensaje; el usuario decide enviarlo.

## Pregunta 4. Línea gráfica e identidad visual

**Estilo:** tienda cercana y contemporánea, con fondos claros, acentos rosa y lila, títulos serif y tarjetas redondeadas. La implementación existente se conserva. Los nombres históricos de variables `pet-green` y `pet-gold` corresponden actualmente a negro y rosa.

| Uso | Color | Variable en `src/index.css` |
|---|---|---|
| Texto, navegación, footer y botones oscuros | `#1A1A1A` | `pet-green`, `pet-ink` |
| Acento lila | `#9B7FD1` | `pet-leaf` |
| CTA y etiquetas de ofertas | `#F48FB1` | `pet-gold` |
| Hover del botón rosa | `#EC6C9C` | `pet-gold-dark` |
| Fondos alternos | `#F6EFFC` | `pet-cream` |
| Superficies | `#FFFFFF` | blanco |

- **Tipografía de títulos y marca:** Playfair Display 600/700; alternativa Georgia. Títulos principales de 30–48 px según el ancho; Hero 36–48 px.
- **Tipografía de cuerpo:** Poppins 400/500/600; alternativa system-ui. Texto habitual 14–16 px; información secundaria 12 px.
- **Botones:** primario rosa con texto oscuro; secundario negro con texto blanco; outline con borde de 2 px. Radio de 12 px y foco visible. `Button.jsx` centraliza las variantes.
- **Iconografía:** Lucide React, de trazo uniforme: huella, bolsa, carrito, búsqueda, flechas y contacto. Los iconos informativos se acompañan de texto o nombre accesible.
- **Imágenes:** fotografías locales de productos en `src/assets/images/products`, presentadas en proporción cuadrada. `ProductImage` resuelve las imágenes y conserva un fondo si no existe foto.
- **Componentes visuales:** Header, Navbar, Hero, ProductCard, Button, FormField, Breadcrumbs, LoadingGrid, ErrorState, CartDrawer y Footer.
- **Retícula:** ancho máximo de contenido 1152 px; márgenes móviles de 16 px y de 24 px desde `sm`; tarjetas de productos en dos columnas y cuatro desde `lg`; Hero apilado en móvil y de tres columnas desde `md`.

**Entregables gráficos:** `diseno/guia-estilos-web.svg`, `diseno/guia-estilos-mobile.svg` y los dos wireframes del Home. Son archivos vectoriales preparados para importar a Figma; todavía se debe generar y entregar el enlace del archivo en Figma. Consulta `03_FIGMA_Y_PUBLICACION.md`.

## Pregunta 5. Estructura del Home e implementación inicial

| Orden | Sección | Implementación |
|---|---|---|
| 1 | Header y navegación | `Header.jsx` y `Navbar.jsx`: anuncio, logo, buscador, carrito, menú responsive. |
| 2 | Hero | `Hero.jsx`: colección principal, lanzamiento Rain y promoción. |
| 3 | Contenido principal | `CollectionSection.jsx` y `ProductCard.jsx`: Cozy, Paseo, Rain y ofertas alimentadas por API. |
| 4 | Contenido de apoyo | `Benefits.jsx`, `About.jsx` y `SizeGuide.jsx`: beneficios, presentación y tallas. |
| 5 | CTA | `CtaBanner.jsx`: validación de correo de demostración y acceso a WhatsApp. |
| 6 | Footer | `Footer.jsx`: información y enlaces reales a secciones y colecciones. |

**Wireframes:** `diseno/wireframe-home-web.svg` y `diseno/wireframe-home-mobile.svg`. Representan jerarquía y distribución de bloques; las capturas en `evidencias/` muestran el resultado real.

**Base técnica ya implementada:** React + Vite + Tailwind CSS; `src/main.jsx` monta React y BrowserRouter; `vite.config.js` configura plugins de React y Tailwind; `src/index.css` define el tema. Header, Navbar, Hero y Footer son componentes independientes y reutilizables.

**Estado de entrega:** contenido documental y archivos de diseño preparados. Pendiente publicar el diseño en Figma y añadir datos de integrantes, curso y docente si el formato de entrega los requiere.
