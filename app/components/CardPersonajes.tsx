import Image from "next/image";
import Link from "next/link";
import { Character } from "../lib/api";

const BgColorHouses: Record<string, string> = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800] text-black",
  NoHouse: "bg-[#D1D5DB] text-black",
};

function obtenerColorCasa(house: string) {
  return BgColorHouses[house] || BgColorHouses["NoHouse"];
}

export default function CardPersonaje({
  character,
  lang,
}: {
  character: Character;
  lang: string;
}) {
  return (
    <Link href={`/${lang}/personaje/${character.id}`}>
      <article
        className={`mx-auto w-[245px] rounded-md overflow-hidden shadow-md ${obtenerColorCasa(
          character.house
        )}`}
      >
        <div className="flex min-h-[44px] items-center justify-center p-2 text-center text-sm font-semibold">
          {character.name}
        </div>

        <div className="relative h-[315px] w-full">
          <Image
            src={character.image || "https://placehold.co/300x400?text=No+Image"}
            alt={`Imagen de ${character.name}`}
            fill
            className="object-cover object-top"
          />
        </div>
      </article>
    </Link>
  );
}


