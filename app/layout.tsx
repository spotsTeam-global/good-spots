import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Info from "@/components/layout/info";
import Card from "@/components/home/card";


export const metadata = {
  title: "Good Spots",
  description:
    "Good spots curates the best spots around the world, a crowd sourced collections, no petty reviews or stars.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex h-screen w-full flex-col items-center justify-center">
          {children}
        </main>      
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
