import Header from "../components/Header";
import Footer from "../components/Footer";

import "../style/globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>KAWSAR || SHOPING COMPLEX</title>
      <meta name="description" content="Best online shopping site in Bangladesh" />
      <meta name="keywords" content="https://www.kawsarshop.com/bd" />
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
 

      <body className={`antialiased`}>
        
        <Header />

        <main>
      {children}
        </main>

        <Footer />
      
      </body>
    </html>
  );
}
