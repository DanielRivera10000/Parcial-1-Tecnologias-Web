import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="flex min-h-screen flex-col">
        <Header lang={lang} />
        <main className="flex-1 bg-[#e0e0e0]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
