import database from "../../public/db.json" with { type: "json" };

// API de funciones moderna de Netlify (Request / Response).
export default async function handler(request) {
  if (request.method !== "GET") {
    return Response.json({ error: "Método no permitido" }, { status: 405, headers: { Allow: "GET" } });
  }
  return Response.json(database.products, { headers: { "Cache-Control": "public, max-age=60" } });
}
