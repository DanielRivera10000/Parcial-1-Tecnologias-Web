type Diccionario = Record<string, string>;

const diccionarios: Record<string, () => Promise<Diccionario>> = {
  es: () => import("../dictionaries/es.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(lang: string): Promise<Diccionario> {
  return (diccionarios[lang] ?? diccionarios.en)();
}
