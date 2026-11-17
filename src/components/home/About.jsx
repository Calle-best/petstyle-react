import Button from "../ui/Button.jsx";

export default function About() {
  return (
    <section id="nosotros" className="bg-pet-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-pet-green">Conoce PetStyle</h2>
          <p className="mt-3 text-sm leading-relaxed text-pet-ink/80">
            Reunimos ropa y accesorios para perros y gatos en un catálogo fácil de explorar.
            Compara productos, consulta las tallas y prepara tu pedido para coordinarlo por WhatsApp.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Button to="/contacto" variant="secondary">Hablemos de tu mascota</Button>
        </div>
      </div>
    </section>
  );
}
