import { getDictionary } from "../lib/dictionary";

export default async function Footer({ lang }: { lang: string }) {
  const texto = await getDictionary(lang);

  return (
    <footer className="bg-[#BBCCBB] py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 text-sm font-semibold text-black">
        <p>{texto.derechosFooter}</p>
        <p>{texto.cursoFooter}</p>
      </div>
    </footer>
  );
}
