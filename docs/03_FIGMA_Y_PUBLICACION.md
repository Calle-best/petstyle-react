# Figma y publicación de PetStyle

## Diseños preparados

| Archivo dentro de `diseno/` | Uso |
|---|---|
| `sitemap.svg` | Arquitectura de información de la pregunta 3. |
| `guia-estilos-web.svg` | Paleta, tipografías y componentes en un tablero de escritorio. |
| `guia-estilos-mobile.svg` | Aplicación visual de los mismos estilos en móvil. |
| `wireframe-home-web.svg` | Jerarquía del Home para escritorio. |
| `wireframe-home-mobile.svg` | Jerarquía del Home para móvil. |

Los SVG contienen formas y textos editables; no son archivos `.fig` ni enlaces publicados. Los wireframes muestran estructura, no capturas finales. Las capturas reales se guardan en `evidencias/`.

### Completar la entrega en Figma

1. Abre un archivo nuevo de **Figma Design**.
2. Arrastra los cinco SVG desde la carpeta `diseno/` al lienzo del archivo.
3. Organiza los tableros en páginas «Arquitectura», «Guía de estilos» y «Wireframes». Puedes usar frames para agruparlos.
4. Revisa las tipografías. Si no están disponibles Poppins y Playfair Display, selecciónalas en Figma o instala esas familias. Los wireframes utilizan Arial para facilitar su edición.
5. Comprueba que se distingan el Header, Hero, contenido principal, CTA y Footer en ambos tamaños.
6. Comparte el archivo con permiso de lectura y registra el enlace real al final de este documento. No se puede considerar entregado en Figma hasta contar con ese enlace.

Figma documenta que un SVG importado deja de tratarse como una imagen plana: [guía oficial de imágenes e importación](https://help.figma.com/hc/en-us/articles/360040028034-Add-images-and-videos-to-designs).

## Preparación local

Instala Node.js 24 LTS o una versión compatible de Node a partir de 22.14. Abre una terminal dentro de `petstyle/`:

```bash
npm ci
npm run dev
```

`npm run dev` inicia JSON Server en `http://localhost:3001/products` y Vite en `http://localhost:5173`. Para evaluar el requisito de JSON Server, muestra la respuesta de la primera dirección y luego el catálogo de 52 productos en la web.

```bash
npm run lint
npm test
npm run build
```

**Importante sobre `npm run preview`:** muestra la compilación estática en tu equipo, pero no ejecuta las funciones de Vercel/Netlify. Para probar solo esa compilación localmente contra JSON Server, inicia `npm run api` en otra terminal y compila con una variable temporal en PowerShell:

```powershell
$env:VITE_API_URL = 'http://localhost:3001'
npm run build
Remove-Item Env:VITE_API_URL
npm run preview
```

Antes de publicar, ejecuta otra vez `npm run build` sin esa variable. **No configures localhost como API en el hosting.** En un despliegue normal se utiliza `/api/products` del mismo dominio. Puedes compilar de nuevo sin variables para regenerar la versión que va al hosting.

## GitHub

El enlace facilitado (`Calle-best/PC2.`) corresponde a un proyecto Angular llamado Aroma Andino. Para mantener ambos trabajos, crea un repositorio separado, por ejemplo `petstyle-react`, y sube el contenido de esta carpeta. Deben quedar `package.json`, `src/`, `api/`, `netlify/` y `docs/` en la raíz elegida del proyecto.

Desde una copia descomprimida de `petstyle/`, que no esté dentro de otro repositorio:

```bash
git init
git add .
git commit -m "PetStyle: proyecto React y entregables PC3"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/petstyle-react.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu cuenta real. El ZIP no incluye `node_modules`, credenciales ni un repositorio Git. El archivo `.gitignore` excluye las dependencias y los archivos de entorno locales.

## Despliegue: elegir una plataforma

### Vercel

Importa el repositorio de PetStyle como proyecto Vite. Si el repositorio contiene una carpeta exterior, selecciona `petstyle` como directorio raíz. Comando de build: `npm run build`; salida: `dist`; versión de Node: 24. `api/products.js` se encarga del endpoint; `vercel.json` dirige las rutas de la web a `index.html` y deja el prefijo `/api/` fuera de esa regla.

### Netlify

Importa el repositorio por Git para que Netlify ejecute la compilación y empaquete las funciones. `netlify.toml` define `npm run build`, la carpeta `dist`, Node 24 y `netlify/functions` como carpeta de funciones. `public/_redirects` envía `/api/products` a la función de productos antes de la regla de rutas de React. **Subir únicamente `dist` mediante arrastrar y soltar no despliega las funciones.**

La documentación oficial de [Vite](https://vite.dev/guide/static-deploy.html), [Vercel](https://vercel.com/docs/routing/rewrites) y [Netlify](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/) sirve como referencia para compilación y rutas. La ejecución remota debe comprobarse después de crear el despliegue.

## Verificación después de publicar

1. Abrir `https://TU-DOMINIO/api/products`: debe devolver JSON con los 52 productos, no HTML.
2. Abrir `/tienda` y comprobar el conteo y las imágenes.
3. Abrir directamente `/producto/1`, `/contacto` y una ruta inexistente; recargar cada página.
4. Probar buscador, filtros y carrito. Abrir el enlace de WhatsApp para revisar el contenido si se desea; el envío depende del usuario.
5. Revisar móvil, tablet y escritorio, y guardar capturas del dominio publicado.

## Registro final de enlaces

| Entregable | Enlace real | Estado al preparar este paquete |
|---|---|---|
| Figma | Por completar | SVG listos para importar |
| GitHub de PetStyle | Por completar | El repositorio recibido corresponde a otro proyecto |
| Vercel o Netlify | Por completar | Configuración preparada; despliegue remoto no realizado |
