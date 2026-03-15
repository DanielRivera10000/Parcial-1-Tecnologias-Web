import DetallePersonaje from "../../../components/DetallePersonajes";
import { getDictionary } from "../../../lib/dictionary";
import { obtenerDetallePersonaje } from "../../../lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const texto = await getDictionary(lang);
  const personaje = await obtenerDetallePersonaje(id);

  return {
    title: `${texto.tituloSecundarioDetalle} ${personaje.name} - HarryPotterApp`,
    description: texto.descripcionDetalle,
  };
}

export default async function PaginaDetalle({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const texto = await getDictionary(lang);
  const personaje = await obtenerDetallePersonaje(id);

  return <DetallePersonaje personaje={personaje} texto={texto} />;
}

