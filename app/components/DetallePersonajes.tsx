import Image from "next/image";
import { PersonajeDetalle } from "../lib/api";

const coloresBordeCasa: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  SinCasa: "border-[#D1D5DB]",
};

function obtenerColorBordeCasa(casa: string) {
  return coloresBordeCasa[casa] || coloresBordeCasa.SinCasa;
}

export default function DetallePersonaje({
  personaje,
  texto,
}: {
  personaje: PersonajeDetalle;
  texto: Record<string, string>;
}) {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#FDB608]">
          {personaje.name}
        </h1>

        <div
          className={`mx-auto grid w-fit grid-cols-1 overflow-hidden rounded-md border-4 bg-[#e0e0e0] shadow-sm md:grid-cols-2 ${obtenerColorBordeCasa(
            personaje.house
          )}`}
        >
          <div className="flex w-[270px] flex-col justify-center px-5 py-6 text-black">
            <p className="mb-3 text-base">
              <span className="font-bold">{texto.detalleCasa}:</span>{" "}
              {personaje.house || texto.detalleSinCasa}
            </p>

            <p className="mb-3 text-base">
              <span className="font-bold">{texto.detalleGenero}:</span>{" "}
              {personaje.gender || texto.detalleSinInformacion}
            </p>

            <div className="mt-2">
              <p className="mb-3 text-base">
                <span className="font-bold">{texto.detalleVarita}:</span>{" "}
                {personaje.wand.core || texto.detalleSinInformacion}
              </p>

              <p className="mb-3 text-base">
                <span className="font-bold">{texto.detalleMadera}:</span>{" "}
                {personaje.wand.wood || texto.detalleSinInformacion}
              </p>

              <p className="text-base">
                <span className="font-bold">{texto.detalleLongitud}:</span>{" "}
                {personaje.wand.length !== null
                  ? personaje.wand.length
                  : texto.detalleSinInformacion}
              </p>
            </div>
          </div>

          <div className="relative h-[360px] w-[270px]">
            <Image
              src={personaje.image || "https://placehold.co/300x420?text=No+Image"}
              alt={`${texto.detalleImagen} ${personaje.name}`}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


