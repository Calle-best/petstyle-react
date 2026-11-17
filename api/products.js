import database from "../public/db.json" with { type: "json" };

// Adaptador para Vercel: los mismos 52 registros de JSON Server.
export default function handler(req, res) {
  res.setHeader("Allow", "GET");
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido" });
  res.setHeader("Cache-Control", "public, max-age=60");
  return res.status(200).json(database.products);
}
