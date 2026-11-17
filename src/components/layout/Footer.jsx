import { Link } from "react-router-dom";
import { PawPrint, MapPin, Clock, Mail, Phone, Package } from "lucide-react";
import { CONTACT } from "../../data/catalog.js";

// Enlaces a contenido existente en esta demostración académica.
const columns = [
  {
    title: "Acerca de PetStyle",
    links: [
      { label: "Quiénes somos", to: "/#nosotros" },
      { label: "Nuestra tienda", to: "/tienda" },
      { label: "Productos para perros", to: "/categoria/perros" },
      { label: "Productos para gatos", to: "/categoria/gatos" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Guía de tallas", to: "/guia-de-tallas" },
      { label: "Consultas sobre envíos", to: "/contacto" },
      { label: "Consultas sobre cambios", to: "/contacto" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    title: "Colecciones",
    links: [
      { label: "Cozy Otoño", to: "/tienda/coleccion/cozy" },
      { label: "Rain Impermeables", to: "/tienda/coleccion/rain" },
      { label: "Paseo & Aventura", to: "/tienda/coleccion/paseo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-pet-green text-white">
      {/* Recojo y ubicación */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2">
          <div className="flex gap-3">
            <Package className="mt-1 shrink-0 text-pet-gold" />
            <div>
              <h3 className="font-semibold">Recojo de pedidos</h3>
              <p className="mt-1 text-sm text-white/80">
                Prepara tu pedido en el carrito y coordina el envío o recojo por WhatsApp.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="mt-1 shrink-0 text-pet-gold" />
            <div>
              <h3 className="font-semibold">Ubicación</h3>
              <p className="mt-1 text-sm text-white/80">{CONTACT.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <PawPrint className="text-pet-gold" size={24} />
            <span className="font-display text-2xl font-bold">PetStyle</span>
          </div>
          <p className="mt-3 text-sm text-white/80">Asesoría, ventas y consultas:</p>
          <ul className="mt-2 space-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2"><Phone size={15} className="text-pet-gold" /> WhatsApp {CONTACT.whatsappLabel}</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-pet-gold" /> {CONTACT.email}</li>
            <li className="flex items-center gap-2"><Clock size={15} className="text-pet-gold" /> {CONTACT.hours}</li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-pet-gold">{col.title}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {col.links.map((l) => (
                <li key={l.label}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/70">
        Proyecto académico · Pedidos coordinados por WhatsApp · © {new Date().getFullYear()} PetStyle – Moda para Mascotas.
      </div>
    </footer>
  );
}
