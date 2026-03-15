export type Character = {
  id: string;
  name: string;
  image: string;
  house: string;
};

export type PersonajeDetalle = {
  id: string;
  name: string;
  image: string;
  house: string;
  gender: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
};

export async function obtenerPrimerosPersonajes12(): Promise<Character[]> {
  const respuesta = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-store",
  });

  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los personajes");
  }

  const personajes = await respuesta.json();

  return personajes.slice(0, 12);
}

export async function obtenerDetallePersonaje(
  id: string
): Promise<PersonajeDetalle> {
  const respuesta = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
    cache: "no-store",
  });

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el detalle del personaje");
  }

  const datos = await respuesta.json();
  const personaje = Array.isArray(datos) ? datos[0] : datos;

  if (!personaje) {
    throw new Error("Personaje no encontrado");
  }

  return {
    id: personaje.id,
    name: personaje.name,
    image: personaje.image,
    house: personaje.house,
    gender: personaje.gender || "",
    wand: {
      wood: personaje.wand?.wood || "",
      core: personaje.wand?.core || "",
      length:
        typeof personaje.wand?.length === "number"
          ? personaje.wand.length
          : null,
    },
  };
}
