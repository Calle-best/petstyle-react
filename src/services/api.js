// Servicio de la API de productos.
//  - Desarrollo:  JSON Server  →  npm run api  (http://localhost:3001/products)
//  - Producción: funciones de Vercel o Netlify exponen GET /api/products.
// Si tienes tu propia API, define VITE_API_URL en un archivo .env (ver .env.example).
const API_URL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:3001" : "/api")).replace(/\/+$/, "");

export async function fetchProducts({ signal } = {}) {
  const url = `${API_URL}/products`;

  let res;
  try {
    res = await fetch(url, { signal });
  } catch (err) {
    if (err.name === "AbortError") throw err; // petición cancelada a propósito
    throw new Error("No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.", { cause: err });
  }
  if (!res.ok) throw new Error(`El servidor respondió con el error ${res.status}.`);

  const data = await res.json();
  const list = Array.isArray(data) ? data : data.products; // JSON Server devuelve el arreglo; db.json trae { products }
  if (!Array.isArray(list)) throw new Error("La respuesta de la API no tiene el formato esperado.");
  return list;
}
