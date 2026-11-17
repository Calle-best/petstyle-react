# Revisión frente a las dos fotografías

Fecha: 17 de noviembre de 2026. Alcance: ZIP original de PetStyle, código corregido, pruebas locales y consulta del repositorio proporcionado por el usuario. Las fotografías se utilizan como rúbrica de evaluación.

## Resultado

El ZIP original **no demostraba el cumplimiento completo**: ya tenía la mayor parte de los requisitos técnicos de las preguntas 5 a 10, pero no incluía la planificación de las preguntas 1 a 4 ni los diseños de Figma. Tampoco aportaba enlaces de publicación de PetStyle. El README original afirmaba pruebas responsive sin incluir evidencias; en esta revisión se realizaron pruebas reales.

La copia corregida incorpora planificación, requisitos, sitemap, guía visual, wireframes y correcciones funcionales. La programación se validó localmente. **Figma, GitHub de PetStyle y el despliegue público siguen pendientes de entrega externa.**

## Preguntas 1 a 5

| Pregunta y criterio | ZIP original | Resultado de esta revisión |
|---|---|---|
| 1: nombre y descripción | Parcial: presentes en README | Formalizados en `01_PLANIFICACION_PC3.md`. |
| 1: propósito, público y necesidad | Sin documento específico | Agregados en la pregunta 1 del documento. |
| 1: objetivo general y tres específicos | Faltaban | Agregados. |
| 2: tabla de mínimo 5 requisitos funcionales con código, descripción y prioridad | Faltaba | Agregados 10 requisitos. |
| 2: tabla de 5 requisitos no funcionales con código, descripción y prioridad | Faltaba | Agregados 7 criterios verificables. |
| 3: menú, secciones y jerarquía | Implementados, sin planificación completa | Documentados y vinculados a las rutas existentes. |
| 3: sitemap | Faltaba | Agregado en texto y SVG editable. |
| 4: paleta y tipografías | Definidas en CSS | Documentadas con los valores reales rosa, lila y negro. |
| 4: botones, iconos, imágenes y componentes | Implementados | Documentados y representados en guía visual. |
| 4: moodboard o guía en Figma web y mobile | Sin archivos ni enlace de Figma | Dos guías SVG listas para importar; **enlace de Figma pendiente**. |
| 5: wireframe del Home en Figma | Faltaba | Dos wireframes SVG preparados; **importación y enlace en Figma pendientes**. |
| 5: Header, Hero, contenido, CTA y Footer | Cumplía | Conservados y documentados; agregada sección Quiénes somos. |
| 5: React + Vite + Tailwind | Cumplía | Instalación y compilación comprobadas. |
| 5: menú funcional y responsive | Implementado | Verificado en navegador; hamburguesa móvil y menú de escritorio. |
| 5: componentes Header, Navbar, Hero, Footer | Cumplía | Componentes separados en carpetas. |

## Preguntas 6 a 10

