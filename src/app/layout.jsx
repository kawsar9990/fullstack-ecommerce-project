"use client";

import { usePathname } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../style/globals.css";

import { MainProduct } from "../context/MainProduct";


export default function RootLayout({ children }) {
  
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/searchpage"

  
  return (
    <html lang="en">
      <title>KAWSAR || SHOPING COMPLEX</title>
      <meta name="description" content="Best online shopping site in Bangladesh" />
      <meta name="keywords" content="https://www.kawsarshop.com/bd" />
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
 

      <body cz-shortcut-listen="true">
       <MainProduct>
        {!hideHeaderFooter && <Header />}
        <main>  
            {children}
        </main>
         {!hideHeaderFooter && <Footer />}
      </MainProduct>
      </body>
    </html>
  );
}
