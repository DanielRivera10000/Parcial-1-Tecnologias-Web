type Dictionary = Record<string, string>;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  es: () => import("../dictionaries/es.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(lang: string): Promise<Dictionary> {
  return (dictionaries[lang] ?? dictionaries.en)();
}