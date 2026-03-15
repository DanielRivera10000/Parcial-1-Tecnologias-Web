import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../lib/dictionary";

export default async function Header({ lang }: { lang: string }) {
  const texto = await getDictionary(lang);

  return (
    <header className="bg-[#FDB608] py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2">
        <Link href={`/${lang}`} aria-label={texto.inicio}>
          <Image
            src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt={texto.tituloLogo}
            width={180}
            height={90}
            className="h-auto"
            priority
          />
        </Link>

        <div className="flex gap-2 text-sm font-semibold">
          <Link href="/en">{texto.idiomaIngles}</Link>
          <Link href="/es">{texto.idiomaEspanol}</Link>
        </div>
      </div>
    </header>
  );
}

