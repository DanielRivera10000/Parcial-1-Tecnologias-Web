import { getDictionary } from "../lib/dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{dict.welcome}</h1>
      <p className="mt-4">{dict.profile}</p>
    </main>
  );
}
