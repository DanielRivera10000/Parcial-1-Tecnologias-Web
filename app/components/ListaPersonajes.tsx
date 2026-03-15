import { obtenerPrimerosPersonajes12 } from "../lib/api";
import CardPersonajes from "../components/CardPersonajes";

export default async function CharacterList({ lang }: { lang: string }) {
  const personaje = await obtenerPrimerosPersonajes12();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {personaje.map((character) => (
        <CardPersonajes
          key={character.id}
          character={character}
          lang={lang}
        />
      ))}
    </section>
  );
}
