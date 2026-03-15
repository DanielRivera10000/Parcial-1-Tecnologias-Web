import ListaPersonajes from "../components/ListaPersonajes";
import { getDictionary } from "../lib/dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const texto = await getDictionary(lang);

  return (
    <section className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-[#FDB608]">
          {texto.tituloPrincipalInicio}
        </h1>
        <p className="text-center text-sm text-gray-700 mt-2 mb-8">
          {texto.descripcionInicio}
        </p>
        <ListaPersonajes lang={lang} />
      </div>
    </section>
  );
}

