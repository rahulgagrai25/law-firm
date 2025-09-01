
import Commitment from "./components/Commitment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PracticeAreas from "./components/Practice";
import Story from "./components/Story";
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
        <PracticeAreas/>
        <Story/>
        {children}
      </body>
    </html>
  );
}
