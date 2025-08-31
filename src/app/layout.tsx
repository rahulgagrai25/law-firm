
import Commitment from "./components/Commitment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <NavBar/>
        <Hero/>
        <Commitment/>
        {children}
      </body>
    </html>
  );
}
