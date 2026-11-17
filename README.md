# PetStyle · Moda para Mascotas

Proyecto académico con React 19, Vite 6, Tailwind CSS 4, React Router y JSON Server. Catálogo de 52 productos, categorías, búsqueda, filtros, detalle, guía de tallas, carrito persistente y formularios validados.

## Ejecutar

Usa Node.js 24 LTS (mínimo compatible: 22.14). Dentro de esta carpeta:

```bash
npm ci
npm run dev
```

Abre http://localhost:5173. La API de JSON Server responde en http://localhost:3001/products.

| Comando | Función |
|---|---|
| `npm run dev` | Web + JSON Server |
| `npm run web` | Solo Vite; necesita API disponible |
| `npm run api` | JSON Server en puerto 3001 |
| `npm run lint` | Revisión de código |
| `npm test` | Tres pruebas del catálogo y de los adaptadores de API |
| `npm run build` | Compilación en dist |
| `npm run preview` | Solo frontend compilado; no ejecuta funciones de hosting |

## Documentación y entregables

- [Planificación: preguntas 1 a 5](docs/01_PLANIFICACION_PC3.md).
- [Revisión de todos los requisitos: preguntas 1 a 10](docs/02_REVISION_REQUISITOS.md).
- [Figma, GitHub y despliegue](docs/03_FIGMA_Y_PUBLICACION.md).
- [Pruebas realizadas y límites](docs/04_PRUEBAS.md).
- [Informe completo para abrir en navegador](docs/LEER_INFORME.html).
- Diseños editables: `docs/diseno/`; evidencias: `docs/evidencias/`.

## Rutas

| Ruta | Vista |
|---|---|
| / | Inicio |
| /tienda | Catálogo completo |
| /categoria/:pet | Perros o gatos |
| /categoria/:pet/:sub | Subcategoría |
| /tienda/coleccion/:id | Cozy, Rain o Paseo |
| /ofertas | Ofertas |
| /buscar?q=texto | Búsqueda |
| /producto/:id | Detalle |
| /guia-de-tallas | Medidas y consejos |
| /contacto | Contacto |
| * | 404 |

## API y despliegue

El origen de datos único es `public/db.json`.

- Desarrollo: JSON Server con `npm run api`.
- Vercel: `api/products.js` expone GET /api/products.
- Netlify: `netlify/functions/products.mjs` y `public/_redirects` exponen GET /api/products.
- API propia: configura `VITE_API_URL` con la URL base sin /products; consulta .env.example.

Para Vercel o Netlify importa el proyecto por Git y compila con `npm run build`; salida `dist`, Node 24. En Netlify se deben desplegar también las funciones: subir solo dist no basta. Ver instrucciones completas en el documento de publicación. El build predeterminado necesita /api/products; para probarlo con vite preview contra JSON Server consulta la sección de preparación local de esa guía.

## Organización

`src/components/`: layout, home, product, cart, forms, ui (21 componentes). `src/pages/`: vistas. `src/context/`: productos y carrito. `src/services/`: fetch. `src/hooks/` y `src/utils/`: estado de formularios y validaciones. `tests/`: pruebas Node.

## Estado de entrega

Código y documentación revisados localmente. Faltan el enlace de Figma, publicar esta versión de PetStyle en GitHub y su URL de Vercel o Netlify. El repositorio recibido (Calle-best/PC2.) contiene otro proyecto Angular, Aroma Andino. No se ha sustituido ese trabajo.

Los formularios validan y simulan la confirmación; no envían correos ni registran suscriptores. El carrito prepara un pedido por WhatsApp; no procesa pagos. Revisa los datos de contacto en src/data/catalog.js antes de una publicación real.