| Pregunta y criterio | Evidencia en la versión corregida | Estado |
|---|---|---|
| 6: crear al menos 6 componentes | 21 archivos JSX de componentes en `src/components/`, sin contar páginas ni providers. | Cumple |
| 6: organizar en carpetas | `layout`, `home`, `product`, `cart`, `forms`, `ui`. | Cumple |
| 6: compartir información con props | `ProductCard(product)`, `CollectionSection(title, products, to)`, `Button(variant, children)`, `FormField(label, error)`. | Cumple |
| 6: reutilizar 2 componentes en secciones distintas | ProductCard en Home, catálogo y relacionados; Button en Hero, CTA, About, contacto y 404. También SizeGuide en Home y su propia página. | Cumple |
| 7: instalar y configurar Router | `react-router-dom`, BrowserRouter en `main.jsx`, Routes en `App.jsx`. | Cumple |
| 7: mínimo 4 rutas funcionales | 10 patrones de ruta de contenido y ruta `*`; pruebas de inicio, tienda, categorías, colección, ofertas, búsqueda, producto, tallas, contacto y 404. | Cumple localmente |
| 7: navegación con Link/NavLink | Navbar, Header, Footer, ProductCard y Breadcrumbs. | Cumple |
| 7: página 404 | `NotFoundPage.jsx` para direcciones no reconocidas. | Cumple |
| 7: menú consistente | Header y Footer fuera de Routes; compartidos por todas las vistas. | Cumple |
| 8: API simulada con JSON Server o REST pública | `npm run api`: JSON Server sobre `public/db.json`. Se agregaron funciones para Vercel y Netlify con `GET /api/products`. | Cumple localmente; hosting pendiente |
| 8: consumir con fetch/Axios | `src/services/api.js`, usando fetch y validación de respuesta. | Cumple |
| 8: mostrar mínimo 10 registros dinámicos | Catálogo con 52 productos, IDs únicos y fotografías locales. | Cumple |
| 8: useState y useEffect | `ProductsContext.jsx` carga productos y comparte estados. | Cumple |
| 8: gestionar carga y error | LoadingGrid, ErrorState y reintento; probados retrasando y bloqueando la API. | Cumple |
| 9: mínimo 3 interacciones funcionales | Carrito, talla/cantidad, buscador, filtros, ordenamiento, menú y formularios. | Cumple |
| 9: onClick, onChange y onSubmit | Carrito y botones; búsqueda y filtros; contacto y CTA. | Cumple |
| 9: buscador o filtro dinámico | Búsqueda por URL, filtros de catálogo y orden por precio. | Cumple |
| 9: formulario con validaciones | ContactForm y newsletter; se corrigen confirmaciones para dejar claro que son una demostración. | Cumple |
| 9: estado mediante Hooks | useState, useEffect, useMemo, useContext y hook useForm. | Cumple |
| 10: integrar vistas y componentes | App.jsx + providers de productos y carrito. | Cumple |
| 10: Tailwind responsive | Utilidades `sm`, `md`, `lg`; ajustes de ancho de filtros y tarjetas. | Cumple |
| 10: verificar móviles, tablets y escritorio | Comprobaciones en Chrome a 320, 390, 768 y 1440 px; evidencias y alcance en `04_PRUEBAS.md`. | Cumple en navegador emulado |
| 10: publicar en GitHub | El repositorio facilitado contiene `aroma-andino-ecommerce` con Angular, no este PetStyle de React. | **Pendiente PetStyle** |
| 10: desplegar en Vercel o Netlify | Configuración y API preparadas; no se recibió URL pública de PetStyle ni se realizó despliegue remoto. | **Pendiente** |

## Correcciones aplicadas

1. Se agregaron los documentos académicos y cinco recursos SVG: sitemap, guías web/móvil y wireframes web/móvil.
2. Se completó el ancla `/#nosotros` con una sección de presentación.
3. Se reemplazó el enlace «Ingresar» por «Contacto» y los enlaces falsos del footer por contenido existente. No se inventaron políticas legales ni redes sociales.
4. Se corrigieron las confirmaciones de contacto y suscripción: validar no equivale a enviar un correo o registrar al usuario en un servidor.
5. Se ajustaron filtros, selectores y botones de tarjetas para pantallas estrechas.
6. Se validó la estructura del carrito leído de localStorage para que un dato inválido no rompa el renderizado.
7. La compilación de producción ahora consume `/api/products` a través de funciones preparadas para Vercel y Netlify, en lugar de presentar `/db.json` como si fuera una API REST desplegada.
8. Se agregaron pruebas de contrato de API, método HTTP y consistencia del catálogo. Se conserva `package-lock.json` y se documenta la versión de Node.

## Lo que debe adjuntarse para cerrar la entrega

- Enlace compartido de Figma con guías web/móvil y wireframes importados.
- Repositorio de **esta versión de PetStyle**, con código y documentos.
- URL pública en Vercel o Netlify, comprobando API, navegación y recarga de rutas.
- Datos académicos del equipo, si los exige la portada del curso.

El repositorio recibido fue `https://github.com/Calle-best/PC2.`. La API pública de GitHub mostró el directorio `aroma-andino-ecommerce`, archivos `angular.json` y componentes Angular; no se modificó. Esta revisión no atribuye a PetStyle la publicación de ese otro proyecto.
